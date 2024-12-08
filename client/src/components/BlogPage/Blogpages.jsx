import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/footer";

const Blogpages = () => {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/api/blogs/get/${id}`);
        setBlog(response.data);
      } catch (err) {
        setError("Gagal memuat artikel. Silakan coba lagi nanti.");
        console.error("Error fetching blog:", err);
      }
    };
    fetchBlog();
  }, [id]);

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-8 px-4 text-center">
          <p className="text-red-500">{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-8 px-4 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Gambar Blog */}
          <img
            src={`http://localhost:2000/uploads/${blog.image}`}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* Judul Blog */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>

          {/* Tanggal Publikasi */}
          <p className="text-sm text-gray-500 mb-6">
            Dipublikasikan pada: {new Date(blog.date).toLocaleDateString()}
          </p>

          {/* Isi Blog */}
          <div className="prose prose-lg text-gray-800 leading-relaxed">
            {blog.body.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogpages;
