import { useInView } from "react-intersection-observer";
import { education } from "../../../portfolio";
import MyButton from "../../Button/Button";
import Heading from "../../heading/Heading1/Heading";
import "./_education.scss";
import { useSpring, animated } from "@react-spring/web";
import iiitkLogo from '../../../assets/Images/iiitKLogo.png'
import trividyaaLogo from '../../../assets/Images/trividyaaLogo.png'
import { Insights } from "@mui/icons-material";

const edImages = {
  "iiitKLogo": iiitkLogo,
  "trividyaaLogo": trividyaaLogo,
}

const Education = () => {
  const { ref: refEdContent1, inView: inViewEdContent1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refEdContent2, inView: inViewEdContent2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refEdImage1, inView: inViewEdImage1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: refEdImage2, inView: inViewEdImage2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const styleEdContent1 = useSpring({
    transform: inViewEdContent1 ? "translateX(0%)" : "translateX(50%)",
    config: { tension: 170, friction: 60 },
  });

  
  const styleEdContent2 = useSpring({
    transform: inViewEdContent2 ? "translateX(0%)" : "translateX(50%)",
    config: { tension: 170, friction: 60 },
  });

  const styleEdImage1 = useSpring({
    transform: inViewEdImage1 ? "rotateY(0deg)" : "rotateY(70deg)",
    config: { tension: 170, friction: 60, duration:1000  },
  });

  const styleEdImage2 = useSpring({
    transform: inViewEdImage2 ? "rotateY(0deg)" : "rotateY(70deg)",
    config: { tension: 170, friction: 60, duration: 1000 },
  });

  return (
    <>
      <div className="educationPage">
        <Heading text={education.heading} />
        <div className="parentEdContainer">
          {education.institutes.map((institute) => (
            <div className={institute.className} key={institute.id}>
              <animated.img src={edImages[institute.imgSrc]} alt={institute.imgAlt}
               ref={institute.id == 1? refEdImage1 : refEdImage2} style={institute.id == 1? styleEdImage1 : styleEdImage2} 
               />
              <animated.div
                className="aboutEducation"
                ref={institute.id == 1? refEdContent1 : refEdContent2} style={institute.id == 1? styleEdContent1 : styleEdContent2}
              >
                <div className="instituteDiv">
                  <div className="instituteTitle">
                    <h2>{institute.name}</h2>
                    <p>{institute.course}</p>
                  </div>
                  <small>
                    {institute.from}-{institute.to}
                  </small>
                </div>
                <p className="description">{institute.description}</p>
                <div className="visitButton">
                  <MyButton text={"Visit Website"} href={institute.website} />
                </div>
              </animated.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Education;
