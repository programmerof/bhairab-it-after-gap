import React from 'react'

function TeamItem({ name, imgUrl, introduction, role }) {
  return (
    <a href="#" className="block md:flex md:flex-row md:justify-center md:items-center mb-4">
      <div className="w-full md:w-64 h-full border-4 border-blue-400 hover:border-blue-500 p-4 flex flex-col justify-between box-border">
        <div className="mb-4 md:mb-0">
          <img
            src={imgUrl}
            alt="name of team member"
            className="object-contain w-full h-48 md:h-auto border-4 border-blue-500 rounded-xl"
          />

          <h3 className="text-lg md:text-xl dark:text-white mt-2 font-semibold">{name}</h3>
          <p className="text-xs md:text-sm dark:text-white mt-1">{introduction}</p>
        </div>
        <button className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded shadow">
          {role}
        </button>
      </div>
    </a>
  )
}

export default TeamItem;
