const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  image: {
    objectFit: "cover",
    width: "100%",
    // minWidth: "10px",
  },
  dialogContainer: {
    overflow: "hidden",

    padding: theme.spacing(10),
  },
  inputContainer: {
    "& *": {
      marginBottom: theme.spacing(4),
    },
  },
  input: {
    marginBottom: theme.spacing(1),
  },
  tabs: {
    "& .tab-list": {
      display: "flex",
      justifyContent: "space-evenly",
      "& .tab-list-active:first-child": {
        borderBottom: "solid 2px #43c0f6",
      },
      "& .tab-list-item": {
        display: "inline-block",
        listStyle: "none",
      },
    },
    "& .tab-content": {
      minHeight: "400px",
    },
  },
}));
