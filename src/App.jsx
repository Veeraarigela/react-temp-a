//import "./App.css";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="app1" className="box">App1</Link>
          <Link to="app2" className="box">App2</Link>
          <Link to="app3" className="box">App3</Link>
        </div>
        <hr></hr>
        <div>
          <Routes>
            <Route index element={<App1 />} />
            <Route path="app1" element={<App1 />} />
            <Route path="app2" element={<App2 />} />
            <Route path="app3" element={<App3 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;