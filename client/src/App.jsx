// Modules react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// modul halaman utama blog
import HomeBlog from "./components/HomeBlog";
// end modul halaman utama blog
// modul halaman utama dashboard
import Dashboard from "./components/DashboardMini/ManageArticel";
// end modul halaman utama dashboard
// modul halaman utama input
import InputBlog from "./components/CrudDataBlog/InputBlog";
// end modul halaman utama input
// modul halaman utama edit
import EditBlog from "./components/CrudDataBlog/EditBlog";
// end modul halaman utama edit

function App() {
  return (
    <Router>
      <Routes>
          {/* <Route path="/login" element={<HomeBlog/>}></Route> */}
          {/* <Route path="/register" element={<HomeBlog/>}></Route> */}
          <Route path="/" element={<HomeBlog/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/input" element={<InputBlog/>}></Route>
          <Route path="/edit/:id" element={<EditBlog/>}></Route>
      </Routes>
    </Router>

   
  );
}

export default App;
