export default function Pricing() {
  return (
    <div className="container mb-12">
      <div className="flex flex-col items-center w-full text-white pt-4 pb-4">
        <h1 className="text-2xl py-4">Pricing & Plans</h1>
        <h1 className="text-4xl pb-4">Choose Your Plan</h1>
        <p className="px-[400px] pb-4 text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus recusandae nisi, cum illo exercitationem repudiandae velit nam illum corrupti voluptatem!</p>
      </div>
      {/* Price card */}
      <div className="flex gap-8 items-center">
        <div className="border-gray-500  border divide-y divide-gray-200 max-w-xl mt-20">
          <div className="p-6">
            <div className="">
              <h2 className="text-lg font-semibold text-white">Hourly</h2>
            </div>
            <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, possimus.</p>
          </div>
          <div className="px-6 pt-6 pb-8">
            <h3 className="text-sm font-medium text-white">Whats included?</h3>
            <ul role="list" className="mt-6 space-y-4">
              {["5 workspaces", "Unlimited testimonials", "10 collection forms", "20 embeddable widgets", "White labeled widgets and forms", "Custom branding (logo, colors, etc...)", "2 members per workspace"].map((item, index) => (
                <li key={index} className="flex space-x-3">
                  <div className="flex justify-center items-center rounded-full bg-blue-500 h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3 flex-shrink-0 ">
                      <path fillRule="evenodd" d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* price */}
          <div className="py-4 px-8">
            <p className="text-white">
              <span className="text-4xl font-bold tracking-tight ">$29</span>
              <span className="text-base font-medium ">/Hours</span>
            </p>
          </div>
          {/* button */}
          <div className="pt-8 px-8 mb-8">
            <button className="bg-[#4b7dca] text-white font-size-md w-full py-4 px-4 rounded-full  items-center transition ease-in duration-300 hover:outline outline-1 hover:outline-gray-400 hover:bg-transparent ">SELECT PLAN</button>
          </div>
        </div>
        <div className="border-gray-500  border divide-y divide-gray-200  max-w-md mt-20">
          <div className="p-6">
            <div className="">
              <h2 className="text-lg font-semibold text-white">Freelance</h2>
            </div>
            <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, possimus.</p>
          </div>
          <div className="px-6 pt-6 pb-8">
            <h3 className="text-sm font-medium text-white">Whats included?</h3>
            <ul role="list" className="mt-6 space-y-4">
              {["5 workspaces", "Unlimited testimonials", "10 collection forms", "20 embeddable widgets", "White labeled widgets and forms", "Custom branding (logo, colors, etc...)", "2 members per workspace"].map((item, index) => (
                <li key={index} className="flex space-x-3">
                  <div className="flex justify-center items-center rounded-full bg-blue-500 h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3 flex-shrink-0 ">
                      <path fillRule="evenodd" d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* price */}
          <div className="py-4 px-8">
            <p className="text-white">
              <span className="text-4xl font-bold tracking-tight ">$369</span>
              <span className="text-base font-medium ">/Weeks</span>
            </p>
          </div>
          {/* button */}
          <div className="pt-8 px-8 mb-8">
            <button className="bg-[#4b7dca] text-white font-size-md w-full py-4 px-4 rounded-full  items-center transition ease-in duration-300 hover:outline outline-1 hover:outline-gray-400 hover:bg-transparent ">SELECT PLAN</button>
          </div>
        </div>
        <div className="border-gray-500  border divide-y divide-gray-200  max-w-md mt-20">
          <div className="p-6">
            <div className="">
              <h2 className="text-lg font-semibold text-white">Full Time</h2>
            </div>
            <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, possimus.</p>
          </div>
          <div className="px-6 pt-6 pb-8">
            <h3 className="text-sm font-medium text-white">Whats included?</h3>
            <ul role="list" className="mt-6 space-y-4">
              {["5 workspaces", "Unlimited testimonials", "10 collection forms", "20 embeddable widgets", "White labeled widgets and forms", "Custom branding (logo, colors, etc...)", "2 members per workspace"].map((item, index) => (
                <li key={index} className="flex space-x-3">
                  <div className="flex justify-center items-center rounded-full bg-blue-500 h-5 w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3 flex-shrink-0 ">
                      <path fillRule="evenodd" d="M20.707 5.293a1 1 0 010 1.414l-11 11a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 15.586 19.293 5.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* price */}
          <div className="py-4 px-8">
            <p className="text-white">
              <span className="text-4xl font-bold tracking-tight ">$1299</span>
              <span className="text-base font-medium ">/Month</span>
            </p>
          </div>
          {/* button */}
          <div className="pt-8 px-8 mb-8">
            <button className="bg-[#4b7dca] text-white font-size-md w-full py-4 px-4 rounded-full  items-center transition ease-in duration-300 hover:outline outline-1 hover:outline-gray-400 hover:bg-transparent ">SELECT PLAN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
