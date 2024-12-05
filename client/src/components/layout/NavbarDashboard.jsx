const NavbarDashboard = () => {
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      <div>
        <h1 className="text-white text-xl font-semibold">BLOG SAYA</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-white">Selamat Datang</span>
        <i className="fas fa-user-circle text-white text-2xl"></i>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
