import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./_navbar.scss";
import { greeting, navLinks } from "../../portfolio";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const iconMap = {
  PersonIcon: <PersonIcon className="icon personIcon"/>,
  SchoolIcon: <SchoolIcon className="icon schoolIcon"/>,
  AssignmentIcon: <AssignmentIcon className="icon assignmentIcon"/>,
  BuildIcon: <BuildIcon className="icon buildIcon"/>,
  AlternateEmailIcon: <AlternateEmailIcon className="icon alternateEmailIcon" />
};

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Fade duration={1000} cascade damping={1}>
      <nav className="navbar">
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
      </nav>
    </Fade>
  );
};

export default Navbar;
