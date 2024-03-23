"use client";
import React, { useEffect, useState } from 'react'
import Sidebar from './Components/Sidebar'
import PostCard from './Components/PostCard'
import ImageDescriptionCard from './Components/ImageDescriptionCard'

// const MainLayout = () => {
//   return (
//     <>
//     <div className='h-screen flex flex-row justify-start'>
//         <Sidebar/>
//         <div className='w-full flex flex-row justify-start  text-white '>
//             <div className='bg-slate-400 w-full sm:w-2/3 p-8'>
//             Discussion Fourum
//             <PostCard/>
//             <PostCard/>
//             <PostCard/>
           
//             </div>
//             <div className=' bg-slate-800 hidden sm:block p-10 '>Market Stories
//             <ImageDescriptionCard
//               imageUrl="/noavatar.png"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//             />
//              <ImageDescriptionCard
//               imageUrl="/noavatar.png"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//             />
            
//             </div>
//         </div>    
//     </div>
//     </>
//   )
// }

// export default MainLayout

// import React, { useState, useEffect } from 'react';
// import Sidebar from './Components/Sidebar';
// import PostCard from './Components/PostCard';
// import ImageDescriptionCard from './Components/ImageDescriptionCard';

const MainLayout = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [onlyImageDesc , setOnlyImageDesc] =useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint according to your needs
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleImageDescription = ()=>{
    setOnlyImageDesc(!onlyImageDesc);
  }
  return (
    <>
      <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        <div className='w-full flex flex-row justify-start text-white'>
          {!onlyImageDesc &&<div className='bg-slate-400 w-full sm:w-2/3 p-8'>
           <button>Discussion</button>
           {isSmallScreen&&<button onClick={handleImageDescription}>MarketStories</button>}
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
         }
          {/* Conditionally render this div based on screen size */}
          {!isSmallScreen  &&(
            <div className='bg-slate-800 w-1/3 p-10'>
              Market Stories
              <ImageDescriptionCard
                imageUrl="/about.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <ImageDescriptionCard
                imageUrl="/about.png"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          )}

       
      
        </div>
      </div>
    </>
  );
};

export default MainLayout;
