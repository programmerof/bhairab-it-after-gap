import React from 'react';

function TimelineItem({ go, title, image, details, paragraph, list }) {
  return (
    <div className="flex flex-wrap md:flex-row md:flex-nowrap relative ">
      <div className="mb-10 ml-4 text-center bg-red-200 border rounded-2xl max-w-xs">
        <p className="flex flex-wrap gap-4 flex-row items-center justify-center text-xs md:text-sm">
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title}</h3>
        </p>


        {/* image */}
        <img
          src={image}
          alt="portfolio"
          className="object-contain w-full h-full md:h-48 md:h-48  cursor-pointer"
        />
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details}</p>

        <a href="/Form">
          <button className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {go}

          </button>
          <div><p className='bg-red text-black '>{paragraph}</p>
            <p className='bg-red text-black '>{list}</p></div>
        </a>
      </div>
    </div>
  );
}
export default TimelineItem;
