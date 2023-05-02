import React from 'react'

function Admin() {
  return (
    <>
    {/* Team Section: Circle Photos With Title */}
    <div className="bg-white">
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-700">
            Reel People
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Meet our talented team
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            They are working nonstop behind the scenes to help you build better products, web services and websites.
          </h3>
        </div>
        {/* END Heading */}

        {/* Team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center">
          <div>
            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
              <img 
              src="https://www.mangobollywood.com/wp-content/uploads/2019/07/64379033.jpg" 
              alt="..." className="inline-block w-28 h-28 rounded-full" />
            </span>
            <h4 className="text-xl font-semibold mb-1">
              Babu Rao
            </h4>
            <p className="text-gray-600 font-medium">
              Founder &amp; CEO
            </p>
          </div>
          <div>
            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
              <img src="https://im.idiva.com/content/2014/Sep/akshay_kumar11.jpg"
              alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
            </span>
            <h4 className="text-xl font-semibold mb-1">
              Raju Japan
            </h4>
            <p className="text-gray-600 font-medium">
              Product Design
            </p>
          </div>
          <div>
            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
              <img src="https://images.saymedia-content.com/.image/t_share/MTc2Mjk1MjMxNjE0OTUyNjIx/list-of-indian-comedy-films.jpg" 
              alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
            </span>
            <h4 className="text-xl font-semibold mb-1">
              Chatur Da
            </h4>
            <p className="text-gray-600 font-medium">
              Web Developer
            </p>
          </div>
          <div>
            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
              <img src="https://www.scrolldroll.com/wp-content/uploads/2021/01/Rajpal-Yadav-painted-red-funny-image-Bhool-Bhulaiyaa.jpg" 
              alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
            </span>
            <h4 className="text-xl font-semibold mb-1">
              Chhota Pandit
            </h4>
            <p className="text-gray-600 font-medium">
              Marketing
            </p>
          </div>
          <div>
            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
              <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/03/dilip-joshi-jethalal-1678071122.jpg" 
              alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
            </span>
            <h4 className="text-xl font-semibold mb-1">
              Jethalal Gada
            </h4>
            <p className="text-gray-600 font-medium">
              Support Specialist
            </p>
          </div>
          <div>
            <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5">
              <img src="https://mumbaimirror.indiatimes.com/photo/77524570.cms" 
              alt="User Avatar" className="inline-block w-28 h-28 rounded-full" />
            </span>
            <h4 className="text-xl font-semibold mb-1">
              Johnny Walker
            </h4>
            <p className="text-gray-600 font-medium">
              Web Developer
            </p>
          </div>
        </div>
        {/* END Team */}
      </div>
    </div>
    {/* END Team Section: Circle Photos With Title */}
  </>
  )
}
export default Admin