import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import skillsData from "../../data/SkillsData.json";
const Skills = () => {
    return (_jsx("div", { className: "skills", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "skills__wrap", children: [_jsx("div", { className: "skills__left", children: _jsx("div", { className: "eyebrow", children: _jsx("p", { children: "Skills & Tools" }) }) }), _jsx("div", { className: "skills__right", children: _jsxs("div", { className: "skills__inner", children: [_jsx("p", { children: "Currently, I mainly use the following languages and tools." }), _jsx("div", { className: "skills__item", children: skillsData.map((item, index) => (_jsxs("div", { className: "skills__item-col", children: [_jsx("h5", { children: item.title }), _jsx("div", { className: "skills__item-text", children: item.text?.join(" - ") })] }, `${item.id}-${index}`))) })] }) })] }) }) }));
};
export default Skills;
