import { Link } from "react-router-dom";

const SidebarDashboard = () => {
  const menuOptions = [
    { icon: "fas fa-calendar-alt", label: "Menu Utama", path: "/homepagedashboard" },
    { icon: "fas fa-list", label: "Daftar Artikel", path: "/dashboard" },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          {menuOptions.map((option, index) => (
            <li key={index} className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to={option.path} className="flex items-center">
                <i className={`${option.icon} mr-2`}></i>
                <span>{option.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarDashboard;
