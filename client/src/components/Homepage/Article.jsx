import { useState } from "react";
import axios from "axios";

axios.get("http://localhost:2000/api/blogs")
  .then((Response) => {
    console.log(Response);
  })
  .catch((Error) => {
    console.log(Error);
  });

const Article = () => {
  // Daftar artikel

  const articles = [
    {
      id: 1,
      title: "Noteworthy Technology Acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Top Modern Technologies in 2023",
      description:
        "Explore the cutting-edge technologies shaping the future of the digital world.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "AI Advancements and Innovations",
      description: "Discover how AI is transforming industries worldwide.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 4,
      title: "The Future of Cloud Computing",
      description:
        "Learn about the latest trends in cloud computing technology.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 5,
      title: "Cybersecurity in the Digital Era",
      description: "How to stay safe in an increasingly connected world.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 6,
      title: "Blockchain Beyond Cryptocurrency",
      description: "Explore the potential of blockchain in various industries.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 7,
      title: "Quantum Computing: The Next Frontier",
      description: "Unveiling the mysteries of quantum computing.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 8,
      title: "5G Networks: What to Expect",
      description: "How 5G technology is revolutionizing connectivity.",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 9,
      title: "Green Tech Innovations",
      description:
        "Sustainable technologies paving the way for a greener future.",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  // State untuk menampilkan artikel
  const [visibleCount, setVisibleCount] = useState(6);

  // Fungsi untuk menampilkan lebih banyak artikel
  const loadMoreArticles = () => {
    setVisibleCount(articles.length);
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
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
            {articles.slice(0, visibleCount).map((article) => (
              <div
                key={article.id}
                className="bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={article.image}
                    alt={article.title}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-indigo-600">
                      {article.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {article.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < articles.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMoreArticles}
                className="px-6 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Article;
