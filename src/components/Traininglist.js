import React, {useState} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { format } from 'date-fns'

export default function Traininglist({trainings}) {

    console.log(trainings);

    const [columnDefs,] = useState([
        
       
        {
            headerName: "Firstname",
            width: 100,
            field: "customer.firstname",
        },
        {
            headerName: "Lastname",
            width: 100,
            field: "customer.lastname",
        },
        {field: 'date', sortable: true, filter: true,
         valueFormatter: params => format(new Date(params.value), "dd.MM.yyyy hh.mm") },
        { field: "duration", sortable: true, filter: true },
        { field: "activity", sortable: true, filter: true },

        
 
    ])

   // console.log("Trainings in trainings are: " + JSON.stringify(trainings));

    return (
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
            pagination={true}
          />

        </div>
    )

}