import React from "react";
import Grid from "../components/Grid/Grid";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Ui/Pagination";

const Home = () => {
  return (
    <>
      <Tags />
      <Grid />
      <Pagination />
    </>
  );
};

export default Home;
