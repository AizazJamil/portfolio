import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SmoothScroll from "./components/Scroll/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SmoothScroll>
  );
}

export default App;
