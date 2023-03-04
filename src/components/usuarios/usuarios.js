import { Grid } from "@mui/material";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './usuarios.css'

const Usuarios = () =>  {

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'Nombre', width: 130 },
    { field: 'lastName', headerName: 'Apellido', width: 130 },
    {
      field: 'age',
      headerName: 'Edad',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Nombre completo',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
    return (
      <>
      <div className="contenedorUsuarios">
              <div className='header'>
              <h1>
                USUARIOS
              </h1>
          </div>

          <Grid container mb={'20px'}>
          <Grid item xs={3}/>
          <Grid item xs={4}>
            <h2 className="trabajadores">
              TRABAJADORES DE LA EMPRESA:
            </h2>
          </Grid>

          </Grid>

          <Grid container>
            <Grid item xs={3}/>
            <Grid item xs={5}>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  checkboxSelection
                />
            </div>
            </Grid>
          </Grid>
          </div>

        </>

    );
  }
  
  export default Usuarios;
  
  