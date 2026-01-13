import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NotFound from "@/components/NotFound/NotFound";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home/Home";
import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
const AppRoutes = () => {
    return (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainLayout, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: "/home", element: _jsx(Navigate, { to: "/", replace: true }) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
};
export default AppRoutes;
