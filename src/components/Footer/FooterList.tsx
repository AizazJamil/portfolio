import type { FC } from "react";
// import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
import footerData from "../../data/FooterData.json";
// import type { JSX } from "react/jsx-dev-runtime";
import { Link } from "react-router-dom";

type FooterLink = {
  id?: number;
  title?: string;
  icon?: string;
  link?: string;
};

// const iconMap: Record<string, JSX.Element> = {
//   instagram: <RiInstagramLine />,
//   linkedin: <RiLinkedinLine />,
//   github: <RiGithubLine />,
// };

const FooterList: FC = () => {
  return (
    <>
      {footerData.map((item: FooterLink) => (
        <li key={item.id}>
          <Link
            to={item.link || "#"}
            className="social__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
          >
            {/* {iconMap[item.icon || ""]} */}
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default FooterList;
