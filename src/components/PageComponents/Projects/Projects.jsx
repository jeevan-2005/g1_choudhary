import Heading from "../../heading/Heading1/Heading";
import "./_projects.scss";
import ProjectSection from "./projectsComponents/ProjectSection/ProjectSection";

const Projects = () => {
  


  return (
    <div className="projectsPage">
      <Heading text="Projects" />
      <ProjectSection/>
    </div>
  );
};

export default Projects;
