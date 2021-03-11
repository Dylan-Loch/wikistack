const express = require("express");
const router = express.Router();
const addPage = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send("");
});

router.post("/", (req, res, next) => {
  res.send("");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

router.post("/add", async (req, res, next) => {
  try {
    // const Page = ({ title, content})
    console.log(req.body);
    const title = await [req.body.title]
    console.log("Request-------------------------------------------------------------------------->", title);
    res.json(title);
    // res.redirect("/")
  } catch (error) {
    next(error);
  }
});

module.exports = router;
