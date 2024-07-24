import { useContext } from "react";
import "./_contact.scss";
import ConnectSvg from "./contactComponents/ConnectSvg/ConnectSvg";
import Form from "./contactComponents/Form/Form";
import { ThemeContext } from "../../../context/ThemeContext";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "./contactComponents/CustomTheme/CustomeTheme";
import Heading from "../../heading/Heading1/Heading";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const outerTheme = createTheme({
    palette: {
      mode: theme, // 'light' or 'dark'
    },
  });

  const { ref: refForm, inView: inViewForm } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const styleForm = useSpring({
    opacity: inViewForm ? 1 : 0,
    transform: inViewForm ? "translateX(0%)" : "translateX(70%)",
    config: { tension: 170, friction: 60 },
  });

  const { ref: refConnectSvg, inView: inViewConnectSvg } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const styleConnectSvg = useSpring({
    opacity: inViewConnectSvg ? 1 : 0,
    transform: inViewConnectSvg ? "translateX(0%)" : "translateX(-70%)",
    config: { tension: 170, friction: 60 },
  });

  const appliedTheme = customTheme(outerTheme);

  return (
    <>
      <Heading text={"Connect"} />
      <div className="contact">
        <animated.div
          className="connectSvg"
          ref={refConnectSvg}
          style={styleConnectSvg}
        >
          <ConnectSvg theme={theme} />
        </animated.div>
        <animated.div className="contactMedium" ref={refForm} style={styleForm}>
          <ThemeProvider theme={appliedTheme}>
            <CssBaseline />
            <Form />
          </ThemeProvider>
        </animated.div>
      </div>
    </>
  );
};

export default Contact;
