import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';


function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Work Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        {portfolio.map(project => (
          <PortfolioItem 
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
      <button className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium shadow-md mt-8">
        See More
      </button>
    </div>
  )
}


export default Portfolio;