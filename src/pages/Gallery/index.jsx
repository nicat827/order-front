import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Heading from "../../components/Gallery/Heading";

import Masonry from "@mui/lab/Masonry";

import "./index.scss";
import axios from "axios";


const Gallery = () => {
  const [photos, setPhotos] = useState([])
  async function getPhotos() {
    try {
      const res = await axios.get("https://order-back-44f875a7dfd3.herokuapp.com/gallery");
      setPhotos(res.data);
    }
    catch (e) {
      alert(e)
    }
    
  }

  useEffect(() => {
    getPhotos()
  }, [])
  return (
    <>
      <Helmet>
        <title>Pratto Style | Gallery</title>
      </Helmet>
      <div>
        <Heading />
        <section id="gallery">
          <div className="wrapper">
            <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
              {photos.map((photo, index) => (
                <div key={index}>
                  <img
                    src={photo.url}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                    }}
                  />
                </div>
              ))}
            </Masonry>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;