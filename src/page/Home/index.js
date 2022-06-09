import React from 'react'

import Navbar from "./../../components/Navbar";
import Banner from "./../../components/banner";
import Travor from "./../../components/travor";
import Some from "./../../components/some";
import Purchase from "./../../components/purchase";
import Courses from "./../../components/courses";
import Download from "./../../components/download";
import Readers from "./../../components/readers";
import Footer from "./../../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Travor />
      <Some />
      <Purchase />
      <Courses />
      <Download />
      <Readers />
      <Footer />
    </div>
  )
}

export default Home