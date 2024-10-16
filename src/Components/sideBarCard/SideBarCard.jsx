import React, { useEffect, useState } from 'react'
import SideCard from './SideCard'
import TitleText from '../TitleText/TitleText'

const SideBarCard = () => {
    const [categorys, setCategotys] = useState([])
    useEffect(()=>{
      fetch('../../../public/News.json')
      .then(res => res.json())
      .then(data => setCategotys(data.articles))
    },[])
    console.log(categorys);
  return (
    <div className=''>
    {
        categorys.map((news, idx)=>(
            <SideCard key={idx} image={news.image} headLine={news.description} category={news.category} date={news.date}/>
        ))

    }
    </div>
  )
}

export default SideBarCard
