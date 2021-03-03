const { makeStyles } = require("@material-ui/core");

const sideBarWidth = "auto";

export default makeStyles((theme) => ({
  fakeToolBar: {
    ...theme.mixins.toolbar,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  fakeSideBarOpen: {
    width: 350,
    height: 300,
  },
  fakeSideBarClose: {
    width: 100,
    height: 500,
  },
  navigation: {
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    flexGrow: 1,
  },
  profileImage: {
    height: 100,
    width: 100,
  },
  drawer: {
    width: sideBarWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    backgroundColor: theme.palette.primary.main,
    width: sideBarWidth,
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.primary.main,
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(14) + 1,
    },
  },
  sideButtonOpen: {
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shortest,
    }),
    "&:hover ,&:focus": {
      textDecoration: "none",
      backgroundColor: theme.palette.background.main,
      color: theme.palette.text.primary,
      "& svg": {
        filter: "invert(60%)",
      },
    },
  },
  sideButtonClose: {
    height: 120,
    "&:hover ,&:focus": {
      textDecoration: "none",
      backgroundColor: theme.palette.background.main,
      color: theme.palette.text.primary,
      "& svg": {
        filter: "invert(60%)",
      },
    },
  },
  iconOpen: {
    minWidth: 35,
  },
  iconClose: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& svg": { width: 70, height: 70 },
  },
  label: {
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "left",
  },
  bottomMenuOpen: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    "& div": {
      cursor: "pointer",
    },
    "& p": {
      display: "block",
    },
  },
  bottomMenuClose: {
    display: "flex",
    flexDirection: "column",
    "& div": {
      cursor: "pointer",
    },
    "& svg": {
      marginTop: theme.spacing(2),
    },
    "& p": {
      display: "none",
    },
  },
  bottomLabel: {
    color: "#ffffff",
  },
  caretContainerOpen: {
    display: "flex",
    justifyContent: "flex-end",
  },
  caretContainerClose: {
    display: "flex",
    justifyContent: "flex-start",
  },
  rightCaret: {
    padding: 20,
    backgroundColor: theme.palette.background.main,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: 80,
  },
  leftCaret: {
    padding: 20,
    backgroundColor: theme.palette.background.main,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: 80,
  },
  rightTriangle: {
    width: 0,
    height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    borderRight: "20px solid #f91c84",
  },
  leftTriangle: {
    width: 0,
    height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    borderLeft: "20px solid #f91c84",
  },
  hide: {
    display: "none",
  },
  grow: {
    flexGrow: 1,
  },
}));
