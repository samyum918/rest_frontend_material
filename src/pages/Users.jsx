import React, { Component, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

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
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(
        result.data.map(({ id, name, email, phone, address, company }) => {
          return {
            id,
            name,
            email,
            phone,
            addressName: address.street,
            companyName: company.name,
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
    <MUIDataTable
      title={"Employee List"}
      data={users}
      columns={columns}
      options={options}
    />
  );
};

export default Users;
