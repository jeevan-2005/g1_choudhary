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
    to: "mailto:jeevanchoudhary2005@gmail.com",
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
  {
    text: "contactNumber",
    to: "tel:+918897933159",
  }
];

const greeting = {
  name: "Jeevan Choudhary",
  greet: "Hi, I'm G1",
  description:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Express / MongoDB and some other cool libraries and frameworks.",
  resumeLink: "https://drive.google.com/file/d/1qF1TTI7JfCRruOKELSjd41iBQQ4Yyuzz/view?usp=sharing",
  portfolioRepoLink: "https://github.com/jeevan-2005/developerPortfolio",
};

const myWork = {
  title: "What I do?",
  subTitle: "Full Stack Development",
  subText: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Creating application backend in Node, Express & MongoDB",
  ],
  softwareSkills: [
    {
      skillName: "HTML5",
    },
    {
      skillName: "CSS3",
    },
    {
      skillName: "Sass",
    },
    {
      skillName: "JavaScript",
    },
    {
      skillName: "React.js",
    },
    {
      skillName: "Node.js",
    },
    {
      skillName: "npm",
    },
    {
      skillName: "Express.js",
    },
    {
      skillName: "MongoDB",
    },
  ],
};

const education = {
  heading: "Academics",
  institutes: [
    {
      id:1,
      imgSrc: "iiitKLogo",
      imgAlt: "iiitKLogo",
      className: "btech educationContainer",
      name: "Indian Institute Of Information Technology Kota",
      course:"B.Tech in Computer Science and Engineering",
      from: "2022",
      to: "present",
      description: `I'm studying Computer Science and Engineering at IIIT Kota. This esteemed institution provides excellent opportunities to develop my skills and knowledge in modern technologies. The challenging curriculum and supportive environment help me grow both academically and professionally.`,
      website:"https://iiitkota.ac.in/",
    },
    {
      id:2,
      imgSrc: "trividyaaLogo",
      imgAlt: "trividyaaLogo",
      className: "intermediate educationContainer",
      name: "Trividyaa Junior College",
      course:"Intermediate in MPC (Maths, Physics, and Chemistry)",
      from: "2020",
      to: "2022",
      description:
        "I studied MPC (Maths, Physics, and Chemistry) at Trividyaa Junior College while preparing for the JEE exams. This rigorous course helped build a strong foundation in these subjects, preparing me for further studies in engineering.",
      website:"https://trividyaajuniorcollege.com/",
    },
  ],
};

const allMySkills = [
  {
    skillName: "HTML5",
  },
  {
    skillName: "CSS3",
  },
  {
    skillName: "Sass",
  },
  {
    skillName: "JavaScript",
  },
  {
    skillName: "React.js",
  },
  {
    skillName: "Redux",
  },
  {
    skillName: "Node.js",
  },
  {
    skillName: "Express.js",
  },
  {
    skillName: "MongoDB",
  },
  {
    skillName: "ChakraUi"
  },{
    skillName: "MaterialUi"
  },
  {
    skillName: "GitHub",
  },
  {
    skillName: "Git",
  },
  {
    skillName: "Postman",
  },
  {
    skillName: "npm",
  },
  {
    skillName: "Python",
  }
];


export { navLinks, loadAnimation, greeting, socialMediaLinks, myWork, education,allMySkills };
