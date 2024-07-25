import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { socialMediaLinks } from "../../../../../portfolio";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "./_connectLinks.scss";

const socialLinks = {
  github: <GitHubIcon className="icon" color="disabled" />,
  linkedin: <LinkedInIcon className="icon" color="disabled" />,
  twitter: <XIcon className="icon" color="disabled" />,
  telegram: <TelegramIcon className="icon" color="disabled" />,
};

// contactNumber: <CallIcon className="icon" color="disabled" />,
// gmail: <EmailIcon className="icon" color="disabled" />,

const ConnectLinks = () => {
  return (
    <div className="socialLinks">
      <div className="contactText" >
        <div className="mail">
          <EmailIcon className="icon" color="disabled" />
          <span>jeevanchoudhary@gmail.com</span>
        </div>
        <div className="call">
          <CallIcon className="icon" color="disabled" />
          <span>+91 8897933159</span>
        </div>
      </div>
      <ul>
        {socialMediaLinks.map((link, i) =>
          socialLinks[link.text] ? (
            <li key={i}>
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                {socialLinks[link.text]}
              </a>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default ConnectLinks;
