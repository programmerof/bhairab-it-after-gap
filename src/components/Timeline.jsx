import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-row my-20 justify-center">
         <div className="w-full md:w-full text-center" >
            <Title>Social media marketing service</Title>
            {timeline.map(item => (
               <TimelineItem 
                  go={item.go}
                  title={item.title}
                  image={item.image}
                  details={item.details}
                  paragraph={item.paragraph}
                  list={item.list}
                  
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;
