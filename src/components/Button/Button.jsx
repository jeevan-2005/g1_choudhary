import { useContext } from "react";
import "./button.scss";
import { Button } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContext";

const MyButton = ({ text, href}) => {
  const { theme } = useContext(ThemeContext);

  const handleOnClick = (href)=>{
    if(!href){
      console.log(`Url not found...`);
      return;
    }
    console.log(href);
    window.open(href, "_blank", 'noopener,noreferrer');
  }

  return (
    <div>
      <Button onClick={()=>handleOnClick(href)}  className="btn"  sx={{
        color: theme === "dark"? "rgb(0,0,0)" : "rgb(207,207,207)" ,
        backgroundColor: theme === "dark" ? "rgb(8,215,243)" : "rgb(0,28,85)",
      }}  >
        {text}
      </Button>
    </div>
  );
};

export default MyButton;