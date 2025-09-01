import React from 'react'

const BrowseContent = () => {
    return (
        <div className="pt-24 px-10 bg-black text-white flex flex-row items-center justify-center">
            <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className='text-2xl font-bold'>What would you like to watch today?</h2>
                <div className='flex gap-4'>
                    <input type="text" placeholder='Search for a movie or a show' className='bg-gray-800 p-2 rounded-md' />
                    <button className='bg-red-600 text-white p-2 rounded-md'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default BrowseContent