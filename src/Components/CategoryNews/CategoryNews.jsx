import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Card from '../NewsCard/Card';

const CategoryNews = () => {
    const Newses = useLoaderData();
    const newses = Newses.articles
    const {categories} = useParams();
    const articles = newses.filter(article => article.category === categories)
    console.log(articles);
  return (
    <div>
      {
        articles.map((article, idx)=>(
            <Card key={idx}  authorImg={article.authorImage} date={article.date} headline={article.description} newsImage={article.image} context={article.content} authorName={article.author} />
        ))
      }
    </div>
  )
}

export default CategoryNews
