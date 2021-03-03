import expressAsyncHandler from "express-async-handler";

import express from "express";
import db from "../connection.js";

const studentRouter = express.Router();

studentRouter.post(
  "/teacherinfo",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    // console.log("profile", teacherID);
    db.query(
      "SELECT `UserID`, `FirstName`, `LastName` FROM `User` WHERE `Role` = 'teacher' AND `UserID` = ?",
      [teacherID],
      async (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(rows);
        }
      }
    );
  })
);

export default studentRouter;
