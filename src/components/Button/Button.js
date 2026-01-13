import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
const Button = ({ children, link, target }) => {
    return (_jsx("div", { className: "button-wrap", children: _jsxs(Link, { to: link, className: "button btn__primary", target: target, rel: target === "_blank" ? "noopener noreferrer" : undefined, children: [_jsx("span", { className: "dot" }), " ", children] }) }));
};
export default Button;
