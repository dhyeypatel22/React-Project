import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    
    <>
  
  <nav
    className="relative flex w-full flex-wrap items-center justify-between bg-gray-900 py-2 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start lg:py-4"
    data-te-navbar-ref=""
  >
    <div className="flex w-full flex-wrap items-center justify-between px-3">
    
     
      <div
        className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent4"
        data-te-collapse-item=""
      >
        
        <NavLink className="pr-2 text-4xl font-semibold text-white" to="/">
         Volcano🌋
        </NavLink>
        
        <ul
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
          data-te-navbar-nav-ref=""
        >
          
          <li className="my-4 lg:my-0 lg:pr-2 ml-3" data-te-nav-item-ref="">
            <NavLink
              className="text-white lg:px-2 [&.active]:text-green dark:[&.active]:text-orange-500"
              to="/"
              data-te-nav-link-ref=""
            >
              Home
            </NavLink>
          </li>
        
          <li className="my-4 lg:my-0 lg:pr-2 ml-3" data-te-nav-item-ref="">
            <NavLink
              className="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-orange-500"
              to="/projects"
              data-te-nav-link-ref=""
            >
              Projects
            </NavLink>
          </li>
          
          <li className="my-4 lg:my-0 lg:pr-2 ml-3" data-te-nav-item-ref="">
            <NavLink
              className=" text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-orange-500"
              to="/details"
              data-te-nav-link-ref=""
            >
              Details
            </NavLink>
          </li>
          <li className="my-4 lg:my-0 lg:pr-2 ml-3" data-te-nav-item-ref="">
            <NavLink
              className=" text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-orange-500"
              to="/contact"
              data-te-nav-link-ref=""
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
     
      <div className="relative flex items-center">
        
        <div className="relative ml-3" data-te-dropdown-ref="">
         
          <ul
            className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref=""
          >
          </ul>
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
