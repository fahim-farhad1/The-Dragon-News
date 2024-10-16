import React from 'react'

const Category = ({name}) => {
    console.log(name)
  return (
    <div>
      <button className='text-gray-400 hover:text-black text-lg hover:font-PoppinsSemiBold hover:bg-gray-100 py-2 px-3 text-start w-full'>{name}</button>
    </div>
  )
}

export default Category
