import React from "react";
import { Helmet } from "react-helmet";
import Contact from "../../components/Contact";

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Pratto Style | Contact Us</title>
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
        <Contact />
      </div>
    </>
  );
};

export default Contacts;
