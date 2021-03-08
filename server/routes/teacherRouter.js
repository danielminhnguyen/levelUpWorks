import expressAsyncHandler from "express-async-handler";

import express from "express";
import db from "../connection.js";
import { converToNumArray } from "../utils.js";

const teacherRouter = express.Router();

teacherRouter.post(
  "/studentprofile",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    // console.log("profile", teacherID);
    db.query(
      "SELECT * FROM `user` WHERE `role` = 'student' AND `TeacherID` = ?",
      [teacherID],
      async (err, rows, fields) => {
        const data = [];
        if (err) {
          console.log(err);
        } else {
          const encoding = "base64";
          rows.forEach((row) => {
            let uri;
            if (row.profilePic === null) {
              uri = "";
            } else {
              uri = `data:${row.profilePicMime};${encoding},${row.profilePic}`;
            }
            data.push({
              UserID: row.userID,
              FirstName: row.firstName,
              LastName: row.lastName,
              Level: row.level,
              ProfilePic: uri,
              DOB: row.dob,
              Allergy: row.allergy,
              BloodType: row.bloodType,
              School: row.school,
              ParentName: row.parentName,
              ParentEmail: row.parentEmail,
              ParentPhone: row.parentPhone,
              Class: row.class,
            });
          });
          res.status(200).send(data);
        }
      }
    );
  })
);

teacherRouter.post(
  "/profilerequest",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    console.log("profile", teacherID);
    db.query(
      "SELECT `UserID`, `firstName`, `lastName`, `profilePic`, `profilePicMime`, `TeacherID`, `role`, `dob`, `bloodType`, `allergy` FROM `user`",
      [teacherID],
      async (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          const data = [];
          const encoding = "base64";
          rows.forEach((row) => {
            // console.log(row);
            const uriProfile = `data:${row.MimeType};${encoding},${row.ProfilePic}`;
            data.push({
              UserID: row.UserID,
              FirstName: row.FirstName,
              LastName: row.LastName,
              ProfilePic: uriProfile,
              Role: row.Role,
              Gender: row.Gender,
              Done: row.Done,
              DateCreated: row.DateCreated,
            });
          });
          res.status(200).send(data);
        }
      }
    );
  })
);

teacherRouter.post(
  "/markrequest",
  expressAsyncHandler(async (req, res) => {
    const students = converToNumArray(req.body.students);
    console.log(
      `UPDATE \`missionx\`.\`HelpRequest\` SET \`Done\` = 0 WHERE \`UserID\` IN (${students})`
    );
    db.query(
      "UPDATE `missionx`.`HelpRequest` SET `Done` = 0 WHERE `UserID` IN (?);",
      [students],
      async (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send("Updated Successful");
        }
      }
    );
  })
);

teacherRouter.post(
  "/submission",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    console.log("profile", teacherID);
    db.query(
      "SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName`, `User`.`ProfilePic`, `User`.`MimeType` `ProfileMime`, `User`.`TeacherID`, `User`.`Role`, `User`.`Gender`, `ProgressHistory`.`ProjectID`, `ProgressHistory`.`DateStarted`, `ProgressHistory`.`DateSubmitted`, `ProgressHistory`.`MimeType` `ProjectMime`,  `ProgressHistory`.`Submission`, `ProgressHistory`.`ShowRequest` , `ProgressHistory`.`ID` FROM `missionx`.`User` , `missionx`.`ProgressHistory` WHERE `User`.`UserId` = `ProgressHistory`.`UserId` AND `User`.`TeacherID` = ? AND `ProgressHistory`.`DateCompleted` IS NULL ;",
      [teacherID],
      async (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          const data = [];
          const encoding = "base64";
          rows.forEach((row) => {
            // console.log(row);
            const uriProfile = `data:${row.ProfileMime};${encoding},${row.ProfilePic}`;
            const uriProject = `data:${row.ProjectMime};${encoding},${row.Submission}`;

            data.push({
              ID: row.ID,
              UserID: row.UserID,
              FirstName: row.FirstName,
              LastName: row.LastName,
              ProfilePic: uriProfile,
              Gender: row.Gender,
              ProjectID: row.ProjectID,
              DateStarted: row.DateStarted,
              DateSubmitted: row.DateSubmitted,
              DateCompleted: row.DateCompleted,
              Submission: uriProject,
              ShowRequest: row.ShowRequest,
            });
          });
          res.status(200).send(data);
        }
      }
    );
  })
);

teacherRouter.post(
  "/marksubmission",
  expressAsyncHandler(async (req, res) => {
    const students = converToNumArray(req.body.students);
    console.log(students);
    let date = new Date();
    date = `${date.getUTCFullYear()}-${`00${date.getUTCMonth() + 1}`.slice(
      -2
    )}-${`00${date.getUTCDate()}`.slice(-2)} ${`00${date.getUTCHours()}`.slice(
      -2
    )}:${`00${date.getUTCMinutes()}`.slice(
      -2
    )}:${`00${date.getUTCSeconds()}`.slice(-2)}`;
    db.query(
      "UPDATE `missionx`.`ProgressHistory` SET `DateCompleted` = ? , `ShowRequest` = 0 WHERE `ID` IN (?);",
      [date, students],
      async (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send("Updated Successful");
        }
      }
    );
  })
);

teacherRouter.post(
  "/progressbeginner",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    console.log("profile", teacherID);
    db.query(
      "SELECT * FROM (SELECT DISTINCT `ProgressHistory`.`UserID`, GROUP_CONCAT(`ProgressHistory`.`ProjectID`) AS `Beginner` FROM `missionx`.`ProgressHistory` WHERE `ProjectID` <= 15 AND `DateSubmitted` IS NOT NULL  GROUP BY `UserID`) AS A JOIN (SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName` FROM `missionx`.`User` WHERE  `User`.`TeacherID` = ?) AS B ON A.`UserID` = B.`UserID`;",
      [teacherID],
      async (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).send(results);
        }
      }
    );
  })
);

teacherRouter.post(
  "/progressintermediate",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    db.query(
      "SELECT * FROM (SELECT DISTINCT `ProgressHistory`.`UserID`, GROUP_CONCAT(`ProgressHistory`.`ProjectID`) AS `Intermediate` FROM `missionx`.`ProgressHistory` WHERE `ProjectID` BETWEEN 16 AND 30 AND `DateSubmitted` IS NOT NULL  GROUP BY `UserID`) AS A JOIN (SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName` FROM `missionx`.`User` WHERE  `User`.`TeacherID` = ?) AS B ON A.`UserID` = B.`UserID`",
      [teacherID],
      async (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      }
    );
  })
);

teacherRouter.post(
  "/progressadvance",
  expressAsyncHandler(async (req, res) => {
    const { teacherID } = req.body;
    db.query(
      "SELECT * FROM (SELECT DISTINCT `ProgressHistory`.`UserID`, GROUP_CONCAT(`ProgressHistory`.`ProjectID`) AS `Advanced` FROM `missionx`.`ProgressHistory` WHERE `ProjectID` > 31 AND `DateSubmitted` IS NOT NULL  GROUP BY `UserID`) AS A JOIN (SELECT `User`.`UserID`, `User`.`FirstName`, `User`.`LastName` FROM `missionx`.`User` WHERE  `User`.`TeacherID` = ?) AS B ON A.`UserID` = B.`UserID`",
      [teacherID],
      async (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      }
    );
  })
);

export default teacherRouter;
