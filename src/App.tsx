import "./App.scss";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SmoothScroll from "./components/Scroll/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </SmoothScroll>
  );
}

export default App;
