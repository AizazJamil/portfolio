import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "../Button/Button";
const NotFound = () => {
    return (_jsxs("div", { className: "not-found", children: [_jsx("p", { className: "not-found__message", children: "Opps! Page not found" }), _jsx("h2", { className: "not-found__code", children: "404" }), _jsx("p", { className: "not-found__message", children: "The page you are looking for does not exist." }), _jsx(Button, { link: "/", children: "Go to Home" })] }));
};
export default NotFound;
