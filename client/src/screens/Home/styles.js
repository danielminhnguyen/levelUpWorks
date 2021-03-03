const { makeStyles } = require("@material-ui/core");

export default makeStyles((theme) => ({
  content: {
    paddingLeft: theme.spacing(40),
    paddingRight: theme.spacing(40),
  },
  headerImage: {
    objectFit: "cover",
    position: "absolute",
    right: 0,
    zIndex: -1,
    height: 400,
    width: "100%",
  },
  section1: {
    paddingTop: theme.spacing(3),
    height: 400,
    "& h1": {
      marginBototm: theme.spacing(3),
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(10),
    "& button": {
      marginLeft: theme.spacing(3),
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    "& span": {
      color: theme.palette.primary.main,
    },
  },
  section2: {
    paddingTop: theme.spacing(5),
    height: 500,
  },
  offerText: {
    marginRight: theme.spacing(25),
    marginBottom: theme.spacing(5),
  },
  teachKid: {
    "& span": {
      fontWeight: 400,
    },
  },
}));
