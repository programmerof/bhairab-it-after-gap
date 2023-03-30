import React from 'react'

function TeamItem({ name, imgUrl, introduction, role }) {
  return (
    <a href="#" className="w-full block md:flex md:flex-row md:justify-center md:items-center mb-4">
      <div className="w-full h-full md:w-64  border-4 border-blue-400 hover:border-blue-500 p-4 flex flex-col justify-between"> 
      {/* md:h-auto - removed this as this was the problem in above */}
        <div>
        <img
  src={imgUrl}
  alt="name of team member"
  className="object-contain w-full h-full md:h-48 border-4 border-blue-500 rounded-xl"
/>

          <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{name}</h3>
          <p className="text-xs md:text-sm dark:text-white ">{introduction}</p>
        </div>
        <button 
  className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded shadow mt-4"
>
  {role}
</button>
      </div>
    </a>
  )
}

export default TeamItem;
