import React from 'react'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'
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
            <NavLink to={`/${article.category}/${article.id}`}><Card key={idx}  authorImg={article.authorImage} date={article.date} headline={article.description} newsImage={article.image} context={article.content} authorName={article.author} /></NavLink>
        ))
      }
    </div>
  )
}

export default CategoryNews
