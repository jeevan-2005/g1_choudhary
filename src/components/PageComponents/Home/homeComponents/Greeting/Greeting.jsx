import "./_greeting.scss";
import { greeting } from "../../../../../portfolio";
import { useContext, useEffect, useState } from "react";
import MyButton from "../../../../Button/Button";
import { useSpring, animated } from "@react-spring/web";
import { DurationContext } from "../../../../../context/DurationContext";

const Greeting = () => {
  const [loaded, setLoaded] = useState(false);
  const {duration} = useContext(DurationContext);


  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const styleText = useSpring({
    transform: loaded ? "translateX(0%)" : "translateX(-100%)",
    config: { tension: 170, friction: 60 },
  });

  return (
    <animated.div style={styleText} className="greetingsTextDiv">
      <h1>
        {greeting.greet}
        <span className="wave-emoji">👋</span>
      </h1>
      <p>{greeting.description}</p>
      <div className="buttons">
        <MyButton
          text={"⭐ Star me on github"}
          newTab={true}
          href={greeting.portfolioRepoLink}
        />
        <MyButton text={"resume"} newTab={true} href={greeting.resumeLink} />
      </div>
    </animated.div>
  );
};

export default Greeting;
