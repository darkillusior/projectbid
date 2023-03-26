import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div id="section1" className="home">
       <div className="row">
     <div className="column1">
       <h1>Find your Dream Project</h1>
       <p>explore for best responsive web project to grow your business!</p>
      <Link href="/project"> <button>Explore</button></Link>
     </div>
     <div className="column2">
       <img src="https://www.hmablogs.com/wp-content/uploads/2022/06/banner-img.png" alt="banner" width="500px" />
     </div>
   </div>
    </div>
  )
}

export default Home