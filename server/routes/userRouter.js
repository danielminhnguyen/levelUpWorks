import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import db from "../connection.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const { email, password, role } = req.body;
    if (email && password) {
      db.query(
        // "Select * FROM `missionx`.`User` WHERE `Email` = ? AND `Role` = ?",
        "SELECT a.*, b.`FirstName` `TeacherFirstName`,  b.`LastName` `TeacherLastName` FROM `missionx`.`User` a LEFT OUTER JOIN `missionx`.`User` b ON a.`TeacherID` = b.`UserID` WHERE a.`Email` = ? AND a.`Role` = ?;",
        [email, role],
        async (err, results) => {
          if (err) {
            console.log(err);
          } else if (results.length === 1 && bcrypt.compareSync(password, results[0].Password)) {
            // console.log(results[0]);
            const encoding = "base64";
            const uri = `data:${results[0].MimeType};${encoding},${results[0].ProfilePic}`;
            res.status(200).send({
              UserID: results[0].UserID,
              FirstName: results[0].FirstName,
              LastName: results[0].LastName,
              Role: results[0].Role,
              ProfilePic: uri,
              School: results[0].School,
              DateOfBirth: results[0].DateOfBirth,
              ContactNumber: results[0].ContactNumber,
              Email: results[0].Email,
              CoursePurchased: results[0].CoursePurchased,
              token: generateToken(results[0]),
              TeacherFirstName: results[0].TeacherFirstName,
              TeacherLastName: results[0].TeacherLastName,
            });
          } else {
            res.status(401).send({ message: "invalid email or password" });
          }
        }
      );
    } else {
      res.status(401).send({ message: "invalid POST string" });
    }
  })
);

userRouter.post("/register", async (req, res) => {
  const { firstname, lastname, email, role } = req.body;
  const password = await bcrypt.hashSync(req.body.password, 8);
  console.log(req.body);
  if (email && email) {
    db.query(
      "INSERT INTO `User` (`FirstName`,`LastName`,`Email`,`Password`,`Role`) VALUES (? , ? , ? , ? , ?)",
      [firstname, lastname, email, password, role],
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("user succesful created");
          res.status(200).send("User Succesful Created");
        }
      }
    );
  }
});

export default userRouter;
