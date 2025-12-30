import experienceData from "../../data/ExperienceData.json";
import Button from "../Button/Button";

type ExperienceProps = {
  id?: number;
  title?: string;
  designation?: string;
  status?: string[];
  description?: string[];
};

const Experience = () => {
  return (
    <div className="experience">
      <div className="container">
        <div className="experience__wrap">
          <div className="experience__left">
            <div className="eyebrow">
              <p>Experience</p>
            </div>
          </div>
          <div className="experience__right">
            <div className="experience__inner">
              {experienceData.map((item: ExperienceProps) => (
                <div className="experience__item" key={item.id}>
                  <h3>{item.title}</h3>
                  <div className="experience__designation">
                    {item.designation}
                  </div>
                  <div className="experience__status">
                    <span>{item.status?.[0]}</span>-
                    <span>{item.status?.[1]}</span>
                  </div>
                  {/* <p>
                    {item.description?.map((desc, index) => (
                      <span key={index}>{desc}</span>
                    ))}
                  </p> */}
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <Button
              link="https://www.linkedin.com/in/aizaz-jamil/"
              target="_blank"
            >
              Find Me on Linkedin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
