import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { GoSun, GoMoon } from "react-icons/go";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                hour: "2-digit",
                minute: "2-digit",
                // second: "2-digit",
                hour12: true,
                timeZone: "Asia/Karachi",
            };
            const formatter = new Intl.DateTimeFormat("en-US", options);
            setTime(formatter.format(now));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    return (_jsx("div", { className: "navbar", children: _jsx("div", { className: "container--fluid", children: _jsxs("div", { className: "navbar__wrap", children: [_jsx("div", { className: "navbar__time", children: _jsxs("span", { className: "navbar__time-text", children: ["Pakistan, Islamabad - ", time] }) }), _jsx("div", { className: "navbar__logo", children: _jsx(Link, { to: "/", className: "navbar__link", children: "Aizaz Jamil" }) }), _jsx("nav", { className: "navbar__menu", children: _jsx("button", { className: "navbar__menu-button", "aria-label": "Toggle Dark Mode", onClick: toggleTheme, children: theme === "dark" ? _jsx(GoSun, {}) : _jsx(GoMoon, {}) }) })] }) }) }));
};
export default Navbar;
