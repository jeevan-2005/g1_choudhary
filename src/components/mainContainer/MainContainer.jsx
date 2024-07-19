import "./_mainContainer.scss";
import AppRoutes from "../../routes/AppRoutes";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const MainContainer = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading complete after a delay
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const styles = useSpring({ 
    opacity: loaded ? 1: 0, 
    config: { tension: 170, friction: 60 }, // Smooth spring settings
  });

  return (
    <animated.div style={styles} className="main-content">
      <div className="pageContent">
        <AppRoutes />
      </div>
    </animated.div>
  );
};

export default MainContainer;
