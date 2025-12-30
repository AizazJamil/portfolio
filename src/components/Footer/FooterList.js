import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
import footerData from "../../data/FooterData.json";
// import type { JSX } from "react/jsx-dev-runtime";
import { Link } from "react-router-dom";
// const iconMap: Record<string, JSX.Element> = {
//   instagram: <RiInstagramLine />,
//   linkedin: <RiLinkedinLine />,
//   github: <RiGithubLine />,
// };
const FooterList = () => {
    return (_jsx(_Fragment, { children: footerData.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.link || "#", className: "social__link", target: "_blank", rel: "noopener noreferrer", "aria-label": item.title, children: item.title }) }, item.id))) }));
};
export default FooterList;
