import React from 'react';

const subjects = [{
  name: 'Introduction to Information Technology', year: 1, 
  semester: 'first', 
  topics: [{
    name: 'Intro',
    link: '/Iit',
  },
  {
    name: 'Topic 2075',
    link: '/Iit2075',
  },
  {
    name: 'Topic 2078',
    link: '/Iit2078',
  },
  {
    name: 'Topic 2074',
    link: '/Iit2074',
  },
  
  {
    name: 'Topic 2079',
    link: '/Iit2079',
  },],
  link: '',
},
{
  name: 'C Programming',
  year: 1,
  semester: 'first',
  topics: [
    {
      name: 'CProgramming2074',
      link: '/c2074',
    },
    {
      name: 'CProgramming2075',
      link: '/c2075',
    },
    {
      name: 'CProgramming2077',
      link: '/c2077',
    },
    {
      name: 'CProgramming2078',
      link: '/c2078',
    },
    {
      name: 'CProgramming2079',
      link: '/c2079',
    },
   
  ],
  link: 'https://example.com/subject-2',
},
{
  name: 'Digital Logic',
  year: 1,
  semester: 'first',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    }
    ,
  ],
  link: 'https://example.com/subject-2',
},

{
  name: 'Mathematics I',
  year: 1,
  semester: 'first',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
  ],
  link: 'https://youtube.com',
},

{
  name: 'Physics',
  year: 1,
  semester: 'first',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
  ],
  link: 'https://example.com/subject-2',
},
{
  name: 'Discrete Structure',
  year: 1,
  semester: 'second',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
  ],
  link: 'https://example.com/subject-2',
},
{
  name: 'Object-Oriented Programming',
  year: 1,
  semester: 'second',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
  ],
  link: 'https://example.com/subject-2',
},
{
  name: 'Microprocessor',
  year: 1,
  semester: 'second',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
  ],
  link: 'https://example.com/subject-2',
},

{
  name: 'Statistics I',
  year: 1,
  semester: 'second',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
  ],
  link: 'https://example.com/subject-2',
},

{
  name: 'Mathematics II',
  year: 1,
  semester: 'second',
  topics: [
    {
      name: 'Topic 3',
      link: 'https://example.com/topic-3',
    },
    {
      name: 'Topic 4',
      link: 'https://example.com/topic-4',
    },
  ],
  link: 'https://example.com/subject-2',
},


];

const SubjectList = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bsc CSIT Subject Notes</h1>
      <table className="table-auto border rounded-lg overflow-hidden shadow-lg mx-auto">
        <thead className="bg-gray-200 uppercase text-sm text-gray-600 font-bold">
          <tr>
            <th className="py-3 px-4 text-left">Subject Name</th>
            <th className="py-3 px-4 text-left">Year</th>
            <th className="py-3 px-4 text-left">Semester</th>
            <th className="py-3 px-4 text-left">Topics</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-medium">
          {subjects.map((subject, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-4">
                <a href={subject.link}>{subject.name}</a>
              </td>
              <td className="py-3 px-4">{subject.year}</td>
              <td className="py-3 px-4">{subject.semester}</td>
              <td className="py-3 px-4">
                {subject.topics.map((topic, index) => (
                  <div key={index}>
                    <a href={topic.link}>{topic.name}</a>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;
