import { makeStyles } from "@material-ui/core";
import { projectbuilder } from "actions/projectActions";
import Error from "components/Error";
import Loading from "components/Loading";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
  },
  video: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" },
}));
export default function VideoTutorial() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { projectid } = useParams();
  const projectBuilder = useSelector((state) => state.projectBuilder);
  const { projectsInfo, loading, error } = projectBuilder;
  useEffect(() => {
    if (projectid) {
      dispatch(projectbuilder(projectid));
    }
  }, [dispatch, projectid]);

  console.log(projectsInfo);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className={classes.videoContainer}>
          <iframe
            className={classes.video}
            title="vimeo-player"
            src="https://player.vimeo.com/video/80961102"
            width="100%"
            height="auto"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </>
  );
}
