import React from 'react';

function QAComponent({ data }) {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {data.map((item, index) => (
            <div className="border-t border-gray-200 pt-8 flex flex-wrap items-center justify-between" key={index}>
              <div className="flex items-center">
                <div className="text-blue-600 font-medium mb-2 mr-4">Subject: {item.subject}</div>
                <div className="text-green-600 font-medium mb-2 mr-4">Year: {item.year}</div>
                <div className="text-purple-600 font-medium mb-2 mr-4">Semester: {item.semester}</div>
                <div className="text-red-600 font-medium mb-2">Previously asked in: {item.previouslyAskedIn}</div>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg leading-6 font-medium text-gray-900 hover:text-blue-600 transition duration-200 ease-in-out">{item.question}</dt>
                <dd className="mt-2 text-base text-gray-500 font-light hover:text-gray-700 transition duration-200 ease-in-out">{item.answer}</dd>
                <table className="table-auto mt-4">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Side 1</th>
                      <th className="px-4 py-2">Side 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">{item.side1}</td>
                      <td className="border px-4 py-2">{item.side2}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4">
                  <img src={item.imageUrl} alt="related image" />
                </div>
                <div className="mt-4">
                  <ul className="list-disc list-inside">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QAComponent;
