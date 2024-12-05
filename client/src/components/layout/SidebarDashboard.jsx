const SidebarDashboard = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          {[
            { icon: "fas fa-calendar-alt", label: "Menu Utama" },
            { icon: "fas fa-list", label: "Daftar Artikel" },
          ].map((option, index) => (
            <li key={index} className="p-2 hover:bg-gray-700 cursor-pointer">
              <div className="flex items-center">
                <i className={`${option.icon} mr-2`}></i>
                <span>{option.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarDashboard;
