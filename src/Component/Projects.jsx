import React from 'react'

export default function Projects() {
  return (
    <>
    <>
  {/* Container for demo purpose */}
  <div className="container my-24 px-6 mx-auto">
    {/* Section: Design Block */}
    <section className="mb-32 text-gray-800 text-center lg:text-left">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Projects we are proud of
      </h2>
      <div className="grid lg:grid-cols-3 gap-x-6 lg:gap-x-12">
        <div
          className="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <div className="relative overflow-hidden bg-no-repeat bg-cover">
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
              className="w-full rounded-t-lg"
              alt='not found'
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={{ left: 0, bottom: 0 }}
            >
              <path
                fill="#fff"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">Nostalgic waves</h5>
            <p className="mb-4 pb-2">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/114.jpg"
              className="w-full rounded-t-lg"
              alt='not found'
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={{ left: 0, bottom: 0 }}
            >
              <path
                fill="#fff"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">Dhruvil</h5>
            <p className="mb-4 pb-2">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
            </p>
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="bg-white block rounded-lg shadow-lg">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/117.jpg"
              className="w-full rounded-t-lg"
              alt='not found'
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
            <svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style={{ left: 0, bottom: 0 }}
            >
              <path
                fill="#fff"
                d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">Camping travel</h5>
            <p className="mb-4 pb-2">
              Curabitur tristique, mi a mollis sagittis, metus felis mattis
              arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
              volutpat feugiat.
            </p>
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src="https://mdbootstrap.com/img/new/standard/city/045.jpg"
        />

        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="https://mdbootstrap.com/img/new/standard/city/048.jpg"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="https://mdbootstrap.com/img/new/standard/city/049.jpg"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="https://images.unsplash.com/photo-1628269797471-dab1d8191a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWhtZWRhYmFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Apdu Amdavad
          </h2>
          <p className="mt-1">$120.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='#!' className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src="https://c1.wallpaperflare.com/preview/665/212/952/rajiv-gandhi-bandra-worli-sea-link-mumbai.jpg"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Amchi Mumbai
          </h2>
          <p className="mt-1">$180.40</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
