import React from 'react'

function Hero() {
  return (
    <>
    {/* Container for demo purpose */}
    <div>
      {/* Section: Design Block */}
      <section className="mb-40">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/142.jpg")',
            height: 500
          }}
        />
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center text-gray-800">
            <div
              className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
              style={{
                marginTop: "-170px",
                background: "hsla(0, 0%, 100%, 0.7)",
                backdropFilter: "blur(30px)"
              }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                The best offer on the market <br />
                <span className="text-blue-600">for your business</span>
              </h1>
              <a
                className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="/projects"
                role="button"
              >
                Get started
              </a>
              <a
                className="inline-block px-7 py-3 text-black font-medium text-sm leading-snug bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-300 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="/details"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
   

  <div className="container my-24 px-6 mx-auto">
   
    <section className="mb-32 text-gray-800">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      .zoom:hover img {\n        transform: scale(1.1);\n      }\n    "
        }}
      />
      <div className="grid lg:grid-cols-3 gap-6">
        <div
          className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
            className="w-full transition duration-300 ease-linear align-middle"
            alt='not found'
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-start items-end h-full">
                <h5 className="text-lg font-bold text-white m-6">
                  Hollywood exhibition
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
              />
            </div>
          </a>
        </div>
        <div
          className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
            className="w-full transition duration-300 ease-linear align-middle"
            alt='not found'
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-start items-end h-full">
                <h5 className="text-lg font-bold text-white m-6">
                  Genius Loci
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
              />
            </div>
          </a>
        </div>
        <div
          className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/045.jpg"
            className="w-full transition duration-300 ease-linear align-middle"
            alt='not found'
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-start items-end h-full">
                <h5 className="text-lg font-bold text-white m-6">Big Apple</h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
              />
            </div>
          </a>
        </div>
        <div
          className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
            className="w-full transition duration-300 ease-linear align-middle"
            alt='not found'
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-start items-end h-full">
                <h5 className="text-lg font-bold text-white m-6">Sun City</h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
              />
            </div>
          </a>
        </div>
        <div
          className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/048.jpg"
            className="w-full transition duration-300 ease-linear align-middle"
            alt='not found'
          />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-start items-end h-full">
                <h5 className="text-lg font-bold text-white m-6">
                  Paris flavor
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
              />
            </div>
          </a>
        </div>
        <div
          className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
          style={{ backgroundPosition: "50%" }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/049.jpg"
            className="w-full transition duration-300 ease-linear align-middle"
            alt='not found'
          />
          <a href="/#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex justify-start items-end h-full">
                <h5 className="text-lg font-bold text-white m-6">
                  Sky is the limit
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}

  {/* Container for demo purpose */}
  <div className="container my-24 px-6 mx-auto">
    {/* Section: Design Block */}
    <section className="mb-32 text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-12 pb-4 text-center">
        Projects we are proud of
      </h2>
      <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
        <div className="mb-6 lg:mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                  className="w-full"
                  alt='not found'
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-bold text-lg mb-3">White city</h5>
              <p className="mb-4 pb-2">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="mb-6 lg:mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                  className="w-full"
                  alt='not found'
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-bold text-lg mb-3">A lonely bench</h5>
              <p className="mb-4 pb-2">
                Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
                orci, nec ornare metus semper sed. Integer volutpat ornare erat
                sit amet rutrum.
              </p>
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="mb-0">
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                  className="w-full"
                  alt='not found'
                />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h5 className="font-bold text-lg mb-3">Happy snow</h5>
              <p className="mb-4 pb-2">
                Curabitur tristique, mi a mollis sagittis, metus felis mattis
                arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                massa volutpat feugiat. Donec.
              </p>
              <a
                href="/video"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  {/* Container for demo purpose */}
</>

  
  )
}
export default Hero