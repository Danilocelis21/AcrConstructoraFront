import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './principal.css'
import { Link, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import casa11 from '../imagenes/casa11.jpg'
import casa12 from '../imagenes/casa12.jpg'
import casa13 from '../imagenes/casa13.jpg'
import casa14 from '../imagenes/casa14.jpg'




const Principal = () =>{

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (

    <>
      <div className='contenedor'>
      <div className='color'>
        <Grid container>
          <Grid item xs={10}>
          <div className='divh1'>
              <h1>Bienvenidos a ACR CONTRUCTORA</h1>
          </div>
          
          </Grid>
            <Grid item xs={2}>
            <div className='div'>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                
              >
              
                <button className='boton'>
                    <h2>
                        Menu
                    </h2>
                </button>
                
              </Button>

              
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <button className='botonMenu'>
              
                      <MenuItem onClick={()=>navigate('/portafolio')}>Portafolio</MenuItem>
                
                  
                </button>
                <button className='botonMenu'>
              
                      <MenuItem onClick={()=>navigate('/usuarios')}>Usuarios</MenuItem>
                
                  
                </button>
                <button className='botonMenu'>
              
                      <MenuItem onClick={()=>navigate('/administracion')}>Administracion</MenuItem>
                
                  
                </button>
                <button className='botonMenu'>
              
                      <MenuItem onClick={()=>navigate('/informacionGeneral')}>informacion General</MenuItem>
                
                  
                </button>
                
              </Menu>
              
              
            </div>

            </Grid>
        </Grid>
      </div>

    <Grid container>
      <Grid item xs={4}/>
      <Grid item xs={4}>
        <h2 className='h23'>
        Algunos de los proyectos de la empresa:
        </h2>
      </Grid>
    </Grid>
    
    <Grid container spacing={2}  mb={'40px'}>
      <Grid item xs={2}/>
      <Grid item xs={3} mr={'100px'}>
          <img src={casa11}  width={500} height={400}/>
      </Grid>
      <Grid item xs={3} ml={'50px'}>
        <img src={casa12}  width={500} height={400}/>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
     <Grid item xs={2}/>
      <Grid item xs={3} mr={'100px'}>
        <img src={casa13}  width={500} height={400}/>
      </Grid>
      <Grid item xs={3} ml={'50px'}>
        <img src={casa14}  width={500} height={400}/>
      </Grid>
    </Grid>
    </div>
    </>
  );
}

export default Principal;


