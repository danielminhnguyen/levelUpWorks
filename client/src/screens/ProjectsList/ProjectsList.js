import React, { useEffect, useState } from "react";

import { Link, Redirect } from "react-router-dom";

import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { listProjects } from "actions/projectActions";
import Loading from "components/Loading";
import Error from "components/Error";

// TODO: reduce checkbox border

export default function Projects(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { closeModal } = props;

  const projectList = useSelector((state) => state.projectList);
  const { projectsInfo, loading, error } = projectList;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  let role;
  if (userInfo) {
    role = userInfo.Role;
  }
  closeModal();

  const [checkValue, setCheckValue] = useState({
    free: true,
    premium: false,
    animation: true,
    game: false,
    chatbot: false,
    ar: false,
    onefour: true,
    fivesix: true,
    seveneight: false,
    ninethirteen: false,
    computer: true,
    maths: false,
    science: false,
    language: false,
    art: false,
    music: false,
    course: "Beginner",
    showLimit: 25,
  });

  const checkboxMapping = {
    Subscription: [
      { label: "Free", value: "free" },
      { label: "Premium", value: "premium" },
    ],
    "Activity Type": [
      { label: "Animation", value: "animation" },
      { label: "Game", value: "game" },
      { label: "Chatbot", value: "chatbot" },
      { label: "Augmented Reality", value: "ar" },
    ],

    "Year Level": [
      { label: "1-4", value: "onefour" },
      { label: "5-6", value: "fivesix" },
      { label: "7-8", value: "seveneight" },
      { label: "9-13", value: "ninethirteen" },
    ],
    "Subject Matter": [
      { label: "Computer Science", value: "computer" },
      { label: "Maths", value: "maths" },
      { label: "Science", value: "science" },
      { label: "Language", value: "language" },
      { label: "Art", value: "art" },
      { label: "Music", value: "music" },
    ],
  };

  useEffect(() => {
    dispatch(listProjects(checkValue));
  }, [checkValue, dispatch]);

  const handleChecked = (event) => {
    setCheckValue({ ...checkValue, [event.target.name]: event.target.checked });
  };

  const courseClick = (level) => {
    setCheckValue({ ...checkValue, course: level });
  };

  const showLimitClick = (limit) => {
    setCheckValue({ ...checkValue, showLimit: limit });
  };

  if (!userInfo) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Grid container className={classes.content} spacing={5}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Typography align="left" variant="h2">
            PROJECTS
          </Typography>
          <Typography align="left">
            Welcome to the project library. You can use the filters on the right to help you search
            for specific projects.
          </Typography>
        </Grid>
        <Grid className={classes.checkboxWrapper} item xs={2}>
          {Object.keys(checkboxMapping).map((category) => (
            <>
              <Typography align="left" className={classes.categoryTitle} variant="h5">
                {category}
              </Typography>
              {checkboxMapping[category].map((item) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      color="default"
                      classes={{ root: classes.rootCheckbox, checked: classes.checked }}
                      checked={checkValue[item.value]}
                      onChange={handleChecked}
                      name={item.value}
                    />
                  }
                  label={item.label}
                />
              ))}
            </>
          ))}
        </Grid>
        <Grid item xs={10}>
          <div className={classes.projectsContainer}>
            <div className={classes.topController}>
              <ButtonGroup className={classes.buttonWrapper} variant="contained">
                <Button
                  className={checkValue.course === "Beginner" ? classes.buttonActive : ""}
                  onClick={() => courseClick("Beginner")}
                  size="small"
                >
                  Beginner
                </Button>
                <Button
                  className={checkValue.course === "Intermediate" ? classes.buttonActive : ""}
                  onClick={() => courseClick("Intermediate")}
                  size="small"
                >
                  Intermediate
                </Button>
                <Button
                  className={checkValue.course === "Advanced" ? classes.buttonActive : ""}
                  onClick={() => courseClick("Advanced")}
                  size="small"
                >
                  Advanced
                </Button>
              </ButtonGroup>
              <div className={classes.grow}></div>
              <Typography variant="body1">SHOW</Typography>
              <Box boxShadow={0}>
                <ButtonGroup className={classes.buttonWrapper} variant="contained">
                  <Button
                    className={checkValue.showLimit === 25 ? classes.buttonActive : ""}
                    onClick={() => showLimitClick(25)}
                    variant="contained"
                    size="small"
                  >
                    25
                  </Button>
                  <Button
                    className={checkValue.showLimit === 50 ? classes.buttonActive : ""}
                    onClick={() => showLimitClick(50)}
                    variant="contained"
                    size="small"
                  >
                    50
                  </Button>
                  <Button
                    className={checkValue.showLimit === 100 ? classes.buttonActive : ""}
                    onClick={() => showLimitClick(100)}
                    variant="contained"
                    size="small"
                  >
                    100
                  </Button>
                </ButtonGroup>
              </Box>
            </div>
            <Grid
              direction="row"
              justify="center"
              alignItems="flex-start"
              className={classes.projectWrapper}
              container
              spacing={3}
            >
              {loading ? (
                <Loading />
              ) : error ? (
                <Error />
              ) : projectsInfo ? (
                projectsInfo.map((project) => (
                  <Grid item xs={4} classes={{ root: classes.projectItem }}>
                    <Link to={`/projects/${project.ProjectID}`}>
                      <Box className={classes.projectPaperRoot} boxShadow={4}>
                        <img src={project.Image} alt="" />
                      </Box>
                    </Link>

                    <Typography variant="h3">{project.Name}</Typography>
                    <Typography>
                      <span>{project.Course}</span> | {project.ActivityType}
                    </Typography>
                  </Grid>
                ))
              ) : null}
            </Grid>
            {role === "teacher" ? (
              <div className="row-end">
                <Button variant="contained">Back To Top</Button>
                <Button variant="contained" color="secondary">
                  <Link to="/dashboard">Back To Dashboard</Link>
                </Button>
              </div>
            ) : (
              <div>
                <Button variant="contained">Back To Top</Button>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
