import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const InputBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    date: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.files[0],
    });
  };

  const submitButton = async (e) => {
    e.preventDefault();

    if (!blog.title || !blog.body || !blog.date || !blog.image) {
      alert("All fields are required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", blog.title);
      formData.append("body", blog.body);
      formData.append("date", blog.date);
      formData.append("image", blog.image);

      const response = await axios.post(
        "http://localhost:2000/api/blogs/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Failed to submit blog. Please check the console for details.");
    }
  };

  return (
    <div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold">Add a New Blog Post</h2>
          <form action="#" onSubmit={submitButton}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Title Field */}
              <div className="sm:col-span-2">
                <label htmlFor="title" className="block mb-2 text-sm font-medium">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={blog.title}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter blog title"
                  required
                />
              </div>

              {/* Body Field */}
              <div className="sm:col-span-2">
                <label htmlFor="body" className="block mb-2 text-sm font-medium">
                  Body
                </label>
                <textarea
                  name="body"
                  id="body"
                  rows={6}
                  value={blog.body}
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Write the blog content here"
                  required
                ></textarea>
              </div>

              {/* Date Field */}
              <div className="w-full">
                <label htmlFor="date" className="block mb-2 text-sm font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={blog.date}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              {/* Image Field */}
              <div className="sm:col-span-2">
                <label htmlFor="image" className="block mb-2 text-sm font-medium">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleFileChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-blue-500 rounded-lg hover:bg-primary-800"
            >
              Add Blog Post
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

export default InputBlog;
