import React from 'react'
import ImageSlider from "./ImageSlider/ImageSlider"
import Review from './review/review'

const main = () => {
  return (
    <div>
     <div className='w-200 relative top-40 pl-30'>
       <h1 className="text-8xl font-semibold">Fresh Greens</h1>
       <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <a 
          href="#" 
          role="button"
          aria-label="View References"
          className="py-3 px-4 mx-3 rounded-md border relative top-7 right-3"
        >
          Explore
        </a>

     </div>

     <div className="relative left-100 bottom-50">
      <ImageSlider />
     </div>

     <div className="relative bottom-95 left-30">
      <Review />
     </div>
    </div>
  )
}

export default main
