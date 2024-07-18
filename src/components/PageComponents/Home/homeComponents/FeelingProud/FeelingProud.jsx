import "./feelingProud.scss";
import { useSpring, animated } from "@react-spring/web";
import FeelingProud from "./Feeling_Proud";
import { useContext, useEffect, useState } from "react";
import { DurationContext } from "../../../../../context/DurationContext";

const FeelingProudComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const {duration} = useContext(DurationContext);


  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const styleImage = useSpring({
    transform: loaded ? "translateX(0%)" : "translateX(100%)",
    config: { tension: 170, friction: 60 },
  });

  return (
    <animated.div style={styleImage} className="feelingProud">
      <FeelingProud height="100%" width="100%" color={"rgb(0,7,45)"} />
    </animated.div>
  );
};

export default FeelingProudComponent;
