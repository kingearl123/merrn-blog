import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBlog from "./components/HomeBlog";
import Dashboard from "./components/DashboardMini/ManageArticel";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomeBlog/>}></Route>
          <Route path="/login" element={<HomeBlog/>}></Route>
          <Route path="/register" element={<HomeBlog/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>

   
  );
}

export default App;
