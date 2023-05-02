import React from 'react'

function Admin() {
  return (
    <>
       <div className="bg-gray-100">
  <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <div className="space-y-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0">
      <div className="aspect-w-3 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-4">
        <img
          className="object-cover h-full w-full"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          alt="not found"
        />
      </div>
      <div className="sm:col-span-2">
        <div className="space-y-4">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h1 className="text-2xl font-bold">Aadu Malu</h1>
            <p className="text-gray-500">Web Developer</p>
          </div>
          <div className="text-lg">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod consectetur orci, nec sodales dolor vehicula vel.
              Vestibulum mattis metus sed elit ultricies, in sodales velit
              rhoncus. Praesent a quam elementum, dignissim augue et, fermentum
              erat. Donec dapibus sed sapien in sagittis. Duis imperdiet ipsum
              sapien, hendrerit placerat velit lacinia vel.
            </p>
          </div>
          <ul className="flex space-x-5">
            <li>
              <a className="text-gray-500 hover:text-black" href="/#">
                Twitter
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-black" href="/#">
                GitHub
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-black" href="/#">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img
    src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
    className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre"
  />
</div>

    </>
  )
}
export default Admin