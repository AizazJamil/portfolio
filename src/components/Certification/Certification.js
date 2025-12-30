import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CertificationList from "./CertificationList";
const Certification = () => {
    return (_jsx("div", { className: "certification", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "certification__wrap", children: [_jsx("div", { className: "certification__left", children: _jsx("div", { className: "eyebrow", children: _jsx("p", { children: "Learning & Specialization" }) }) }), _jsx("div", { className: "certification__right", children: _jsx("div", { className: "certification__inner", children: _jsx("ul", { className: "certification__list", children: _jsx(CertificationList, {}) }) }) })] }) }) }));
};
export default Certification;
