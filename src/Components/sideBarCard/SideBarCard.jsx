import React, { useEffect, useState } from 'react'
import SideCard from './SideCard'
import TitleText from '../TitleText/TitleText'

const SideBarCard = () => {
    const [News, setNews] = useState([]);
    useEffect(()=>{
      fetch('../../../public/News.json')
      .then(res => res.json())
      .then(data =>{
        const recentDate = new Date()
        recentDate.setDate(recentDate.getDate() - 2); // Get the date 30 days ago
        // Filter the blogs based on the published date
        const filterNews = data.articles.filter(news => new Date(news.date) >= recentDate)
        setNews(filterNews)
      })
    },[])
    // console.log(categorys);
    // const recentDate = new Date()
    // recentDate.setDate(recentDate.getDate() - 1); // Get the date 30 days ago
    // // Filter the blogs based on the published date
    // const filterNews = categorys.filter(news => new Date(news.date) >= recentDate)
    // setNews(filterNews)
    console.log(News)

  return (
    <div className=''>
    {
        News.map((news, idx)=>(
            <SideCard key={idx} image={news.image} headLine={news.description} category={news.category} date={news.date}/>
        ))

    }
    </div>
  )
}

export default SideBarCard
