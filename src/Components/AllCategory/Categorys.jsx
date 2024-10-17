import React, { useEffect, useState } from "react";
import Category from "./Category";
import TitleText from "../TitleText/TitleText";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Categorys = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../../../public/News.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.articles.map((article) => article.category)),
        ];
        setCategories(uniqueCategories); // Directly setting unique categories
      });
  }, []);
  console.log(categories); // Unique categories
  return (
    <div className="">
      <TitleText Text={"All Categorys"} />

      {categories.map((category, idx) => (
      <NavLink to={`/${category}`}>
        <Category key={idx} name={category} />
      </NavLink>
      ))}
      <div className="flex items-center gap-5 text-gray-400 hover:text-black text-lg hover:font-PoppinsSemiBold hover:bg-gray-100 py-2 px-3 text-start w-full ">
       <NavLink><button>All</button></NavLink> 
        <MdKeyboardDoubleArrowRight />
      </div>
    </div>
  );
};

export default Categorys;
