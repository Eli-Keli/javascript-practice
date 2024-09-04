/* eslint-disable no-unused-vars */
import React from 'react'

function App() {
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold text-center'>Styling React JS app using Tailwind CSS</h1>
      {/* Exercise 1: Implement a card component using Tailwind CSS utility classes. The card should have a light gray background, rounded corners, and a box shadow. The card should contain a title, description, and a button. */}
      <div className='mt-8 max-w-sm mx-auto'>
        <div className='bg-gray-200 rounded-lg shadow-md p-4'>
          <h2 className='text-xl font-semibold'>Card Title</h2>
          <p className='text-gray-600'>Card Description</p>
          <button className='mt-4 py-2 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Button</button>
        </div>
      </div>
      {/* Exercise 2: Responsive Typography
      Adjust font sizes for different screen sizes using Tailwind CSS viewport units. The font size should be 16px on small screens and 20px on medium screens and above. */}
      <div className='mt-8'>
        <h1 className='text-3xl font-bold'>Responsive Typography</h1>
        <p className='text-sm sm:text-base md:text-lg'>This text has a small font size on small screens, a base font size on medium screens, and a larger font size on large screens.</p>
      </div>
      {/* Exercise 3: Creating a Responsive Layout
      Create a simple responsive layout using Tailwind CSS utility classes. The layout should include a header, main content area, and a footer. The header and footer should be full-width and have a different background color. The main content area should be centered and have a max-width of 960px. */}
      <div className='container mx-auto mt-10 max-w-960'>
        <header className='bg-gray-500 text-white py-4'>
          <h1 className='text-xl font-bold'>Responsive Layout</h1>
        </header>
        <main className='mt-8'>
          <h2 className='text-2xl font-semibold'>Main Content Area</h2>
          <p>This is the main content area of the responsive layout.</p>
        </main>
        <footer className='bg-gray-800 text-white py-4'>
          <p>Footer</p>
        </footer>
      </div>
    </div>
  )
}

export default App