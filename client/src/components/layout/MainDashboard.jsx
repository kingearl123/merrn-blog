import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState,useEffect } from "react";

const MainDashboard = () => {

  // const [data, setData] = useState([]);

  // useEffect(() => {});

  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang di Blog Saya!</h1>
      <p>
        Di bagian ini, Anda akan menemukan semua yang Anda butuhkan untuk
        mengelola artikel, berbagi pemikiran, dan berinteraksi dengan pembaca.
        Jelajahi berbagai bagian menu untuk memulai.
      </p>

      {/* Tabel */}
      <div className="overflow-x-auto mt-4">
        <br />
        {/* button tambah */}
        <Link
          to="/input"
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah Artikel
        </Link>
        <br />
        <br />
        {/* button tambah */}
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Judul Artikel</th>
              <th className="py-3 px-6 text-left">Tanggal Post</th>
              <th className="py-3 px-6 text-left">Gambar</th>
              <th className="py-3 px-6 text-center" colSpan={2}>
                Aksi
              </th>
            </tr>
          </thead>
          
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-300 hover:bg-gray-100">
              <td className="py-3 px-6">Artikel 1</td>
              <td className="py-3 px-6">01/10/2023</td>
              <td className="py-3 px-6">Dipublikasikan</td>
              <td className="py-3 px-6">
                <Link to="/edit/:id"
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center bg-yellow-500 rounded-lg text-white"
                >
                  Edit Blog
                </Link>{" "}
              </td>
              <td className="">
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5  text-sm font-medium text-center bg-red-500 rounded-lg text-white"
                >
                  Delete Blog
                </button>
              </td>
            </tr>

            {/* Tambahkan baris lainnya sesuai kebutuhan */}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainDashboard;
