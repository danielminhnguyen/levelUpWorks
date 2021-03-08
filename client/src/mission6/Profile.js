import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import littleRocket from "../assets/images/littleRocket.png";
import skillzBadges from "../assets/images/skillzbadges.png";

import BlankProfile from "assets/img/Students/blank-profile.png";
import { calculateAge, birthDayFormat } from "utils";
import { Typography } from "@material-ui/core";

const lightGreyColor = "#F0F0F0";
const orangeColor = "#F9B953";

const useStyles = makeStyles({
  mainDiv: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80vw",
    height: "80vh",
  },
  topDiv: {
    display: "flex",
    height: "40vh",
  },
  basicInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightGreyColor,
    height: "220px",
    width: "225px",
    borderRadius: "8px",
    fontSize: "2em",
    fontWeight: 600,
    color: "black",
  },
  commentBox: {
    maxHeight: "150px",
    minHeight: "150px",
    border: "0px",
    backgroundColor: lightGreyColor,
    textAlign: "left",
    padding: "10px",
    maxWidth: "200px",
    minWidth: "200px",
    fontFamily: "Open Sans",
  },
  profileImage: {
    position: "relative",
    top: "20px",
    borderRadius: "50%",
    width: 100,
    height: 100,
  },
  topDivQuarter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "auto",
    marginLeft: "20px",
  },
  quarterTop: {
    fontSize: "1.8em",
    width: "auto",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  quarterBot: {
    fontSize: "1.8em",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  skillzBadges: {
    fontSize: "1.8em",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  hunnitPercGrey: {
    backgroundColor: lightGreyColor,
    height: "50px",
    width: "200px",
    borderRadius: "8px",
  },
  fiftyPerc: {
    position: "relative",
    backgroundColor: orangeColor,
    height: "50px",
    width: "100px",
    borderRadius: "8px",
    bottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: 600,
  },
  superPowerDiv: {
    width: "14vw",
    fontSize: "1.8em",
  },
  superPowers: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  third: {
    display: "flex",
    margin: "20px",
  },
  botDiv: {
    display: "flex",
  },
  h4: {
    fontSize: "2em",
    color: "black",
    textAlign: "left",
    marginLeft: "20px",
  },
  botDivForm: {
    backgroundColor: lightGreyColor,
    borderRadius: "8px",
    padding: "50px",
  },
  botDivFormObject: {
    "& h4": {
      fontSize: "1.5em",
      margin: "0px",
    },
    "& input": {
      height: "50px",
      border: "1px solid black",
    },
  },
  littleRocketText: {
    fontSize: "2em",
    fontWeight: "600",
  },
  botDivRight: {
    display: "flex",
    flexDirection: "column",
    width: "40vw",
  },
  exportButton: {
    width: "200px",
    fontWeight: "600",
    fontSize: "2em",
    height: "50px",
    backgroundColor: lightGreyColor,
    padding: "20px",
    position: "relative",
    top: "135px",
    left: "20px",
  },
  inline: {
    display: "flex",
    "& div": {
      marginRight: "50px",
    },
  },
  botDivRightDiv: {
    width: "18vw",
    "& div": {
      width: "200px",
      textAlign: "left",
      marginLeft: "10px",
      fontSize: "1.2em",
    },
  },
});

export default function Profile(props) {
  const classes = useStyles();
  const { studentInfo, teacherInfo } = props;

  const age = calculateAge(studentInfo.DOB);
  const dateOfBirth = birthDayFormat(studentInfo.DOB);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.topDiv}>
        <div className={classes.topDivQuarter}>
          <img
            className={classes.profileImage}
            src={
              studentInfo.ProfilePic === ""
                ? BlankProfile
                : studentInfo.ProfilePic
            }
            alt=""
          />
          <div className={classes.basicInfo}>
            <div style={{ fontWeight: 300, marginBottom: "20px" }}>
              {studentInfo.FirstName} {studentInfo.LastName}
            </div>
            <div>L {studentInfo.Level}</div>
            <div>{age} years</div>
          </div>
        </div>
        <div className={classes.topDivQuarter}>
          <div className={classes.quarterTop}>
            <h3>ATTENDANCE</h3>
            <div className={classes.progressTracker}>
              <div className={classes.hunnitPercGrey} />
              <div className={classes.fiftyPerc}>50%</div>
            </div>
            <textarea
              className={classes.commentBox}
              type="text"
              placeholder="COMMENTS"
            ></textarea>
          </div>
        </div>
        <div className={classes.topDivQuarter}>
          <img style={{ transform: "scale(0.7)" }} src={littleRocket} alt="" />
          <div className={classes.littleRocketText}>L {studentInfo.Level}</div>
        </div>
        <div className={classes.topDivQuarter}>
          <div className={classes.superPowerDiv}>
            <h3>SUPER POWERS</h3>
            <div className={classes.superPowers}>
              <div>Patience</div>
              <div>Perserverance</div>
              <div>Attention to Detail</div>
            </div>
          </div>
        </div>
        <div className={classes.topDivQuarter}>
          <div className={classes.skillzBadges}>
            <h3>SKILLZ BADGES</h3>
            <img
              style={{
                position: "relative",
                bottom: "80px",
                right: "180px",
                transform: "scale(0.5)",
              }}
              src={skillzBadges}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={classes.botDiv}>
        <div className={classes.botDivForm}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>DOB</h4>
                <Typography variant="h4">{dateOfBirth}</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>SCHOOL</h4>
                <Typography variant="h4">{studentInfo.School}</Typography>
              </div>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>PARENT</h4>
                <Typography variant="h4">{studentInfo.ParentName}</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>EMAIL</h4>
                <Typography variant="h4">{studentInfo.ParentEmail}</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>PHONE</h4>
                <Typography variant="h4">{studentInfo.ParentPhone}</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>TEACHER</h4>
                <Typography variant="h4">
                  {teacherInfo.FirstName} {teacherInfo.LastName}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>EMAIL</h4>
                <Typography variant="h4">{teacherInfo.Email}</Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.botDivFormObject}>
                <h4>PHONE</h4>
                <Typography variant="h4">{teacherInfo.Phone}</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.botDivRight}>
          <div style={{ display: "flex" }}>
            <div className={classes.botDivRightDiv}>
              <h4 className={classes.h4}>PAYMENTS</h4>
              <div style={{ marginLeft: "12px" }}>
                <div>PAID</div>
                <div>PENDING</div>
                <div>SEND REMINDER</div>
              </div>
            </div>
            <div className={classes.botDivRightDiv}>
              <h4 className={classes.h4}>MEDICAL</h4>
              <div className={classes.inline}>
                <div>ALLERGIES</div>
                <Typography variant="h4">
                  {studentInfo.Allergy === null ? "None" : studentInfo.Allergy}
                </Typography>
              </div>
              <div className={classes.inline}>
                <div>BLOODGROUP</div>
                <Typography variant="h4">{studentInfo.BloodType}</Typography>
              </div>
            </div>
          </div>
          <Button className={classes.exportButton}>Export</Button>
        </div>
      </div>
    </div>
  );
}
