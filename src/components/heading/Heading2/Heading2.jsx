import { useContext, useEffect, useState } from "react";
import "./heading2.scss";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../../context/ThemeContext";

const Heading2 = ({ text }) => {
  const { ref: refHeading, inView: inViewHeading } = useInView({
    triggerOnce: false,
    threshold: 0.7,
  });

  const styleHeading = useSpring({
    opacity: inViewHeading ? 1 : 0,
    transform: inViewHeading ? "translateX(0%)" : "translateX(10%)",
    config: { tension: 200, friction: 30 },
  });

  const { theme } = useContext(ThemeContext);

  return (
    <animated.div ref={refHeading} className="heading" style={styleHeading}>
      <h1 className="about">{text}</h1>
      <div
        className="underline"
        style={{
          borderColor: theme === "dark" ? "rgb(0, 255, 255)" : "rgb(0,28,85)",
        }}
      ></div>
    </animated.div>
  );
};

export default Heading2;
