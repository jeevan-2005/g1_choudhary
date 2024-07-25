import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGithubStats } from "../../../../../redux/actionTypes";
import Tilt from "react-parallax-tilt";
import "./_projectSection.scss";
import { CircularProgress } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useSpring } from "@react-spring/web";
import bellavitaSS from '../../../../../assets/Images/bellavitaSS.png';
import bluflySS from '../../../../../assets/Images/bluflySS.png';
import weatherTracker from '../../../../../assets/Images/weather-tracker.png';

const ProjectSection = () => {
  const { loading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGithubStats());
  }, [dispatch]);

  const handleImageOnClick = (href) => {
    if (!href) {
      console.log(`Url not found...`);
      return;
    }
    console.log(href);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const projectsDemoLink = {
    "Bellavita-Clone": {
      demo: "https://bellavita-clone.vercel.app/",
      img: bellavitaSS
    },
    "CityWeather-Tracker": {
      demo: "https://weather-app-seven-pearl-89.vercel.app/",
      img: weatherTracker
    },
    BlueFly: {
      demo: "https://blue-fly-rho.vercel.app/",
      img: bluflySS
    },
  };

  if (error.status) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="allProjects">
      {loading ? (
        <div style={{
          display:"flex",
          alignItems: "center",
          justifyContent: "center",
          height:"50vh",
        }}>
          <CircularProgress size={"3rem"} thickness={3.6}/>
        </div>
      ) : (
        data.map((project, i) => (
          <div key={i} className="singleProject">
            <div className="projectCard">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <li>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    backgroundColor: project.primaryLanguage.color,
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></span>
                {project.primaryLanguage.name}
              </li>
              <div className="projectLinks">
                <a href={projectsDemoLink[project.name].demo} target="_blank">
                  🌐Demo
                </a>
                <a href={project.url} target="_blank">
                  🔗Github
                </a>
              </div>
            </div>
            <Tilt
              key={i}
              perspective={1000}
              scale={1}
              tiltAngleXInitial={0}
              tiltAngleYInitial={-10}
              className="parallax-effect"
            >
              <div
                className="projectImage"
                onClick={() =>
                  handleImageOnClick(projectsDemoLink[project.name].demo)
                }
              >
                <img
                  src={projectsDemoLink[project.name].img}
                  alt={project.name}
                  ref={projectsDemoLink[project.name].ref}
                  style={projectsDemoLink[project.name].style}
                />
              </div>
            </Tilt>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectSection;
