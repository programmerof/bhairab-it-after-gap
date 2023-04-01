import React from 'react';
import PortfolioItemDetails from './PortfolioItem'

function PortfolioItemDetails({ title, imgUrl, closeModal }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <div className="mt-2">
                            <img src={imgUrl} alt="portfolio" className="object-contain w-full h-full md:h-48" />
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>
   Close
</button>

            </div>
        </div>
    )
}

export default PortfolioItemDetails;