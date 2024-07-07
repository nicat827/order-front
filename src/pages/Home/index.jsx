import About from "../../components/Home/About";
import Arsenal from "../../components/Home/Arsenal";
import Hero from "../../components/Home/Hero";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Hero />
      <About />
      <Arsenal />
    </div>
  );
};

export default Home;
