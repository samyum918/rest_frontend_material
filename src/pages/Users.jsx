import React, { Component, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import httpService from "../services/httpService";
import { Button } from "@material-ui/core";

const Users = () => {
  const columns = [
    {
      name: "id",
      label: "Id",
      options: {
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        sort: true,
      },
    },
    {
      name: "phone",
      label: "Phone",
      options: {
        sort: true,
      },
    },
    {
      name: "addressName",
      label: "Address",
      options: {
        sort: true,
      },
    },
    {
      name: "companyName",
      label: "Company Name",
      options: {
        sort: true,
      },
    },
    {
      name: "action",
      label: "Action",
    },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await httpService.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(
        result.data.map(({ id, name, email, phone, address, company }) => {
          return {
            id,
            name,
            email,
            phone,
            addressName: address.street,
            companyName: company.name,
            action: (
              <Button variant="contained" color="secondary">
                View
              </Button>
            ),
          };
        })
      );
    }

    getUsers();
  }, []);

  const options = {
    draggableColumns: {
      enabled: true,
    },
    download: false,
    filter: false,
    search: false,
    print: false,
    viewColumns: false,
    selectableRowsHideCheckboxes: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25, 50],
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <MUIDataTable
        title={"Employee List"}
        data={users}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Users;
