import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import experienceData from "../../data/ExperienceData.json";
import Button from "../Button/Button";
const Experience = () => {
    return (_jsx("div", { className: "experience", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "experience__wrap", children: [_jsx("div", { className: "experience__left", children: _jsx("div", { className: "eyebrow", children: _jsx("p", { children: "Experience" }) }) }), _jsxs("div", { className: "experience__right", children: [_jsx("div", { className: "experience__inner", children: experienceData.map((item) => (_jsxs("div", { className: "experience__item", children: [_jsx("h3", { children: item.title }), _jsx("div", { className: "experience__designation", children: item.designation }), _jsxs("div", { className: "experience__status", children: [_jsx("span", { children: item.status?.[0] }), "-", _jsx("span", { children: item.status?.[1] })] }), _jsx("p", { children: item.description })] }, item.id))) }), _jsx(Button, { link: "https://www.linkedin.com/in/aizaz-jamil/", target: "_blank", children: "Find Me on Linkedin" })] })] }) }) }));
};
export default Experience;
