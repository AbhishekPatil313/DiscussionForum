"use client"
import classNames from 'classnames'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import { FaCommentDollar } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Sidebar = () => {
  const [toggleCollapse,setToggleCollapse] = useState(true);


  const wrapperClasses = classNames(
    'pt-9 h-screen  justify-between flex flex-col text-white',
    {
      ['w-80 bg-sky-950'] : !toggleCollapse,
     
       ['w-10 bg-gray-400'] : toggleCollapse,
    }
    )
    const collapseIconClasses = classNames(
      "p-4 rounded  absolute right-0",
      {
        ['h-10 bg-sky-950'] : toggleCollapse,
      }
      
    )
    const handleSidebarToggle = ()=>{
      setToggleCollapse(!toggleCollapse);
    }

  return (
    <div className={wrapperClasses}>
      <div className=' flex flex-col gap-2'>
        <div className={classNames("flex items-center mb-2 gap-5",{
            hidden : toggleCollapse,
          })}>
            <div className="w-12 h-12 rounded-full overflow-hidden ">
              {/* You can replace the src with your user's avatar image */}
              <img src="/noavatar.png" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <span>Hello , User !</span>
            <FaBell />
        </div>
        <hr/>
                <div className='flex items-center justify-between relative'>
          <div className=' flex items-center pl-1 gap-4'>
            <span
              className={classNames("ml-9 ",{
                hidden: toggleCollapse,
              })}
            >Market</span>
           
          </div>
       
          <button className={collapseIconClasses} onClick={handleSidebarToggle}>
          <FaAngleRight />
          </button>
         
        </div>
     
      <div className={classNames('flex flex-col justify-center mt-2 pl-10 gap-5',{
        hidden:toggleCollapse,
      })}>
          <div className='flex gap-5 '> <BiCommentDetail className='text-xl'/> 
          <span>Discussion Fourm</span>
          </div>
          <div className='flex gap-5'>
          <FaCommentDollar className='text-xl' />
          <span>Market Discussion</span>
          </div>
          <div>Sentiment</div>
          <div>Sector</div>
          <div>Watchlist</div>
          <div>Events</div>
          <div>News/Interviews  </div>
      </div>   
      </div>
    </div>
  )
}

export default Sidebar