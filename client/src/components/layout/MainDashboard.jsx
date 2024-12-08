import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";

const MainDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        setError("Gagal memuat blog. Silakan coba lagi nanti.");
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/api/blogs/delete/${id}`);
      setBlogs(blogs.filter((blog) => blog.id !== id));
      navigate('/dashboard');
    } catch (err) {
      alert("Gagal menghapus blog.");
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang di Blog Saya!</h1>
      <p>
        Di bagian ini, Anda akan menemukan semua yang Anda butuhkan untuk
        mengelola artikel, berbagi pemikiran, dan berinteraksi dengan pembaca.
        Jelajahi berbagai bagian menu untuk memulai.
      </p>

      <div className="overflow-x-auto mt-4">
        <br />
        <Link
          to="/input"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tambah Artikel
        </Link>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Judul Artikel</th>
              <th className="py-3 px-6 text-left">Tanggal Post</th>
              <th className="py-3 px-6 text-left">Gambar</th>
              <th className="py-3 px-6 text-center" colSpan={2}>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {blogs.map((blog,index) => (
              <tr
                key={blog.id || blog.title}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{index+1}</td>
                <td className="py-3 px-6">{blog.title}</td>
                <td className="py-3 px-6">{blog.date}</td>
                <td className="py-3 px-6">
                  {blog.image ? "Dipublikasikan" : "Belum Dipublikasikan"}
                </td>
                <td className="py-3 px-6">
                  <Link
                    to={`/edit/${blog._id}`}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit Blog
                  </Link>
                </td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete Blog
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainDashboard;
