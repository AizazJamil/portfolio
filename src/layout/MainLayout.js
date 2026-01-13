import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Footer } from "@/components/index";
const MainLayout = ({ children }) => {
    return (_jsxs("main", { className: "main__layout", children: [_jsxs("div", { className: "main__wrapper", children: [_jsx(Navbar, {}), children] }), _jsx(Footer, {})] }));
};
export default MainLayout;
