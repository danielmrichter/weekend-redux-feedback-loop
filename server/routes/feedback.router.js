const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// TODO: This route adds a new feedback entry
router.post("/", (req, res) => {
  const sqlText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)
    `;
  const sqlValues = [
    req.body.feeling,
    req.body.understanding,
    req.body.support,
    req.body.comment,
  ];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => res.sendStatus(201))
    .catch((dbErr) => {
      console.log(`Error in SQL Query POST/api/feedback!`, dbErr);
      res.sendStatus(500);
    });
});
router.patch(`/:id`, (req, res) => {
  const sqlText = `
    UPDATE "feedback"
	    SET "flagged" = NOT "flagged"
	    WHERE "id" = $1;`;
  const sqlValues = [req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => res.sendStatus(200))
    .catch((dbErr) => console.log(`Error updating flagged:`, dbErr));
});
router.delete(`/:id`, (req, res) => {
  const sqlText = `DELETE FROM "feedback"
        WHERE ID = $1
    `;
  const sqlValues = [req.params.id];
  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => res.sendStatus(200))
    .catch((dbErr) => {
      console.log(`Error deleting item:`, dbErr);
      res.sendStatus(500);
    });
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get("/", (req, res) => {
  console.log("testing");
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
