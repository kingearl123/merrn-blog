import { useState, useEffect } from "react";
import axios from "axios";

const HomepageDashboard = () => {
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogCount = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/blogs");
        setTotalBlogs(response.data.length); // Hitung jumlah blog dari data API
      } catch (err) {
        setError("Gagal memuat jumlah blog. Silakan coba lagi nanti.");
        console.error("Error fetching blog count:", err);
      }
    };

    fetchBlogCount();
  }, []);

  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Utama</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Statistik Blog</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-gray-700">
            Total Blog yang Dipublikasikan: <span className="font-bold">{totalBlogs}</span>
          </p>
        )}
      </div>
    </main>
  );
};

export default HomepageDashboard;
