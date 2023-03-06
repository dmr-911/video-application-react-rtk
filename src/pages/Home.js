import React from "react";
import Footer from "../components/Footer";
import Grid from "../components/Grid/Grid";
import VideoGridItem from "../components/Grid/VideoGridItem";
import Navbar from "../components/Navbar/Navbar";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Ui/Pagination";

const Home = () => {
  return (
    <>
      <Navbar />
      <Tags />
      <Grid />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
