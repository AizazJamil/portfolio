import CertificationList from "./CertificationList";

const Certification = () => {
  return (
    <div className="certification">
      <div className="container">
        <div className="certification__wrap">
          <div className="certification__left">
            <div className="eyebrow">
              <p>Learning & Specialization</p>
            </div>
          </div>
          <div className="certification__right">
            <div className="certification__inner">
              <ul className="certification__list">
                <CertificationList />
              </ul>
              {/* <div className="certification__item">
                {certificationData.map(
                  (item: CertificationProps, index: number) => (
                    <div
                      className="certification__item-col"
                      key={`${item.id}-${index}`}
                    >
                      <h5>{item.title}</h5>
                      <div className="certification__item-text">
                        {item.text?.join(" - ")}
                      </div>
                    </div>
                  )
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
