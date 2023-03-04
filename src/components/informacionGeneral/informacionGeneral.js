import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import './informacionGeneral.css'
import casa from '../imagenes/casa.jpg'


const Usuarios = () =>  {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#8cb5a5d5',
    color: ('black'),
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center'
  }));

    return (
        <>          
        <div className="contenedor">
        <div className='header'>
            <h1>
                ACR CONSTRUCTORA
            </h1>
        </div>
      <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={0.5} mb={'100px'}>
            
            
            <Grid item xs={6} >
                    <Item  >
                        <img src={casa} width={500} height={400}/>
                    </Item>
            </Grid>
            <Grid item xs={6} >
                    <Item className="hola12">
                      <h1 className="h12">
                        PRÓPOSITO
                      </h1>
                        <p>   
                          Reconocer que la humanidad cada vez aumenta en su numero de población,
                          debido a esto se genera una gran proyección de necesidad con respecto a la vivienda, 
                          ya que el ser humano necesita un techo para dormir, pasar su vida, socializar con su familia
                          y seres queridos, en este punto ACR CONSTRUCTORA asume el rol de proveer la facilidad
                          de brindarle a las personas el benedificio de poder vivir en un lugar digno y apacible, 
                          entendiendo las necesidades actuales que las personas 
                        </p>
                    </Item>
            </Grid>

          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <h1 className="h3">
                Historia de la empresa:
              </h1>
            </Grid>

          </Grid>
          <Grid container>
          <Grid item xs={3}/>
            <Grid item xs={6}>
              <p className="p1">
                Lo primero que hemos de mencionarte acerca de la historia de ACR CONSTRUCTORA
                es que etsa empresa Colombiana fue fundada el 22 de marzo de 2014 por 
                Alexander Corredor, Wilson Celis. En el año 2014 se llevó a cavo el primer proyecto de construccion
                de la empresa, la cual se llevo a cabo en la ciudad de Cúcuta Norte de Santander.
              </p>
              <p>
                Desde ese año la empresa ha ido surgniendo poco a poco, en la actualidad cuenta con más de 8 proyectos 
                realizados los cuales han sido de gran satisfacción para los clientes que han adquirido sus viviendas
                ya que son viviendas especialmente confortables, grandes, las cuales los clientes agradecen y están felices 
                de vivir en propiedades fabricadas por la empresa.
              </p>

            </Grid>

          </Grid>

      </Box>
      </div>
      </>


    );
  }
  
  export default Usuarios;
  
  