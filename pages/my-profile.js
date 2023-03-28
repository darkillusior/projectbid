import React from 'react'
import Navbar from '../components/Navbar'

function Profile  () {
  return (
    <>
    
<main class="profile-page">
  <Navbar />
  {/* <section class="relative block h-500-px">
    <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)"}}>
      <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section> */}
  <section class="relative bg-blueGray-200">
    <div class="container-m px-4">
      <div class="flex flex-col min-w-0 break-words bg-transparent w-full mb-6  rounded-lg ">
        <div class="px-6">
          <div class="flex flex-wrap  items-center justify-center">
            <div class="w-1/6 lg:w-1/6  lg:order-2 flex justify-center relative -mt-16">
             
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full  border-none w-42 h-42" />
            
            </div>
            <div class="w-full lg:w-4/12 px-4 flex items-center justify-center mt-5 sm:mt-0 lg:mt-0 lg:order-3 lg:text-right lg:self-center">
              <div class="py-6 px-3 mt-32 sm:mt-0 !important">
                <button class="bg-pink-500 active:bg-pink-600 uppercase text-blue-200 font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Connect
                </button>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-1">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blue-200">22</span><span class="text-sm text-blue-200">Friends</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blue-200">10</span><span class="text-sm text-blue-200">Project</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide text-blue-200">89</span><span class="text-sm text-blue-200">Review</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blue-200 mb-2">
              Jenna Stones
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blue-200 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blue-200"></i>
              Los Angeles, California
            </div>
            <div class="mb-2 text-blue-200 mt-10">
              <i class="fas fa-briefcase mr-2 text-lg text-blue-200"></i>Solution Manager - Creative Tim Officer
            </div>
            <div class="mb-2 text-blue-200">
              <i class="fas fa-university mr-2 text-lg text-blue-200"></i>University of Computer Science
            </div>
          </div>
          <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-blue-200">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An
                  artist of considerable range.
                </p>
                <a href="#pablo" class="font-normal text-pink-500">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> */}
  </section>
</main>
    </>
  )
}

export default Profile