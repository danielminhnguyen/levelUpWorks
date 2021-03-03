import express from "express";
import expressAsyncHandler from "express-async-handler";
import db from "../connection.js";

// TODO: Improve security of the filter sql

const projectRouter = express.Router();

projectRouter.post(
  "/allprojects",
  expressAsyncHandler(async (req, res) => {
    db.query("SELECT * FROM `Project`", async (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
  })
);

projectRouter.get(
  "/filter",
  expressAsyncHandler((req, res) => {
    const course = req.query.course || "";
    const limit = Number(req.query.limit) || "";
    const subscription =
      req.query.subscription !== "" ? `AND \`Subscription\` IN (${req.query.subscription})` : "";
    const activity =
      req.query.activity !== "" ? `AND \`ActivityType\` IN (${req.query.activity})` : "";
    const subject =
      req.query.subject !== ""
        ? `AND (\`SubjectMatter1\` IN (${req.query.subject}) OR \`SubjectMatter2\` IN (${req.query.subject}) OR \`SubjectMatter3\` IN (${req.query.subject}))`
        : "";
    const level = req.query.level !== "" ? `AND \`Year\` IN (${req.query.level})` : "";

    const sql = `SELECT * FROM \`Project\` WHERE \`Course\` = ${course} ${subscription} ${activity} ${subject} ${level} LIMIT ${limit}`;

    // console.log(
    //   `SELECT * FROM \`Project\` WHERE \`Course\` = ${course} ${subscription} ${activity} ${subject} ${level} LIMIT ${limit}`
    // );

    db.query(
      sql,
      // "SELECT * FROM `Project` WHERE `Course` = ? ? ? ? ? LIMIT ?",
      // [course, subscription, activity, subject, level, limit],
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

projectRouter.get(
  "/builder",
  expressAsyncHandler((req, res) => {
    // console.log(req.query);
    const projectid = Number(req.query.projectid);
    // console.log(projectid);
    db.query("SELECT * FROM `Project` WHERE `ProjectID` = ?", [projectid], async (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
  })
);

export default projectRouter;
