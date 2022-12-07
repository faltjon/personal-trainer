import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Customerlist from "./Customerlist";
import NotFound from "./NotFound";
import Traininglist from "./Traininglist";

function Router() {

    const [customers, setCustomers] = useState([]);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        
        getCustomers();
        getTrainings();
        
    }, []);

    const getCustomers = () => {

        fetch("https://customerrest.herokuapp.com/api/customers")
        .then((response) => response.json())
        .then((data) => setCustomers(data.content));
        
    };

    const getTrainings = () => {

        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then((response) => response.json())
        .then((data) => setTrainings(data));
        
    };

  
  return (
    <div>
    <h1> Customers and trainings </h1>
    <BrowserRouter>
    <Link to="customers">Customers</Link>{' '}
    <Link to="trainings">Trainings</Link>{' '}
    <Routes>
        <Route exact path="/" element={<Customerlist customers={customers} />} />
        <Route path="/trainings" element={<Traininglist trainings={trainings}  />} />
        <Route path="/customers" element={<Customerlist customers={customers}  />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default Router;