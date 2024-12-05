import NavbarDashboard from "../layout/NavbarDashboard";
import SidebarDashboard from "../layout/SidebarDashboard";
import MainDashboard from "../layout/MainDashboard";

function ManageArticle() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigasi Atas */}
      <NavbarDashboard/>
      {/* Layout Dashboard */}
      <div className="flex">
        {/* Navigasi Samping */}
        <SidebarDashboard/>
        {/* Konten Utama */}
        <MainDashboard/>
      </div>
    </div>
  );
}

export default ManageArticle;