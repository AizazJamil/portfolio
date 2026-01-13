import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "../Button/Button";
import FooterList from "./FooterList";
const Footer = () => {
    return (_jsx("footer", { className: "footer", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "footer__content", children: [_jsx("h3", { children: "Let's get to know each other" }), _jsx(Button, { link: "mailto:aizaz-jamil28@outlook.com", children: "aizaz-jamil28@outlook.com" })] }), _jsxs("div", { className: "footer__wrap", children: [_jsx("div", { className: "footer__copyright", children: _jsxs("p", { className: "footer__text", children: ["\u00A9 ", new Date().getFullYear(), " Aizaz Jamil. All rights reserved."] }) }), _jsx("div", { className: "footer__socials", children: _jsx("ul", { className: "socials__list", children: _jsx(FooterList, {}) }) })] })] }) }));
};
export default Footer;
