import React from 'react';
import Ourservices from './Ourservices';

const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-gray-200 h-32 flex items-center justify-center">
          <span>Team member 1</span>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 h-32 flex items-center justify-center">
              <span>Team member 2</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 h-32 flex items-center justify-center">
              <span>Team member 3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4 p-4">
        <div className="bg-gray-200 h-32 flex items-center justify-center">
          <span>Team member 4</span>
        </div>
      </div>

      <div className="w-full lg:w-1/4 p-4">
        <div className="bg-gray-200 h-32 flex items-center justify-center">
          <span>Team member 5</span>
        </div>
      </div>

      <div className="w-full lg:w-1/4 p-4">
        <div className="bg-gray-200 h-32 flex items-center justify-center">
          <span>Team member 6</span>
        </div>
      </div>

      <div className="w-full lg:w-1/4 p-4">
        <div className="bg-gray-200 h-32 flex items-center justify-center">
          <span>Team member 7</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
