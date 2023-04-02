import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import React, { useState } from 'react';
import 'ag-grid-enterprise';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './style.module.css';
const MyTable = (props) => {
  console.log(props.tableName);
  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([]);
  const fetchData = async () => {
    try {
      const dataColumn: any = await axios.get(
        `http://localhost:3000/api/getColumnFields?tableName=${props.tableName}`
      );
      const dataAll: any = await axios.get(
        `http://localhost:3000/api/getAll?tableName=${props.tableName}`
      );
      setColumnDefs(dataColumn.data.columns);
      setRowData(dataAll.data.all);
    } catch {
      setColumnDefs([]);
      setRowData([]);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [props]);
  return (
    <div className='ag-theme-alpine flex-grow '>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        sideBar='filters'
        defaultColDef={{
          flex: 1,
          minWidth: 150,
          filter: true,
          resizable: true,
          floatingFilter: true,
          filter: 'agTextColumnFilter',
        }}
      ></AgGridReact>
    </div>
  );
};
export default MyTable;
