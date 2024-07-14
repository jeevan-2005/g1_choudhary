import "./_home.scss";
import FeelingProud from "./homeComponents/FeelingProud/FeelingProud";
import Greeting from "./homeComponents/Greeting/Greeting";
import WhatIDo from "./homeComponents/WhatIDo/WhatIDo";
import Heading from "../../heading/Heading1/Heading";

const Home = () => {

  return (
    <div className="homePage">
      <Heading text="About Me"/>
      <div className="greetings">
        <Greeting />
        <FeelingProud className="greetingImage" />
      </div>
      <WhatIDo />
    </div>
  );
};

export default Home;
