import NavbarDashboard from "../layout/NavbarDashboard";
import SidebarDashboard from "../layout/SidebarDashboard";
import HomepageDashboard from "../layout/HomepageDashboard";

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
        <HomepageDashboard/>
      </div>
    </div>
  );
}

export default ManageArticle;