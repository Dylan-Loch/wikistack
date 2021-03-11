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

// router.post("/add", (req, res, next) => {
//   let title = req.body.title;

//   res.send("");
// });

module.exports = router;
