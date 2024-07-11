import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./_navbar.scss";
import { greeting, navLinks } from "../../portfolio";
import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useSpring, animated} from "@react-spring/web";

const iconMap = {
  PersonIcon: <PersonIcon className="icon personIcon"/>,
  SchoolIcon: <SchoolIcon className="icon schoolIcon"/>,
  AssignmentIcon: <AssignmentIcon className="icon assignmentIcon"/>,
  BuildIcon: <BuildIcon className="icon buildIcon"/>,
  AlternateEmailIcon: <AlternateEmailIcon className="icon alternateEmailIcon" />
};

const Navbar = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading complete after a delay
    const timer = setTimeout(() => setLoaded(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const styles = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0%)' : 'translateY(-100%)',
    config: { tension: 170, friction: 60 } // Smooth spring settings
  });

  return (
    
      <animated.div style={styles} className="navbar">
        <div className="logo" loading="lazy">
          <span className="grey-color"> &lt;</span>
          <span className="logo-title">{greeting.name}</span>
          <span className="grey-color">/&gt;</span>
        </div>
        <div className="links">
          <ul>
            {navLinks.map((link,i) => (
              <li key={i}> 
                <NavLink to={link.to} >{iconMap[link.icon]}<span>{link.text}</span></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </animated.div>
  );
};

export default Navbar;
