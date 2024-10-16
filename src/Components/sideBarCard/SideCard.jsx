import React from 'react'
import { CiCalendarDate } from "react-icons/ci";

const SideCard = ({image, headLine, category, date}) => {
  return (
    <div className='mb-5'>
      <img className='h-40 w-full' src={image} alt="" />
      <p>{headLine}</p>
      <div className='flex gap-3'>
        <p>{category}</p>
        <span className='flex items-center gap-1'><CiCalendarDate /> {date}</span>
      </div>
    </div>
  )
}

export default SideCard
