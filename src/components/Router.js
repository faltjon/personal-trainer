import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Customerlist from "./Customerlist";
import NotFound from "./NotFound";
import Traininglist from "./Traininglist";

    function Router() {

  
  return (
    <div>
    <h1> Personal trainer  </h1>
    <BrowserRouter>
    <Link to="customers">Customers</Link>{' '}
    <Link to="trainings">Trainings</Link>{' '}
    <Routes>
        <Route exact path="/" element={<Customerlist  />} />
        <Route path="/trainings" element={<Traininglist   />} />
        <Route path="/customers" element={<Customerlist />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default Router;