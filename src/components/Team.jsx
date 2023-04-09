import React from 'react'
import TeamItem from './TeamItem'
import team from '../data/team'

function Team() {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Meet the leaders who make Bhairab
ICT Solution a thriving company.</h1>
           
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 text-center">
        {team.map(teamItem => (
          <TeamItem 
            imgUrl={teamItem.imgUrl}
            name={teamItem.name}
            role={teamItem.role}
            introduction={teamItem.introduction}
          />
        ))}
      </div>
      
      <button className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium shadow-md mt-8">
        See More
      </button>
    </div>
  )
}

export default Team
