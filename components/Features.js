import React from 'react'

export default function Features() {
  return (
    <div className="container flex flex-wrap p-8  xl:px-0 lg:gap-10 lg:flex-nowrap" style={{width: "100%"}}>
    <div className="flex items-center justify-center relative w-full lg:w-1/2 hover:" style={{width: "500px", height: "500px"}}>
        <div>
            <img 
          alt="Benefits" src="https://web3templates.com/img/assets/feature-illustration.png" loading="lazy" />
        </div>
    </div>
    <div className="flex flex-wrap items-center w-full lg:w-1/2">
        <div>
            <div className="flex flex-col w-full mt-4">
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl dark:text-white">Highlight your benefits</h3>
                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-300 lg:text-xl xl:text-xl dark:text-gray-300">Our project bidding platform offers a range of benefits to help streamline your project management process, including:</p>
            </div>
            <div className="w-full mt-5">
                <div className="flex items-start mt-8 space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-indigo-50">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-white dark:text-gray-200">Seamless user experience</h4>
                        <p className="mt-1 text-gray-300 dark:text-gray-400">Then explain the first point breifly in one or two lines.</p>
                    </div>
                </div>
                <div className="flex items-start mt-8 space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-indigo-50">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-white dark:text-gray-200">Quality source code</h4>
                        <p className="mt-1 text-gray-300 dark:text-gray-400">Here you can add the next benefit point.</p>
                    </div>
                </div>
                <div className="flex items-start mt-8 space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-indigo-50">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-white dark:text-gray-200">High performance</h4>
                        <p className="mt-1 text-gray-300 dark:text-gray-400">This will be your last bullet point in this section.</p>
                    </div>
                </div>
                <div className="flex items-start mt-8 space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-indigo-50">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium text-white dark:text-gray-200">Affordable rates</h4>
                        <p className="mt-1 text-gray-300 dark:text-gray-400">This will be your last bullet point in this section.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
