import React, {useState, useEffect} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { format } from 'date-fns'
import AddTraining from "./AddTraining";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Traininglist() {

    const [trainings, setTrainings] = useState([]);
    useEffect(() => {
        getTrainings();
    }, []);

    const getTrainings = () => {
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then((response) => response.json())
        .then((data) => setTrainings(data));
        
    };

    const addTraining = (training) => {
        console.log("addTrainingissä");
        fetch("https://customerrest.herokuapp.com/api/trainings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(training),
        }).then((response) => {
          if (response.ok) {
            getTrainings();
          }
        });
      };

      const deleteTraining = (id) => {
        console.log("DELETE FUNKTIO");
        if (window.confirm('Are you sure?')) {
            let link = "https://customerrest.herokuapp.com/api/trainings/" + id;
            fetch(link, { method: "DELETE" }).then((response) => {
                if (response.ok) {
                    getTrainings();
                }
            });
        }
      };

    const [columnDefs,] = useState([
        { headerName: "FName",
          width: 100,
          field: "customer.firstname" },
        {headerName: "LName",
          width: 100,
          field: "customer.lastname" },
        {field: 'date', sortable: true, filter: true,
         valueFormatter: params => format(new Date(params.value), "dd.MM.yyyy hh.mm") },
        { field: "duration", sortable: true, filter: true },
        { field: "activity", sortable: true, filter: true },
        {
            headerName: "",
            width: 100,
            field: "id",
            cellRenderer: (params) => (
                <IconButton color="error" onClick={() => deleteTraining(params.value)}>
                <DeleteIcon />
              </IconButton>
            ),
          },
    ])

    return (
        <>
        <h2> Trainings </h2>
        <AddTraining addTraining={addTraining}  />
        <div className= "ag-theme-material" 
        style={{
            height: '700px', 
            width: '70%', 
            margin: 'auto'
            }} 
            >
            <AgGridReact
            rowData={trainings}
            columnDefs={columnDefs}
            paginationPageSize={10}
            animateRows="true"
            pagination={true}
          />

        </div>
        </>
)
}