import React from 'react'
import SideBarCard from '../Components/sideBarCard/sideBarCard'
import Categorys from '../Components/AllCategory/Categorys'
import TitleText from '../Components/TitleText/TitleText'
import NewsCard from '../Components/NewsCard/NewsCard'
import LoginsButtons from '../Components/LoginsButtons/LoginsButtons'
import SocialContact from '../Components/Contact/SocialContact'
import { Outlet } from 'react-router-dom'

const CategoriesLayout = () => {
  return (
    <div className="flex gap-5">
    <div className="w-3/12">
      <Categorys />
      <SideBarCard className="mt-5" />
    </div>
    <div className="">
      <TitleText Text={"Dragon News"} />
      <Outlet />
    </div>
    <div className="w-3/12">
      <TitleText Text={'Login With'} />
      {/* Login Buttons  */}
      <LoginsButtons />
     <p className="mt-10 text-lg">Find Us On</p>
     <SocialContact />
     
    </div>
  </div>
  )
}

export default CategoriesLayout
