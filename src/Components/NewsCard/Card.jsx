import React from "react";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const Card = ({ authorImg, date, headline, newsImage, context,authorName }) => {
  return (
    <div className="p-2 my-5">
        {/* author info  */}
     <div className="flex items-center justify-between bg-gray-100 p-2">
     <div className="flex items-center gap-2">
        <img className="h-16 w-16 rounded-full" src={authorImg} alt="" />
        <div>
            <p>{authorName}</p>
            <p>{date}</p>
        </div>
      </div>
      <div className="flex gap-2">
      <CiBookmark />
      <IoShareSocialOutline />
      </div>
     </div>
     <p>{headline}</p>
     <img className="h-64" src={newsImage} alt="" />
     <p>{context}</p>

    </div>
  );
};

export default Card;
