import { useContext, useEffect, useState } from "react";
import "./heading2.scss";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../../context/ThemeContext";

const Heading2 = ({ text }) => {
  // const { ref: refHeading, inView: inViewHeading } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2,
  // });

  // const styleHeading = useSpring({
  //   opacity: inViewHeading ? 1 : 0,
  //   transform: inViewHeading ? "translateX(0%)" : "translateX(10%)",
  //   config: { tension: 170, friction: 60 },
  // });

  // const { theme } = useContext(ThemeContext);

  return (
    <div className="heading">
      <h1 className="about">{text}</h1>
      <div className="underline"></div>
    </div>
  );
};

export default Heading2;
