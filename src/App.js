import { jsx as _jsx } from "react/jsx-runtime";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SmoothScroll from "./components/Scroll/SmoothScroll";
function App() {
    return (_jsx(SmoothScroll, { children: _jsx(BrowserRouter, { children: _jsx(AppRoutes, {}) }) }));
}
export default App;
