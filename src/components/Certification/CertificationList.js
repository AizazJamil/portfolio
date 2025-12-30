import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import certificationData from "../../data/CertificationData.json";
import { PiArrowUpRight } from "react-icons/pi";
const CertificationList = () => {
    return (_jsx(_Fragment, { children: certificationData.map((item, index) => (_jsx("li", { className: "certification__item", children: item.link !== "#" ? (_jsxs(Link, { to: item.link ? item.link : "#", className: "certification__link", target: item.link ? "_blank" : undefined, rel: "noopener noreferrer", children: [_jsx("span", { children: item.title }), _jsx(PiArrowUpRight, {})] })) : (_jsxs("span", { className: "certification__link disabled", children: [item.title, " ", item.status && _jsxs("em", { children: [" \u2014 ", item.status] })] })) }, `${item.id}-${index}`))) }));
};
export default CertificationList;
