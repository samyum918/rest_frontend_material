import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";
import JsonQueryUtils from "../utils/JsonQueryUtils";
import { page } from "../services/userService";

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
      name: "phone",
      label: "Phone",
      options: {
        sort: true,
      },
    },
    {
      name: "address1",
      label: "Address1",
      options: {
        sort: true,
      },
    },
    {
      name: "address2",
      label: "Address2",
      options: {
        sort: true,
      },
    },
    {
      name: "action",
      label: "Action",
    },
  ];

  let criterias = [];
  let pageRequest = JsonQueryUtils.pageRequest(0, 5);
  let sort = [];

  const initOptions = {
    draggableColumns: {
      enabled: true,
    },
    download: false,
    filter: false,
    search: false,
    print: false,
    viewColumns: false,
    selectableRowsHideCheckboxes: true,
    serverSide: true,
    page: pageRequest.page,
    rowsPerPage: pageRequest.size,
    rowsPerPageOptions: [5, 10, 25, 50],
    onChangePage: (currentPage) => {
      pageRequest.page = currentPage;
      getUsers();
    },
    onChangeRowsPerPage: (numberOfRows) => {
      pageRequest.size = numberOfRows;
      getUsers();
    },
    onColumnSortChange: (changedColumn, direction) => {
      if (direction === "asc") {
        sort = [{ ...JsonQueryUtils.sortAsc(changedColumn, true) }];
        getUsers();
      } else if (direction === "desc") {
        sort = [{ ...JsonQueryUtils.sortDesc(changedColumn, true) }];
        getUsers();
      }
    },
  };
  const [options, setOptions] = useState(initOptions);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const body = JsonQueryUtils.generateQueryObjectJson(
      criterias,
      pageRequest,
      sort
    );
    const result = await page(body);

    let updatedOptions = { ...options };
    updatedOptions.page = pageRequest.page;
    updatedOptions.rowsPerPage = pageRequest.size;
    updatedOptions.count = result.data.pageInfo.totalElements;
    setOptions(updatedOptions);
    setUsers(
      result.data.contents.map(({ id, name, phone, address1, address2 }) => {
        return {
          id,
          name,
          phone,
          address1,
          address2,
          action: (
            <>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: "10px" }}
              >
                View
              </Button>
              <Button variant="contained" color="secondary">
                Edit
              </Button>
            </>
          ),
        };
      })
    );
  }

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
