import Heading2 from "../../../../heading/Heading2/Heading2";
import { myWork } from "../../../../../portfolio";
import HeatMap from "../HeatMap/HeatMap";
import "./whatIDo.scss";
import HtmlSvg from "../../../../../assets/skillsSvg/HtmlSvg";
import CssSvg from "../../../../../assets/skillsSvg/CssSvg";
import SaasSvg from "../../../../../assets/skillsSvg/SassSvg";
import JsSvg from "../../../../../assets/skillsSvg/JsSvg";
import ReactSvg from "../../../../../assets/skillsSvg/ReactSvg";
import NodeSvg from "../../../../../assets/skillsSvg/NodeSvg";
import MongoDbSvg from "../../../../../assets/skillsSvg/MongoDbSvg";
import NpmSvg from "../../../../../assets/skillsSvg/NpmSvg";
import ExpressSvg from "../../../../../assets/skillsSvg/ExpressSvg";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useContext } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

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

const skills = {
  HTML5: <HtmlSvg className="skillIcon" />,
  CSS3: <CssSvg className="skillIcon" />,
  Sass: <SaasSvg className="skillIcon" />,
  JavaScript: <JsSvg className="skillIcon" />,
  "React.js": <ReactSvg className="skillIcon" />,
  "Node.js": <NodeSvg className="skillIcon" />,
  npm: <NpmSvg className="skillIcon" />,
  "Express.js": <ExpressSvg className="skillIcon" />,
  MongoDB: <MongoDbSvg className="skillIcon" />,
};

const WhatIDo = () => {
  const { theme } = useContext(ThemeContext);

  const { ref: refContent, inView: inViewContent } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const styleContent = useSpring({
    transform: inViewContent ? "translateX(0%)" : "translateX(70%)",
    config: { tension: 170, friction: 60 },
  });

  return (
    <div>
      <Heading2 text={myWork.title} />
      <div className="content">
        <HeatMap height="100%" width="100%" />
        <animated.div className="whatIDo" ref={refContent} style={styleContent}  >
          <div className="heading">
            <h1>{myWork.subTitle}</h1>
            <p>{myWork.subText}</p>
          </div>
          <div className="skills">
            {myWork.softwareSkills.map((skill, i) => (
              <LightTooltip key={i} theme={theme} title={skill.skillName}>
                <span>{skills[skill.skillName]}</span>
              </LightTooltip>
            ))}
          </div>
          <div className="subPoints">
            {myWork.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default WhatIDo;
