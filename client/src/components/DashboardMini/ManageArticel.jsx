
function ManageArticle() {
  // Function for handling dropdown toggle
  const toggleDropdown = (e) => {
    const desplegable = e.currentTarget.nextSibling;
    desplegable.classList.toggle("hidden");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navegación Superior */}
      <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-semibold">SALUD 360</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Bienvenido</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>

      {/* Dashboard Layout */}
      <div className="flex">
        {/* Navegación lateral */}
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
          <nav>
            <ul className="space-y-2">
              {/* Opciones con desplegable */}
              {[
                {
                  icon: "fas fa-calendar-alt",
                  label: "Agenda",
                  items: ["Gestión de citas", "Pólizas"],
                },
                {
                  icon: "fas fa-money-bill-wave",
                  label: "Contabilidad",
                  items: ["Tratamientos", "Gastos", "Facturas"],
                },
                {
                  icon: "fas fa-chart-bar",
                  label: "Informes",
                  items: ["Presupuestos", "Informe médico"],
                },
                {
                  icon: "fas fa-file-alt",
                  label: "Documentación",
                  items: ["Firmas pendientes", "Documentos"],
                },
              ].map((option, index) => (
                <li key={index} className="opcion-con-desplegable">
                  <div
                    className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <div className="flex items-center">
                      <i className={`${option.icon} mr-2`}></i>
                      <span>{option.label}</span>
                    </div>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                  <ul className="desplegable ml-4 hidden">
                    {option.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="block p-2 hover:bg-gray-700 flex items-center"
                        >
                          <i className="fas fa-chevron-right mr-2 text-xs"></i>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">
            ¡Bienvenido al CRM de Mi Empresa!
          </h1>
          <p>
            En esta sección encontrarás todo lo que necesitas para administrar
            tus clientes y ventas de manera eficiente.
          </p>
        </main>
      </div>
    </div>
  );
}

export default ManageArticle;
