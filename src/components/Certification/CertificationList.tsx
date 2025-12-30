import { Link } from "react-router-dom";
import certificationData from "../../data/CertificationData.json";
import { PiArrowUpRight } from "react-icons/pi";

type CertificationProps = {
  id?: number;
  title?: string;
  link?: string;
  status?: string;
};

const CertificationList = () => {
  return (
    <>
      {certificationData.map((item: CertificationProps, index: number) => (
        <li className="certification__item" key={`${item.id}-${index}`}>
          {item.link !== "#" ? (
            <Link
              to={item.link ? item.link : "#"}
              className="certification__link"
              target={item.link ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <span>{item.title}</span>
              <PiArrowUpRight />
            </Link>
          ) : (
            <span className="certification__link disabled">
              {item.title} {item.status && <em> — {item.status}</em>}
            </span>
          )}
        </li>
      ))}
    </>
  );
};

export default CertificationList;
