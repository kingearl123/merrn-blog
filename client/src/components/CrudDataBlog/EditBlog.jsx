import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    date: "",
    image: null,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:2000/api/blogs/get/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("body", blog.body);
    formData.append("date", blog.date);
    if (blog.image) {
      formData.append("image", blog.image);
    }

    try {
      setLoading(true);
      await axios.put(`http://localhost:2000/api/blogs/update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to update the blog");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold">Edit Blog Post</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="title" className="block mb-2 text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter blog title"
                  value={blog.title}
                  onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="body" className="block mb-2 text-sm font-medium">
                  Body
                </label>
                <textarea
                  name="body"
                  id="body"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write the blog content here"
                  value={blog.body}
                  onChange={(e) => setBlog({ ...blog, body: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <label htmlFor="date" className="block mb-2 text-sm font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={blog.date}
                  onChange={(e) => setBlog({ ...blog, date: e.target.value })}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="image" className="block mb-2 text-sm font-medium">
                  Image URL
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={(e) => setBlog({ ...blog, image: e.target.files[0] })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-blue-500 rounded-lg hover:bg-primary-800"
            >
              Update Blog Post
            </button>
            <Link
              to="/dashboard"
              className="ml-5 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-blue-500 rounded-lg hover:bg-primary-800"
            >
              Back
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditBlog;
