import Slide1 from "./img/home-sectionone-slideone.png";
import Slide2 from "./img/home-sectionone-slidetwo.png";
import Slide3 from "./img/home-sectionone-slidethree.png";
import Slide4 from "./img/home-sectionone-slidefour.png";

import Creation1 from "./img/home-sectionone-icon-one.png";
import Creation2 from "./img/home-sectionone-icon-two.png";
import Creation3 from "./img/home-sectionone-icon-three.png";
import Creation4 from "./img/home-sectionone-icon-four.png";

import Digital1 from "./img/home-sectiontwo-icon-one-bg.png";
import Digital2 from "./img/home-sectiontwo-icon-two-bg.png";
import Digital3 from "./img/home-sectiontwo-icon-three-bg.png";
import Digital4 from "./img/home-sectiontwo-icon-four-bg.png";
import DigitalOverlay1 from "./img/home-sectiontwo-icon-one-overlay.png";
import DigitalOverlay2 from "./img/home-sectiontwo-icon-two-overlay.png";
import DigitalOverlay3 from "./img/home-sectiontwo-icon-three-overlay.png";
import DigitalOverlay4 from "./img/home-sectiontwo-icon-four-overlay.png";

import TeacherNav1 from "./img/teacher-nav-progress.png";
import TeacherNav2 from "./img/teacher-nav-studentprofile.png";
import TeacherNav3 from "./img/teacher-nav-help.png";
import TeacherNav4 from "./img/teacher-nav-submission.png";
import TeacherNav5 from "./img/teacher-nav-library.png";

import TeacherSetting1 from "./img/userIcon.png";
import TeacherSetting2 from "./img/settingIcon.png";
import TeacherSetting3 from "./img/logoutIcon.png";

import Project1 from "./img/student-project-1.png";
import Project2 from "./img/student-project-2.png";
import Project3 from "./img/student-project-3.png";
import Project4 from "./img/student-project-4.png";
import Project5 from "./img/student-project-5.png";
import Project6 from "./img/student-project-6.png";
import Project7 from "./img/student-project-7.png";

import Submission1 from "./img/aiden-profile.png";
import Submission2 from "./img/rawiri_profile.png";
import Submission3 from "./img/neveah-profile.png";
import StudentProject1 from "./img/aiden-project.png";

import bcrypt from 'bcryptjs';

