const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  appBarRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
  profilePhoto: {
    height: 20,
    width: 20,
  },
  toolBar: {
    flexGrow: 1,
    "& a": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      fontWeight: 700,
      color: "inherit",
    },
  },
  subControl: {
    "& *": {
      marginLeft: theme.spacing(1),
      cursor: "pointer",
    },
  },
}));
