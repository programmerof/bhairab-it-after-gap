import React from 'react'

function TeamItem({ name, imgUrl, introduction, role }) {
  return (
    <a href="#" className="w-full">
      <img
        src={imgUrl}
        alt="name of team member"
        className="object-contain w-full h-full md:h-48 cursor-pointer border-4 border-red-500 hover:border-blue-500"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{name}</h3>
        
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {role}
          <br />
          {introduction}
        </p>
      </div>
    </a>
  )
}

export default TeamItem;
