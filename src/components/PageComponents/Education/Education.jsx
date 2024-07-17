import { education } from "../../../portfolio";
import Heading from "../../heading/Heading1/Heading";
import "./_education.scss";

const Education = () => {
  return (
    <div className="educationPage">
      <Heading text={education.heading} />
      <div className="timeline">
        {education.institutes.map((institute, i) => (
          <div className={institute.className} key={i}>
            <img src={institute.imgSrc} alt={institute.imgAlt} />
            <div className="aboutEducation">
              <h2>{institute.name}</h2>
              <small>
                {institute.from}-{institute.to}
              </small>
              <p className="description">{institute.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Education;
