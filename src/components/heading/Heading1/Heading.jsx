import { useContext, useEffect, useState } from "react";
import "./heading.scss";
import { useSpring, animated } from "@react-spring/web";
import { ThemeContext } from "../../../context/ThemeContext";
import { DurationContext } from "../../../context/DurationContext";

const Heading = ({ text }) => {
  const [load, setLoad] = useState(false);
  const {duration} = useContext(DurationContext);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const styleHeading = useSpring({
    opacity: load ? 1 : 0,
    transform: load ? "translateY(0%)" : "translateY(-100%)",
    config: { tension: 200, friction: 30 },
  });

  const { theme } = useContext(ThemeContext);

  return (
    <animated.div className="heading" style={styleHeading}>
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

export default Heading;
