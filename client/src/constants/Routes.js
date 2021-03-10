// teacher dashboard
import { ReactComponent as ProjectIcon } from "assets/img/project-icon.svg";
import { ReactComponent as ClassesIcon } from "assets/img/classes-icon.svg";
import { ReactComponent as StudentIcon } from "assets/img/students-icon.svg";
import { ReactComponent as InboxIcon } from "assets/img/inbox-icon.svg";
import { ReactComponent as AnalyticIcon } from "assets/img/analytics-icon.svg";
import Projects from "mission6/Projects";
import Student from "mission6/Student";
import Analytics from "mission6/Analytics";

//teacher dashboard component

export const Routes = [
  // teacher dashboard
  {
    id: 1,
    user: "teacher",
    layout: "dashboard",
    icon: <ProjectIcon />,
    label: "projects",
    component: "",
  },
  {
    id: 2,
    user: "teacher",
    layout: "dashboard",
    icon: <ClassesIcon />,
    label: "classes",
    component: <Projects />,
  },
  {
    id: 3,
    user: "teacher",
    layout: "dashboard",
    icon: <StudentIcon />,
    label: "students",
    component: <Student />,
  },

  {
    id: 4,
    user: "teacher",
    layout: "dashboard",
    icon: <InboxIcon />,
    label: "inbox",
    component: "",
  },
  {
    id: 5,
    user: "teacher",
    layout: "dashboard",
    icon: <AnalyticIcon />,
    label: "analytics",
    component: <Analytics />,
  },
];
