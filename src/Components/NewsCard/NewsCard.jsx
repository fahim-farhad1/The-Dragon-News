import React, { useEffect, useState } from 'react'
import Card from './Card'

const NewsCard = () => {
    const [categorys, setCategotys] = useState([])
    useEffect(()=>{
      fetch('../../../public/News.json')
      .then(res => res.json())
      .then(data => setCategotys(data.articles))
    },[])
    console.log(categorys);
  return (
    <div>
      {
        categorys.map((card, idx)=>(
            <Card key={idx}  authorImg={card.authorImage} date={card.date} headline={card.description} newsImage={card.image} context={card.content} authorName={card.author} />
        ))
      }
    </div>
  )
}

export default NewsCard
