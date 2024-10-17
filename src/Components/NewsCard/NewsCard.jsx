import React, { useEffect, useState } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const NewsCard = () => {
  const [categorys, setCategotys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch("../../../public/News.json")
      .then((res) => res.json())
      .then((data) => setCategotys(data.articles));
  }, []);
  console.log(categorys);
  const blogsPerPage = 4; // Set how many blogs you want per page
  // Calculate total number of pages
  const totalPages = Math.ceil(categorys.length / blogsPerPage);
  // Get the current blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = categorys.slice(indexOfFirstBlog, indexOfLastBlog);
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      {currentBlogs.map((card, idx) => (
        <NavLink to={`/${card.category}/${card.id}`}>
          {" "}
          <Card
            key={idx}
            authorImg={card.authorImage}
            date={card.date}
            headline={card.description}
            newsImage={card.image}
            context={card.content}
            authorName={card.author}
          />
        </NavLink>
      ))}
      {/* Pagination controls */}
      <div className="my-2 md:my-5 flex justify-center gap-2 join">
        {Array.from({ length: totalPages }, (_, index) => (
          <input
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            type="radio"
            name="options"
            className="join-item btn btn-square"
            aria-label={index + 1}
            defaultChecked={index === 0}
          ></input>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
