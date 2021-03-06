const express = require("express");
const morgan = require("morgan");
const app = express();
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
// const userRouter = require(".routes/users");
const addPage = require("./views/addPage");

app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.redirect("/wiki");
});
app.use("/wiki", wikiRouter);
// app.use("/user", userRouter);

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await User.sync();
  await Page.sync();
  await db.sync({ force: true });
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
