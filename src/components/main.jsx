import React from 'react'
import ImageSlider from "./ImageSlider/ImageSlider"
import Review from './review/review'

const main = () => {
  return (
    <div>
     <div className='w-200 relative top-40 pl-30'>
       <h1 className="text-8xl font-bold opacity-75">Fresh Greens</h1>
       <p className="opacity-75 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <a 
          href="#" 
          role="button"
          aria-label="View References"
          className="py-3 px-10 mx-3 rounded-md border relative top-7 right-3"
        >
          Explore
        </a>

     </div>

     <div className="absolute left-240 bottom-0">
      <ImageSlider />
     </div>

     <div className="absolute bottom-0 left-30">
      <Review />
     </div>
    </div>
  )
}

export default main
