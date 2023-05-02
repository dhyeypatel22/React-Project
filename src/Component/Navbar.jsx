import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (

    <>
  
  <nav
    className="fixed top-0 left-0 z-50 w-full flex items-center justify-between bg-gray-900 py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4"
    data-te-navbar-ref=""
  >
    <div className="flex w-full flex-wrap items-center justify-between px-3">
    
     
      <div
        className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent4"
        data-te-collapse-item=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">


          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item=""
          >
          </div>
          <NavLink
  className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
  to="/admin"
  id="dropdownMenuButton2"
  role="button"
  data-te-dropdown-toggle-ref=""
  aria-expanded="false"
>
  <img
    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
    className="w-6 h-6 rounded-full shadow-lg mt-1 mr-2"
    alt="Avatar"
  />
</NavLink>
 
          
          {/* <div>
            <NavLink class="inline-block text-sm px-4 py-2 leading-none border    rounded text-white hover:bg-orange-600  lg:mt-0 ml-9" to="/signup">Sign In</NavLink>
          </div> */}
        </div>
        
        
          
         
        </div>
      </div>
    
  </nav>
</>

  )
}
