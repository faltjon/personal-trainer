import React, {useState} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function Customerlist({customers}) {

  

// console.log("given Customers are: " + JSON.stringify(customers));



    const [columnDefs,] = useState([
        { field: "firstname", sortable: true, filter: true },
        { field: "lastname", sortable: true, filter: true },
        { field: "streetaddress", sortable: true, filter: true },
        { field: "postcode", sortable: true, filter: true },
        { field: "city", sortable: true, filter: true },
        { field: "email", sortable: true, filter: true },
        { field: "phone", sortable: true, filter: true },
    ])



    return (
        <div className= "ag-theme-material" 
        style={
            {
            height: '700px', 
            width: '70%', 
            margin: 'auto'
            }
            } 
            >

            <AgGridReact
            rowData={customers}
            columnDefs={columnDefs}
            paginationPageSize={10}
            pagination={true}
          />

        </div>
    )

}