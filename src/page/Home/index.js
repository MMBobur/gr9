import React from 'react'

import Navbar from "./../../components/navbar";
import Banner from "./../../components/banner";
import Robotics from "../../components/robotics";
import Globally from "./../../components/globally";
import Latest from "./../../components/latest";
import Footer from "./../../components/footer";

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Robotics/>
      <Globally/>
      <Latest/>
      <Footer/>
    </div>
  )
}

export default Home