export const SubmissionData = [
  users: [
    {
      name: 'dan',
      email: 'test@test.com',
      password: bcrypt.hashSync('1234',8)
    }
  ],
  {
    id: 1,
    name: "Aiden",
    gender: "M",
    timestamp: 1588027380000,
    profileURL: Submission1,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 2,
    name: "RAWIRI",
    gender: "M",
    timestamp: 1588026420000,
    profileURL: Submission2,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 3,
    name: "NEVEAH",
    gender: "F",
    timestamp: 1588024680000,
    profileURL: Submission3,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 4,
    name: "Aiden",
    gender: "M",
    timestamp: 1588027380000,
    profileURL: Submission1,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 5,
    name: "RAWIRI",
    gender: "M",
    timestamp: 1588026420000,
    profileURL: Submission2,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 6,
    name: "NEVEAH",
    gender: "F",
    timestamp: 1588024680000,
    profileURL: Submission3,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 7,
    name: "Aiden",
    gender: "M",
    timestamp: 1588027380000,
    profileURL: Submission1,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 8,
    name: "RAWIRI",
    gender: "M",
    timestamp: 1588026420000,
    profileURL: Submission2,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
  {
    id: 9,
    name: "NEVEAH",
    gender: "F",
    timestamp: 1588024680000,
    profileURL: Submission3,
    projectURL: StudentProject1,
    status: "submited",
    select: false,
    helpRequest: true,
  },
];

export const slideshow = [
  {
    id: 1,
    imagePath: Slide1,
  },
  {
    id: 2,
    imagePath: Slide2,
  },
  {
    id: 3,
    imagePath: Slide3,
  },
  {
    id: 4,
    imagePath: Slide4,
  },
];

export const digitalSkills = [
  {
    id: 1,
    background: Digital1,
    overlay: DigitalOverlay1,
    title: "Creativity & Individuality",
  },
  {
    id: 2,
    background: Digital2,
    overlay: DigitalOverlay2,
    title: "Critical Thinking & Problem Solving",
  },
  {
    id: 3,
    background: Digital3,
    overlay: DigitalOverlay3,
    title: "Communication & Collaboration",
  },
  {
    id: 4,
    background: Digital4,
    overlay: DigitalOverlay4,
    title: "Technology & Future Focus",
  },
];

export const studentCreation = [
  {
    id: 1,
    background: "",
    overlay: Creation1,
    title: "Animation",
  },
  {
    id: 2,
    background: "",
    overlay: Creation2,
    title: "Games",
  },
  {
    id: 3,
    background: "",
    overlay: Creation3,
    title: "Chatbots",
  },
  {
    id: 4,
    background: "",
    overlay: Creation4,
    title: "Augmented Reality",
  },
];

// Navigation Data

export const NavTeacherDashboard = [
  {
    id: 1,
    imgURL: TeacherNav1,
    title: "progress tracker",
    linkto: "",
  },
  {
    id: 2,
    imgURL: TeacherNav2,
    title: "student profile",
    linkto: "/teachers/studentprofile",
  },
  {
    id: 3,
    imgURL: TeacherNav3,
    title: "help requests",
    linkto: "/teachers/requests",
  },
  {
    id: 4,
    imgURL: TeacherNav4,
    title: "project submissions",
    linkto: "/teachers/submission",
  },
  {
    id: 5,
    imgURL: TeacherNav5,
    title: "project library",
    linkto: "/teachers/projects",
  },
];

export const NavTeacherSetting = [
  {
    id: 1,
    imgURL: TeacherSetting1,
    title: "Profile",
    linkto: "/teachers/profile",
  },
  {
    id: 2,
    imgURL: TeacherSetting2,
    title: "Settings",
    linkto: "/teachers/settings",
  },
  {
    id: 3,
    imgURL: TeacherSetting3,
    title: "Logout",
    linkto: "",
  },
];

export const NavStudentSetting = [
  {
    id: 1,
    imgURL: TeacherSetting1,
    title: "Profile",
    linkto: "/students/profile",
  },
  {
    id: 2,
    imgURL: TeacherSetting2,
    title: "Settings",
    linkto: "/students/settings",
  },
  {
    id: 3,
    imgURL: TeacherSetting3,
    title: "Logout",
    linkto: "",
  },
];

export const ProjectBuilderStudent = [
  {
    id: 1,
    imgURL: Project1,
    title: "learning objective",
    linkto: "/students/objective",
  },
  {
    id: 2,
    imgURL: Project2,
    title: "instruction",
    linkto: "/students/instruction",
  },
  {
    id: 3,
    imgURL: Project3,
    title: "video tutorial",
    linkto: "/students/tutorial",
  },
  {
    id: 4,
    imgURL: Project4,
    title: "make project",
    linkto: "/students/makeproject",
  },
  {
    id: 5,
    imgURL: Project5,
    title: "submit project",
    linkto: "/students/submitproject",
  },
  {
    id: 6,
    imgURL: Project6,
    title: "bonus challenge",
    linkto: "/students/challenge",
  },
  {
    id: 7,
    imgURL: Project7,
    title: "take the quiz",
    linkto: "/students/quiz",
  },
];

export const ProjectBuilderTeacher = [
  {
    id: 1,
    imgURL: Project1,
    title: "learning objective",
    linkto: "/teachers/project/objective",
  },
  {
    id: 2,
    imgURL: Project2,
    title: "instruction",
    linkto: "/teachers/project/instruction",
  },
  {
    id: 3,
    imgURL: Project3,
    title: "video tutorial",
    linkto: "/teachers/project/tutorial",
  },
  {
    id: 4,
    imgURL: Project4,
    title: "preview project",
    linkto: "/teachers/project/preview",
  },
  {
    id: 5,
    imgURL: Project5,
    title: "check submission",
    linkto: "/teachers/project/checksubmit",
  },
  {
    id: 6,
    imgURL: Project6,
    title: "offline activities",
    linkto: "/teachers/project/activities",
  },
  {
    id: 7,
    imgURL: Project7,
    title: "take the quiz",
    linkto: "/teachers/project/quizresults",
  },
];
