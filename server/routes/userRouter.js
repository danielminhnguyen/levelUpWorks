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
    const pw = await bcrypt.hashSync("abcd1234", 8);
    console.log("example password: abcd1234 | " + pw);
    if (email && password) {
      db.query(
        "Select * FROM `user` WHERE `email` = ? AND `role` = ?",
        // "SELECT a.*, b.`FirstName` `TeacherFirstName`,  b.`LastName` `TeacherLastName` FROM `levelUpWorks`.`user` a LEFT OUTER JOIN `levelUpWorks`.`User` b ON a.`TeacherID` = b.`UserID` WHERE a.`email` = ? AND a.`role` = ?;",
        [email, role],
        async (err, results) => {
          if (err) {
            console.log(err);
          } else if (
            results.length === 1 &&
            bcrypt.compareSync(password, results[0].password)
          ) {
            // console.log(results[0]);
            const encoding = "base64";
            const uri = `data:${results[0].MimeType};${encoding},${results[0].ProfilePic}`;
            res.status(200).send({
              UserID: results[0].UserID,
              TeacherID: results[0].TeacherID,
              FirstName: results[0].firstName,
              LastName: results[0].lastName,
              Role: results[0].role,
              Email: results[0].email,
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
