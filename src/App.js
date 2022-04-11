import "./App.css";
import { Auth } from "./pages/Auth";
import "bootstrap/dist/css/bootstrap.min.css";

import { ConditionLogin } from "./pages/ConditionLogin";

function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      <ConditionLogin />
    </div>
  );
}

export default App;
