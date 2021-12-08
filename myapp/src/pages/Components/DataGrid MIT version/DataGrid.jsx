import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect} from 'react';

import api from '../../../services/api';
import { red } from '@material-ui/core/colors';


const columns = [
  {field: 'id', headerName: 'ID', width: 50},
  {field: 'title', headerName: 'Title', width: 380},
  {field: 'body', headerName: 'Body', width: 500}
]

export default function DataGridMIT() {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {   
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, []);


  return (
    <div style={{ boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.199)', backgroundColor: 'aliceblue', marginLeft: 20, marginTop: 30, height: 500, width: 1000 }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}