import React, {useState, useEffect} from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Customerlist() {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then((response) => response.json())
        .then((data) => setCustomers(data.content));
    };
    
    const addCustomer = (customer) => {
        console.log("addCustomerissa"); 
        fetch("https://customerrest.herokuapp.com/api/customers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customer),
        }).then((response) => {
          if (response.ok) {
            getCustomers();
          }
        });
      };

  const updateCustomer = (updateCustomer, link) => {
    link = JSON.stringify(link[1].href);
    link = link.slice(1, -1);
    console.log("Linkki on: " + link);
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateCustomer),
    }).then((response) => {
      if (response.ok) {
        getCustomers();
      }
    });
  };

  const deleteCustomer = (link) => {
    console.log("DELETE FUNKTIO");
    if (window.confirm('Are you sure?')) {
        link = JSON.stringify(link[1].href);
        link = link.slice(1, -1);
        fetch(link, { method: "DELETE" }).then((response) => {
            if (response.ok) {
                getCustomers();
            }
        });
    }
  };

    const [columnDefs,] = useState([
        { field: "firstname", sortable: true, filter: true },
        { field: "lastname", sortable: true, filter: true },
        { field: "streetaddress", sortable: true, filter: true },
        { field: "postcode", sortable: true, filter: true },
        { field: "city", sortable: true, filter: true },
        { field: "email", sortable: true, filter: true },
        { field: "phone", sortable: true, filter: true },
        {
            headerName: "",
            width: 100,
            field: "links",
            cellRenderer: (params) => (
                <IconButton color="error" onClick={() => deleteCustomer(params.value)}>
                <DeleteIcon />
              </IconButton>
            ),
          },
        {
            headerName: "",
            width: 100,
            field: "links",
            cellRenderer: (params) => (
              <EditCustomer updateCustomer={updateCustomer}  params={params} />
            ),
          },
    ])

    return (
        <>
        <h2>Customers</h2>
        <AddCustomer addCustomer={addCustomer}/>
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
        </>
    )

}