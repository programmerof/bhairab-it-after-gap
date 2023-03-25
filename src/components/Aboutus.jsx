import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <section className="bg-gray-100 py-16 lg:py-24">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center h-full">
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl shadow-md hover:shadow-lg transition duration-300">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-24 w-full object-contain md:h-full md:w-48"
            src="https://previews.123rf.com/images/alexwhite/alexwhite1804/alexwhite180400315/99787816-about-us-flat-design-orange-round-vector-icon-in-eps-10.jpg"
            alt="Image description"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
            ABOUT BHAIRAB ICT SOLUTION
          </div>
          <p className="mt-2 text-gray-500 text-center">
            Our mission is to help businesses succeed by providing the most
            impactful and creative marketing services.
          </p>
          <h1 className="mb-0 mt-2 text-indigo-500 font-semibold text-center">
            
            Why Work With Us
          </h1>
          <ul className="mt-4 text-gray-500 list-disc list-inside text-center">
            <li>
              When we partner with clients, big things happen; faster sales,
              higher engagement and solid ROI.
            </li>
          </ul>
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg shadow-md hover:shadow-lg active:bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Aboutus