// teacher dashboard
import { ReactComponent as ProgressTrackerIcon } from "assets/images/progresstracker.svg";
import { ReactComponent as StudentProfileIcon } from "assets/images/studentprofiles.svg";
import { ReactComponent as HelpRequestsIcon } from "assets/images/helprequests.svg";
import { ReactComponent as ProjectSubmisisonsIcon } from "assets/images/projectsubmissions.svg";
import { ReactComponent as ProgressLibraryIcon } from "assets/images/projectlibarry.svg";

//teacher dashboard component
import StudentProfile from "screens/StudentProfile";
import HelpRequest from "screens/HelpRequest";
import ProjectSubmission from "screens/ProjectSubmissions";

//
import { ReactComponent as LearningObjectivesIcon } from "assets/images/learningobjectives.svg";
import { ReactComponent as InstructionsIcon } from "assets/images/instructions.svg";
import { ReactComponent as VideoTutorialIcon } from "assets/images/videotutorial.svg";
import { ReactComponent as PreviewProjectIcon } from "assets/images/previewproject.svg";
import { ReactComponent as CheckSubmissionIcon } from "assets/images/checksubmissions.svg";
import { ReactComponent as OfflineActivitiesIcon } from "assets/images/offlineactivities.svg";
import { ReactComponent as QuizResultsIcon } from "assets/images/quizresults.svg";
import LearningObjectives from "screens/LearningObjectives";
import Instructions from "screens/Instructions";
import VideoTutorial from "screens/VideoTutorial";
import PreviewProject from "screens/PreviewProject";
import OfflineActivities from "screens/OfflineActivities";
import CheckSubmission from "screens/CheckSubmission";
import QuizResults from "screens/QuizResults";
import { Redirect } from "react-router-dom";
import ProgressTracker from "screens/ProgressTracker";
import SubmitProject from "screens/SubmitProject";

export const Routes = [
  // teacher dashboard
  {
    id: 1,
    user: "teacher",
    layout: "dashboard",
    icon: <ProgressTrackerIcon />,
    label: "progress tracker",
    component: <ProgressTracker />,
  },
  {
    id: 2,
    user: "teacher",
    layout: "dashboard",
    icon: <StudentProfileIcon />,
    label: "student profile",
    component: <StudentProfile />,
  },
  {
    id: 3,
    user: "teacher",
    layout: "dashboard",
    icon: <HelpRequestsIcon />,
    label: "help requests",
    component: <HelpRequest />,
  },

  {
    id: 4,
    user: "teacher",
    layout: "dashboard",
    icon: <ProjectSubmisisonsIcon />,
    label: "project submissions",
    component: <ProjectSubmission />,
  },
  {
    id: 5,
    user: "teacher",
    layout: "dashboard",
    icon: <ProgressLibraryIcon />,
    label: "project library",
    component: <Redirect to="/projects" />,
  },
  // teacher project builder
  {
    id: 6,
    user: "teacher",
    layout: "projects",
    icon: <LearningObjectivesIcon />,
    label: "learning objectives",
    component: <LearningObjectives />,
  },
  {
    id: 7,
    user: "teacher",
    layout: "projects",
    icon: <InstructionsIcon />,
    label: "instructions",
    component: <Instructions />,
  },
  {
    id: 8,
    user: "teacher",
    layout: "projects",
    icon: <VideoTutorialIcon />,
    label: "video tutorial",
    component: <VideoTutorial />,
  },
  {
    id: 9,
    user: "teacher",
    layout: "projects",
    icon: <PreviewProjectIcon />,
    label: "preview project",
    component: <PreviewProject />,
  },
  {
    id: 10,
    user: "teacher",
    layout: "projects",
    icon: <CheckSubmissionIcon />,
    label: "Check Submissions",
    component: <ProjectSubmission />,
  },
  {
    id: 11,
    user: "teacher",
    layout: "projects",
    icon: <OfflineActivitiesIcon />,
    label: "offline activities",
    component: <OfflineActivities />,
  },
  {
    id: 12,
    user: "teacher",
    layout: "projects",
    icon: <QuizResultsIcon />,
    label: "view quiz results",
    component: <QuizResults />,
  },
  // student project builder
  {
    id: 13,
    user: "student",
    layout: "projects",
    icon: <LearningObjectivesIcon />,
    label: "learning objectives",
    component: <LearningObjectives />,
  },
  {
    id: 14,
    user: "student",
    layout: "projects",
    icon: <InstructionsIcon />,
    label: "instructions",
    component: <Instructions />,
  },
  {
    id: 15,
    user: "student",
    layout: "projects",
    icon: <VideoTutorialIcon />,
    label: "video tutorial",
    component: <VideoTutorial />,
  },
  {
    id: 16,
    user: "student",
    layout: "projects",
    icon: <PreviewProjectIcon />,
    label: "Make project",
    component: <PreviewProject />,
  },
  {
    id: 17,
    user: "student",
    layout: "projects",
    icon: <CheckSubmissionIcon />,
    label: "Submit Project",
    component: <SubmitProject />,
  },
  {
    id: 18,
    user: "student",
    layout: "projects",
    icon: <OfflineActivitiesIcon />,
    label: "Bonus Challenge",
    component: <OfflineActivities />,
  },
  {
    id: 19,
    user: "student",
    layout: "projects",
    icon: <QuizResultsIcon />,
    label: "Take The Quiz",
    component: <QuizResults />,
  },
];
