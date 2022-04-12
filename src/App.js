import "./App.css";
import { Auth } from "./pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ConditionLogin } from "./pages/ConditionLogin";
import { Detail } from "./pages/Detail";
import { Home } from "@material-ui/icons";

function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      {/* <ConditionLogin /> */}
      <Routes>
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/" element={<ConditionLogin />} />
      </Routes>
    </div>
  );
}

export default App;
