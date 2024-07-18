import "./heatmap.scss";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import Heat_map from "./Heat_map";

const HeatMap = () => {
  const { ref: refImage, inView: inViewImage } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const styleImage = useSpring({
    transform: inViewImage ? "translateX(0%)" : "translateX(-70%)",
    config: { tension: 170, friction: 60 },
  });

  return (
    <animated.div ref={refImage} style={styleImage} className="heatMap">
      <Heat_map height="100%" width="100%" color={"rgb(0,7,45)"} />
    </animated.div>
  );
};

export default HeatMap;
