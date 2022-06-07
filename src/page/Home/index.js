import React from 'react'

import Navbar from "./../../components/navbar";
import Banner from "./../../components/banner";
import Ratings from "./../../components/ratings";
import FarFar from "./../../components/farFar";
import Carusel from "./../../components/carusel";
import Latest from "./../../components/latest";
import Footer from "./../../components/footer";

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Ratings/>
      <FarFar/>
      <Carusel/>
      <Latest/>
      <Footer/>
    </div>
  )
}

export default Home