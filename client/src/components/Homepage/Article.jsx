import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/blogs`)
      .then((response) => setArticles(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]" id="articles">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Our Articles
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-base text-body-color">
              Stay updated with the latest trends and insights in technology.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article._id}
                className="bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={`http://localhost:2000/uploads/${article.image}`}
                  alt={article.title}
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {article.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {article.body.slice(0, 100)}... {/* Potong teks untuk preview */}
                  </p>
                  <Link
  to={`/blogs/${article._id}`} // Arahkan ke rute detail
  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
>
  Read more
</Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
