import React from 'react';

const Statistic = () => {
    return (
        <div className="flex justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            
            <div className="w-full sm:w-1/4 md:w-1/4 mb-4 sm:mb-0" data-aos="zoom-in" data-aos-delay={100}>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-400  to-blue-500 rounded-lg shadow-md border-2 border-purple-600 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition duration-300 ease-in-out">
                    <div className="text-2xl sm:text-4xl text-white mb-4">
                        <i className="bi bi-briefcase" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        <a href="/" className="hover:text-gray-900 transition duration-300 ease-in-out">
                            100%
                        </a>
                    </h4>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                        We have 100% client satisfaction level.
                    </p>
                </div>
            </div>

            <div className="w-full sm:w-1/4 md:w-1/4 mb-4 sm:mb-0" data-aos="zoom-in" data-aos-delay={100}>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-400  to-blue-500 rounded-lg shadow-md border-2 border-purple-600 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition duration-300 ease-in-out">
                    <div className="text-2xl sm:text-4xl text-white mb-4">
                        <i className="bi bi-briefcase" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        <a href="/" className="hover:text-gray-900 transition duration-300 ease-in-out">
                        280%                        </a>
                    </h4>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                    We have a massive growth rate of 280%.

</p>
                </div>
            </div>

            <div className="w-full sm:w-1/4 md:w-1/4 mb-4 sm:mb-0" data-aos="zoom-in" data-aos-delay={100}>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-400  to-blue-500 rounded-lg shadow-md border-2 border-purple-600 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition duration-300 ease-in-out">
                    <div className="text-2xl sm:text-4xl text-white mb-4">
                        <i className="bi bi-briefcase" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        <a href="/" className="hover:text-gray-900 transition duration-300 ease-in-out">
                        No.1
                        </a>
                    </h4>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                    We are No.1 marketing Agency across Nepal

</p>
                </div>
            </div>

            <div className="w-full sm:w-1/4 md:w-1/4 mb-4 sm:mb-0" >
                <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-400  to-blue-500 rounded-lg shadow-md border-2 border-purple-600 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 transition duration-300 ease-in-out">
                    <div className="text-2xl sm:text-4xl text-white mb-4">
                        <i className="bi bi-briefcase" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                        <a href="/" className="hover:text-gray-900 transition duration-300 ease-in-out">
5.0                        </a>
                    </h4>
                    <p className="text-sm sm:text-base text-gray-200 font-medium">
                    we have rating of 5 star

</p>
                </div>
            </div>
{/* finish */}
        </div>
    );
};

export default Statistic