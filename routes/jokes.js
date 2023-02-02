var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", function (req, res, next) {
  db("SELECT * FROM jokes;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});


router.post("/", async function (req, res, next) {
  const text = req.body.text;
  try {
    await db(
      `INSERT INTO jokes (text) values ('${text}')`
    );
    res.send(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

/*
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
*/

module.exports = router;
