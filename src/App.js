import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/nav";
import { AllShows } from "./pages/allShows";
import { SingleShow } from "./pages/singleShow";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AllShows />} />
        <Route path="/show/:id" element={<SingleShow />} />
      </Routes>
    </>
  );
};

export default App;
