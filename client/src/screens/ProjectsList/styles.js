const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  content: {
    padding: theme.spacing(5),
  },
  categoryTitle: {
    textTransform: "uppercase",
    borderBottom: "1.2px solid #767676",
    paddingBottom: "2px",
  },
  checkboxWrapper: {
    maxWidth: "220px",
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
  },
  rootCheckbox: {
    margin: `${theme.spacing.unit * 0.5}px ${theme.spacing.unit * 1}px`,
  },
  checked: {
    color: "#3B99FC",
  },
  buttonWrapper: {
    "& button": {
      color: "black",
      backgroundColor: "#F7F0F0",
      fontSize: "0.7rem",
      boxShadow: "none",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  buttonActive: {
    backgroundColor: "#65AFFA !important",
    color: "#FFFFFF !important",
  },
  grow: {
    flexGrow: 1,
  },
  projectItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  projectPaperRoot: {
    borderRadius: "20px",
    maxHeight: "221px !important",
    maxWidth: "314px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      objectFit: "cover",
      borderRadius: "20px",
      overflow: "hidden",
      maxHeight: 221,
    },
    marginBottom: theme.spacing(2),
  },
  topController: {
    display: "flex",
    width: "100%",
    marginLeft: theme.spacing(50),
    marginRight: theme.spacing(50),
    marginBottom: theme.spacing(5),
    "& title": {
      marginRight: theme.spacing(5),
    },
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  projectWrapper: {
    justifyContent: "flex-start",
  },
}));
