import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const SingleNews = () => {
    const {id} = useParams();
    const Newses = useLoaderData()
    console.log(Newses.articles)

    const News = Newses.articles.find(news => news.id === parseInt(id));
    const {image, author, date, category, description, content} = News
  return (
    <div className='my-5'>
      <img src={image} className='h-64 w-full'  alt="" />
      <div className='flex gap-2 items-center'>
        <p>{author}</p>
        <p>{date}</p>
        <p>{category}</p>
      </div>
      <p className='text-xl font-PoppinsSemiBold'>{description}</p>
      <p>{content}</p>
    </div>
  )
}

export default SingleNews
