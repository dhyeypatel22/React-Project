import React from 'react'

function Contact() {
  return (
    <>
    <section className="text-gray-400 bg-white body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7164881380495!2d72.5150885740211!3d23.07085341452723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c29884010540d%3A0x95faaaf3d37653e7!2s7Span!5e0!3m2!1sen!2sin!4v1682313607582!5m2!1sen!2sin"
        // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
      />
      <div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
          201, Isquare Corporate Park, Science City Rd, Science City, Panchamrut Bunglows II, Sola, Ahmedabad, Gujarat 380060
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">
            EMAIL
          </h2>
          <a href='#!' className="text-indigo-400 leading-relaxed">dhyey@email.com</a>
          <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-black text-3xl mb-1 font-medium title-font">
        Feedback
      </h2>
      <form 
      action="https://formsubmit.co/dhyeypatel2209@gmail.com"
      method='POST'
      >
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-mm text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name" 
          required="" 
          className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-mm text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email" 
          required=""
          className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-mm text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required=""
          className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg mx-auto">
       Submit
      </button>
      </form>
    </div>
  </div>
</section>


    </>
  )
}
export default Contact