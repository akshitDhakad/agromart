import React, { useState } from "react";
import Navbar from './Navbar'
import Header from './header'
import Coursel from './Coursel';
import Footer from './Footer';
import Main from './Main';
import Banner from './Banner';
import Certificates from './Certificates';

function Home() {
  const [bannerVisiablity, setbannerVisiablity] = useState(true);


  return (
    <div className="">
      {bannerVisiablity ? (
        <Banner
          bannerVisiablity={bannerVisiablity}
          setbannerVisiablity={setbannerVisiablity}
        />
      ) : null}

      <Navbar />
      <div className="w-[98%] m-auto">
        <Header />
        <Coursel />
        <Main />
        <Certificates />
      </div>
      <Footer />
    </div>
  );
}

export default Home