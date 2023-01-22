var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get("/", function (req, res, next) {
  db("SELECT * FROM users;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
