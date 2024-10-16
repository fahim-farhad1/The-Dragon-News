import React, { useEffect, useState } from 'react'
import Category from './Category'
import TitleText from '../TitleText/TitleText'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Categorys = () => {
  // const [categorys, setCategotys] = useState([])
  // useEffect(()=>{
  //   fetch('../../../public/News.json')
  //   .then(res => res.json())
  //   .then(data => setCategotys(data.articles))
  // },[])
  // const Categorys = [];
  // categorys.forEach(category =>{
  //   Categorys.push(category.category)
  // })
  // const uniqueCategories = [...new Set(Categorys)];
  // console.log(uniqueCategories);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('../../../public/News.json')
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.articles.map(article => article.category))];
        setCategories(uniqueCategories); // Directly setting unique categories
      })
  }, []);

  console.log(categories); // Unique categories
  return (
    <div className=''>
      <TitleText Text={"All Categorys"} />
      <div className='w-full'>
      {
        categories.map((category, idx)=>(
          <Category key={idx} name={category} />
        ))
      }
      <div className='flex items-center gap-5 text-gray-400 hover:text-black text-lg hover:font-PoppinsSemiBold hover:bg-gray-100 py-2 px-3 text-start w-full '>
      <button>All</button>
      <MdKeyboardDoubleArrowRight />
      </div>
      </div>
    </div>
  )
}

export default Categorys
