import HtmlSvg from "../../../../../assets/skillsSvg/HtmlSvg";
import CssSvg from "../../../../../assets/skillsSvg/CssSvg";
import SaasSvg from "../../../../../assets/skillsSvg/SassSvg";
import JsSvg from "../../../../../assets/skillsSvg/JsSvg";
import ReactSvg from "../../../../../assets/skillsSvg/ReactSvg";
import NodeSvg from "../../../../../assets/skillsSvg/NodeSvg";
import NpmSvg from "../../../../../assets/skillsSvg/NpmSvg";
import ExpressSvg from "../../../../../assets/skillsSvg/ExpressSvg";
import MongoDbSvg from "../../../../../assets/skillsSvg/MongoDbSvg";
import ChakraSvg from "../../../../../assets/skillsSvg/ChakraSvg";
import GithubSvg from "../../../../../assets/skillsSvg/GithubSvg";
import GitSvg from "../../../../../assets/skillsSvg/GitSvg";
import MaterialUiSvg from "../../../../../assets/skillsSvg/MaterialUiSvg";
import PythonSvg from "../../../../../assets/skillsSvg/PythonSvg";
import PostmanSvg from "../../../../../assets/skillsSvg/PostmanSvg";
import ReduxSvg from "../../../../../assets/skillsSvg/ReduxSvg";
import { allMySkills } from "../../../../../portfolio";
import "./_allSkills.scss";
import Heading from "../../../../heading/Heading1/Heading";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useContext } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const skills = {
  HTML5: <HtmlSvg className="skillIcon" />,
  CSS3: <CssSvg className="skillIcon" />,
  Sass: <SaasSvg className="skillIcon" />,
  JavaScript: <JsSvg className="skillIcon" />,
  "React.js": <ReactSvg className="skillIcon" />,
  Redux: <ReduxSvg className="skillIcon" />,
  "Node.js": <NodeSvg className="skillIcon" />,
  "Express.js": <ExpressSvg className="skillIcon" />,
  MongoDB: <MongoDbSvg className="skillIcon" />,
  ChakraUi: <ChakraSvg className="skillIcon" />,
  MaterialUi: <MaterialUiSvg className="skillIcon" />,
  GitHub: <GithubSvg className="skillIcon" />,
  Git: <GitSvg className="skillIcon" />,
  Postman: <PostmanSvg className="skillIcon" />,
  npm: <NpmSvg className="skillIcon" />,
  Python: <PythonSvg className="skillIcon" />,
};

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme === "dark" ? "rgb(255,255,255)" : "rgb(0,0,0)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    position: "relative",
    top: "-10px",
    backgroundColor: theme === "dark" ? "rgb(255,255,255)" : "rgb(0,0,0)",
    color: theme === "dark" ? "rgb(0,0,0)" : "rgb(255,255,255)",
    // boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: "bold",
  },
}));

const AllSkills = () => {

  const {theme} = useContext(ThemeContext);

  const { ref: refMySkills, inView: inViewMySkills } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const styleMySkills = useSpring({
    opacity: inViewMySkills ? 1 : 0,
    transform: inViewMySkills ? "translateY(0%)" : "translateY(30%)",
    config: { tension: 170, friction: 60 },
  });

  return (
    <div className="mySkillsDiv">
      <Heading text="Tech Stack" />
      <animated.div className="allSkills" style={styleMySkills} ref={refMySkills} >
        {allMySkills.map((skill, i) => (
          <LightTooltip key={i} theme={theme} title={skill.skillName}>
            <div className="mySkill">
              {skills[skill.skillName]}
            </div>
          </LightTooltip>
        ))}
      </animated.div>
    </div>
  );
};

export default AllSkills;
