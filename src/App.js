import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Nav } from "./components/nav";
import { ErrorBoundary } from "./ErrorBoundary";
import { AllShows } from "./pages/allShows";
import { SingleShow } from "./pages/singleShow";

const App = () => {
  return (
    <ErrorBoundary>
      <Nav />
      <div className="p-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllShows />} />
            <Route path="/show/:id" element={<SingleShow />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
