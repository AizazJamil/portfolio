import skillsData from "../../data/SkillsData.json";

type SkillProps = {
  id?: number;
  title?: string;
  text?: string[];
};

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills__wrap">
          <div className="skills__left">
            <div className="eyebrow">
              <p>Skills & Tools</p>
            </div>
          </div>
          <div className="skills__right">
            <div className="skills__inner">
              <p>Currently, I mainly use the following languages and tools.</p>
              <div className="skills__item">
                {skillsData.map((item: SkillProps, index: number) => (
                  <div className="skills__item-col" key={`${item.id}-${index}`}>
                    <h5>{item.title}</h5>
                    <div className="skills__item-text">
                      {item.text?.join(" - ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
