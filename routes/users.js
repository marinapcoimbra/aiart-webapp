var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
/*
router.get("/", (req, res) => {
  res.send("Welcome to the API");
});
*/
router.get("/", function (req, res, next) {
  db("SELECT * FROM users;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", async function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    await db(
      `INSERT INTO users (email, password) values ('${email}', '${password}')`
    );
    res.send(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async function (req, res, next) {
  const id = Number(req.params.id);
  try {
    const response = await db(`SELECT * FROM  where id= ${id}`);
    const user = response.data[0];
    if (!user) {
      res.status(404).send();
      return;
    }
    await db(`DELETE FROM users where id=${id}`);
    res.send(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
