/* eslint-disable no-unused-vars */
import React from 'react'
import useStore from './store/ZustandStore'

function Home() {
    const count = useStore((state) => state.count)


    return (
        <div className='w-full flex items-center flex-col font-bold'>
            <h1>This is the Home Page</h1>
            <h1 className='text-4xl'>Intro to zustand</h1>
            <h2 className='text-2xl text-gray-700  m-3'>Count: {count} </h2>

            <div className='flex justify-between w-full px-3'>
                <button
                    onClick={useStore((state) => state.increment)}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Increment
                </button>
                
                <button
                    onClick={useStore((state) => state.reset)}
                    className='bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'
                >
                    Reset
                </button>
                <button
                    onClick={useStore((state) => state.decrement)}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Home;