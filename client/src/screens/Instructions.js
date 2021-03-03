import { projectbuilder } from "actions/projectActions";
import Error from "components/Error";
import Loading from "components/Loading";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Instructions() {
  const { projectid } = useParams();
  const dispatch = useDispatch();
  const projectBuilder = useSelector((state) => state.projectBuilder);
  const { projectsInfo, loading, error } = projectBuilder;
  useEffect(() => {
    if (projectid) {
      dispatch(projectbuilder(projectid));
    }
  }, [dispatch, projectid]);

  console.log(projectsInfo);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : projectsInfo ? (
        <td dangerouslySetInnerHTML={{ __html: projectsInfo[0].Instructions }} />
      ) : null}
    </div>
  );
}
