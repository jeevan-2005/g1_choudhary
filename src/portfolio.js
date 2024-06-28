import loadingAnimation from "./assets/lottie/loadingAnimation.json";

// loading screen animation
const loadAnimation = {
  enabled: true,
  animation: loadingAnimation,
  duration: 4000,
};

const navLinks = [
  {
    to: "/",
    text: "Intro",
    icon: "PersonIcon",
  },
  {
    to: "/education",
    text: "Education",
    icon: "SchoolIcon",
  },
  {
    to: "/projects",
    text: "Projects",
    icon: "AssignmentIcon",
  },
  {
    to: "/skills",
    text: "Skills",
    icon: "BuildIcon",
  },
  {
    to: "/contact",
    text: "Let's Connect",
    icon: "AlternateEmailIcon",
  },
];

const socialMediaLinks = [
  {
    text: "github",
    to: "https://github.com/jeevan-2005",
  },
  {
    text: "linkedin",
    to: "https://www.linkedin.com/in/jeevan27/",
  },
  {
    text: "gmail",
    to: "jeevanchoudhary2005@gmail.com",
  },
  {
    text: "telegram",
    to: "https://t.me/jeevan_ch",
  },
  {
    text: "twitter",
    to: "https://x.com/Jeevan_Ch27",
  },
  {
    text: "stackoverflow",
    to: "https://stackoverflow.com/users/25662708/jeevan-choudhary",
  },
];

const greeting = {
  name: "Jeevan Choudhary",
  greet: "Hi all, I'm G1",
  description:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Express / MongoDB and some other cool libraries and frameworks.",
  resumeLink: "",
};

export { navLinks, loadAnimation, greeting, socialMediaLinks };
