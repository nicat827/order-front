import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Heading from "../../components/Services/Heading";
import Shopping from "../../components/Services/Shopping";
import Wardrobe from "../../components/Services/Wardrobe";
import Photoshoot from "../../components/Services/Photoshoot";
import Event from "../../components/Services/Event";
import Persona from "../../components/Services/Persona";
import Capsule from "../../components/Services/Capsule";
import Contact from "../../components/Contact";
import axios from "axios";

const Services = () => {

  const [services,setServices] = useState([])
    async function getServices() {
        try {
          const res = await axios.get("https://order-back-44f875a7dfd3.herokuapp.com/services");
          setServices(res.data);
        }
        catch (e) {
          alert(e)
        }
        
      }
      useEffect(() => {
        getServices()
      }, [])
  return (
    <>
      <Helmet>
        <title>Pratto Style | My Services</title>
      </Helmet>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Heading />
        <Shopping services={services} />
        <Wardrobe services={services}/>
        <Photoshoot />
        <Event services={services}/>
        <Persona services={services}/>
        <Capsule />
        <Contact />
      </div>
    </>
  );
};

export default Services;