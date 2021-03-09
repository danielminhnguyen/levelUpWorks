// common imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// image imports
import littleRocket from "../assets/images/littleRocket.png";
import skillzBadges from "../assets/images/skillzbadges.png";
import BlankProfile from "assets/img/Students/blank-profile.png";

import { calculateAge, birthDayFormat } from "utils";
import { Typography } from "@material-ui/core";

// Colors
const lightGrey = "#F0F0F0";
const darkGrey = "rgb(156,156,164,0.4)";
const orange = "#F9B953";

const useStyles = makeStyles({
  main: {
    fontFamily: "Roboto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  progress: {
    margin: "20px 10px 20px 20px",
    borderRadius: "8px",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    height: "81vh",
    width: "40vw",
    paddingTop: "80px",
    padding: "20px",
    backgroundColor: lightGrey,
    "& .divHeading": {
      position: "absolute",
      top: "30px",
      left: "30px",
      textDecoration: "underline",
      fontSize: "1.8em",
    },
  },
  rightDiv: {
    margin: "20px 20px 20px 10px",
    width: "30vw",
  },
  payments: {
    position: "relative",
    paddingTop: "80px",
    backgroundColor: lightGrey,
    borderRadius: "8px",
    marginBottom: "2vh",
    height: "15vh",
    "& .divHeading": {
      position: "absolute",
      top: "30px",
      left: "30px",
      textDecoration: "underline",
      fontSize: "1.8em",
    },
  },
  personal: {
    marginTop: "2vh",
    position: "relative",
    backgroundColor: lightGrey,
    padding: "80px 20px 20px 20px",
    height: "64vh",
    borderRadius: "8px",
    "& .divHeading": {
      position: "absolute",
      top: "30px",
      left: "30px",
      textDecoration: "underline",
      fontSize: "1.8em",
    },
    "& .secondaryHeading": {
      textDecoration: "underline",
      fontSize: "1.6em",
      margin: "20px 0px 20px 0px",
    },
    "& > div": {
      marginLeft: "10px",
    },
    "& .inline": {
      display: "flex",
      "& div,h4": {
        fontSize: "1.4em",
        width: "100px",
        marginRight: "80px",
      },
    },
  },
  commentBox: {
    maxHeight: "180px",
    minHeight: "180px",
    textAlign: "left",
    padding: "5px",
    maxWidth: "480px",
    minWidth: "480px",
    fontFamily: "Open Sans",
    borderRadius: "8px",
    border: "1px solid grey",
    color: "grey",
  },
  profileObject: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "auto",
    marginLeft: "20px",
    "& .image": {
      position: "relative",
      top: "20px",
      borderRadius: "50%",
      width: 80,
      height: 80,
    },
    "& .basicInfo": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: darkGrey,
      height: "180px",
      width: "160px",
      borderRadius: "8px",
      fontSize: "1.5em",
      fontWeight: 600,
      color: "black",
      paddingBottom: "20px",
      "& div": {
        margin: "5px",
      },
    },
  },
  progressTrack: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "35vh",
    width: "20vw",
    fontSize: "1.8em",
    "& > div": {
      display: "flex",
      width: "320px",
      "& > div": {
        width: "200px ",
      },
    },
  },
  littleRocket: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "24vh",
    "& img": {
      transform: "scale(0.6)",
    },
    "& div": {
      marginTop: "-40px",
      fontSize: "1.8em",
    },
  },
  skillzBadges: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "1.5em",
    "& > img": {
      height: "120px",
      marginTop: "-30px",
    },
  },
  superPowers: {
    fontSize: "1.3em",
    "& h3": {
      fontSize: "1.2em",
      marginBottom: "4px",
    },
    "& div": {
      fontWeight: "300",
    },
  },
  h4: {
    fontSize: "2em",
    color: "black",
    textAlign: "left",
    marginLeft: "20px",
  },
  formObject: {
    "& h4": {
      fontSize: "1.3em",
      margin: "0px",
    },
  },
});

export default function Profile(props) {
  const classes = useStyles();
  const { studentInfo, teacherInfo } = props;

  const age = calculateAge(studentInfo.DOB);
  const dateOfBirth = birthDayFormat(studentInfo.DOB);

  return (
    <div className={classes.main}>
      <div className={classes.progress}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3}>
            <div className={classes.profileObject}>
              <img
                className="image"
                src={
                  studentInfo.ProfilePic === ""
                    ? BlankProfile
                    : studentInfo.ProfilePic
                }
                alt=""
              />
              <div className="basicInfo">
                <div style={{ fontWeight: "300" }}>
                  {studentInfo.FirstName} {studentInfo.LastName}
                </div>
                <div>P {studentInfo.Level}</div>
                <div>{age} years</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className={classes.progressTrack}>
              <div>
                <div style={{ fontWeight: "300" }}>LAST WEEK</div>
                <div>
                  P {studentInfo.Level - 3} - P {studentInfo.Level - 1}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: "300" }}>THIS WEEK</div>
                <div>P {studentInfo.Level}</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.littleRocket}>
              <img src={littleRocket} alt="" />
              <div>P {studentInfo.Level}</div>
            </div>
          </Grid>
          {/* row two */}
          <Grid item xs={12} sm={9}>
            <textarea
              className={classes.commentBox}
              type="text"
              placeholder="COMMENTS"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className={classes.superPowers}>
              <h3>SUPER POWERS</h3>
              <div>
                <div>Patience</div>
                <div>Perserverance</div>
                <div>Attention to Detail</div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Typography variant="h3" className="divHeading">
          PROGRESS
        </Typography>
        <div className={classes.skillzBadges}>
          <h3>SKILL BADGES</h3>
          <img src={skillzBadges} alt="" />
        </div>
      </div>
      <div className={classes.rightDiv}>
        <div className={classes.payments}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" className="divHeading">
                PAYMENT
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div>
                <div>PAID</div>
                <div>PENDING</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button>Send Reminder</Button>
            </Grid>
          </Grid>
        </div>
        <div className={classes.personal}>
          <Typography variant="h3" className="divHeading">
            PERSONAL
          </Typography>
          <div>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>DOB</h4>
                  <Typography variant="h4">{dateOfBirth}</Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>SCHOOL</h4>
                  <Typography variant="h4">{studentInfo.School}</Typography>
                </div>
              </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>PARENT</h4>
                  <Typography variant="h4">{studentInfo.ParentName}</Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>EMAIL</h4>
                  <Typography variant="h4">
                    {studentInfo.ParentEmail}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>PHONE</h4>
                  <Typography variant="h4">
                    {studentInfo.ParentPhone}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>TEACHER</h4>
                  <Typography variant="h4">
                    {teacherInfo.FirstName} {teacherInfo.LastName}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>EMAIL</h4>
                  <Typography variant="h4">{teacherInfo.Email}</Typography>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.formObject}>
                  <h4>PHONE</h4>
                  <Typography variant="h4">{teacherInfo.Phone}</Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.medical}>
            <Typography variant="h3" className="secondaryHeading">
              MEDICAL
            </Typography>
            <div className="inline">
              <div>ALLERGIES</div>
              <Typography variant="h4">
                {studentInfo.Allergy === null ? "None" : studentInfo.Allergy}
              </Typography>
            </div>
            <div className="inline">
              <div>BLOODGROUP</div>
              <Typography variant="h4">{studentInfo.BloodType}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
