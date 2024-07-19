import { Badge, ChakraProvider } from "@chakra-ui/react";
import { greeting, socialMediaLinks } from "../../portfolio";
import "./_sidebar.scss";
import { useContext, useEffect, useState } from "react";
import ToggleButton from "../toggle/ToggleButton";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useSpring, animated } from "@react-spring/web";

const lightModeTexts = [
  "Feeling adventurous? Try Dark mode!",
  "Dark mode is easier on the eyes, give it a try!",
  "Feeling sneaky? Switch to Dark mode!",
  "Dark mode: Because your eyes deserve a break.",
  "Join the dark side, we have pixels!",
  "Dark mode: For the night owls and secret agents.",
  "Ready to go undercover? Try Dark mode!",
  "Dark mode: The force is strong with this one.",
];

const darkModeTexts = [
  "Prefer a brighter view? Switch to Light mode!",
  "Feeling bright today? Try Light mode!",
  "Light mode can be refreshing, give it a go!",
  "Switch to Light mode for a different vibe!",
  "Feeling bright and breezy? Try Light mode!",
  "Light mode: Because sometimes, less isn't more.",
  "Switch to Light mode and see the world in HD.",
  "Light mode: For those who love a spotlight!",
];

const socialLinks = {
  github: <GitHubIcon className="icon" color="disabled" />,
  linkedin: <LinkedInIcon className="icon" color="disabled" />,
  twitter: <XIcon className="icon" color="disabled" />,
  telegram: <TelegramIcon className="icon" color="disabled" />,
};

const Sidebar = () => {
  const [sidebarFull, isSidebarFull] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading complete after a delay
    const timer = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const styles = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateX(0%)' : 'translateX(-50%)',
    config: { tension: 170, friction: 60 } // Smooth spring settings
  });

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const randomTexts = (theme) => {
    const arr = theme === "dark" ? darkModeTexts : lightModeTexts;
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const toggleFunction = () => {
    isSidebarFull(!sidebarFull);
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ChakraProvider>
        <div className="gradient-border">
          <animated.div style={styles} className="sidebar">
            <div className="div1">
              <div className="logo" loading="lazy">
                <span className="grey-color"> &lt;</span>
                <span className="logo-title">{greeting.name}</span>
                <span className="grey-color">/&gt;</span>
              </div>
              <button
                onClick={() => toggleFunction()}
                className="info_more-btn"
              >
                <span>{sidebarFull ? "Show Less 👆" : "Show More 👇"}</span>
              </button>
            </div>
            <div className={`div2 ${sidebarFull ? "visible" : "hidden"}`}>
              <div className="myself">
                <img
                  loading="lazy"
                  src="src\assets\Images\devImg.jpeg"
                  alt="Jeevan_Choudhary"
                />
                <div className="names">
                  <h1>{greeting.name}</h1>
                  <Badge variant="outline" className="badge" colorScheme="cyan">
                    Full Stack Developer
                  </Badge>
                </div>
              </div>
              <Divider className="divider">mode</Divider>
              <div className="colorMode">
                <p>{randomTexts(theme)}</p>
                <div className="toggle">
                  <ToggleButton
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    theme={theme}
                  />
                  <p>{theme}</p>
                </div>
              </div>
              <Divider className="divider">connect</Divider>
              <div className="connect">
                <div className="platforms">
                  <ul>
                    {socialMediaLinks.map((link, i) =>
                      socialLinks[link.text] ? (
                        <li key={i}>
                          <a
                            href={link.to}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {socialLinks[link.text]}
                          </a>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
                <div className="copyright">Made with ❤️ by G-one Choudhary</div>
              </div>
            </div>
          </animated.div>
        </div>
      </ChakraProvider>
    </MuiThemeProvider>
  );
};

export default Sidebar;
