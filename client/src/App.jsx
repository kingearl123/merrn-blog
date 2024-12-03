import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBlog from "./components/HomeBlog";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomeBlog/>}></Route>
          <Route path="/login" element={<HomeBlog/>}></Route>
          <Route path="/register" element={<HomeBlog/>}></Route>
      </Routes>
    </Router>

   
  );
}

export default App;
