import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const lightGreyColor = "#F4F4F6";
const orangeColor = "#F9B953";

const useStyles = makeStyles({
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    padding: "50px",
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
    fontFamily: "Open Sans",
  },
  profileImage: {
    position: "relative",
    top: "20px",
    minHeight: "100px",
    minWidth: "100px",
    backgroundColor: "black",
    borderRadius: "50%",
  },
  topDivQuarter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "center",
    width: "15vw",
  },
  quarterTop: {
    fontSize: "1.8em",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flexstart",
  },
  quarterBot: {
    fontSize: "1.8em",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  inputText: {
    height: "40px",
    border: "0px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  h4: {
    fontSize: "2em",
    color: "black",
    textAlign: "left",
    marginLeft: "20px",
  },
  thirdDiv: {
    border: "2px solid black",
    width: "14vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
  },
  botDivLeft: {
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: lightGreyColor,
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
  },
  botDivRight: {
    display: "flex",
    alignItems: "center",
    width: "40vw",
  },
  exportButton: {
    width: "200px",
    fontWeight: "600",
    fontSize: "2em",
    height: "50px",
    backgroundColor: lightGreyColor,
    padding: "20px",
  },
  inline: {
    display: "flex",
    "& div": {
      marginRight: "50px",
    },
  },
  botDivRightDiv: {
    width: "20vw",
    "& div": {
      textAlign: "left",
      marginLeft: "10px",
      fontSize: "1.2em",
    },
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.topDiv}>
        <div className={classes.topDivQuarter}>
          <div className={classes.profileImage} />
          <div className={classes.basicInfo}>
            <div style={{ fontWeight: 300, marginBottom: "20px" }}>
              Bohai Chen
            </div>
            <div>L 05</div>
            <div>7 years</div>
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
          <div className={classes.quarterTop}>
            <h3>SUPER POWERS</h3>
            <div className={classes.superPowers}>
              <div>Patience</div>
              <div>Perserverance</div>
              <div>Attention to Detail</div>
            </div>
          </div>
        </div>
        <div className={classes.topDivQuarter}>
          <div className={classes.quarterTop}>
            <img src="" alt="" />
          </div>
          <div className={classes.quarterBot}>
            <Button className={classes.exportButton}>EXPORT</Button>
          </div>
        </div>
      </div>
      <div className={classes.botDiv}>
        <div className={classes.botDivLeft}>
          <div className={classes.third}>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>DOB</h4>
              <input className={classes.inputText} type="text" />
            </div>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>SCHOOL</h4>
              <input className={classes.inputText} type="text" />
            </div>
          </div>
          <div className={classes.third}>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>PARENT</h4>
              <input className={classes.inputText} type="text" />
            </div>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>EMAIL</h4>
              <input className={classes.inputText} type="text" />
            </div>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>PHONE</h4>
              <input className={classes.inputText} type="text" />
            </div>
          </div>
          <div className={classes.third}>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>TEACHER</h4>
              <input className={classes.inputText} type="text" />
            </div>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>EMAIL</h4>
              <input className={classes.inputText} type="text" />
            </div>
            <div className={classes.thirdDiv}>
              <h4 className={classes.h4}>PHONE</h4>
              <input className={classes.inputText} type="text" />
            </div>
          </div>
        </div>
        <div className={classes.botDivRight}>
          <div className={classes.botDivRightDiv}>
            <h4 className={classes.h4}>PAYMENTS</h4>
            <div>PAID</div>
            <div>PENDING</div>
            <div>SEND REMINDER</div>
          </div>
          <div className={classes.botDivRightDiv}>
            <h4 className={classes.h4}>MEDICAL</h4>
            <div className={classes.inline}>
              <div>ALLERGIES</div>
              <div>PEANUT</div>
            </div>
            <div className={classes.inline}>
              <div>BLOODGROUP</div>
              <div>A+</div>
            </div>
            <Button className={classes.exportButton}>Export</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
