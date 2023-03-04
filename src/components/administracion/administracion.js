import { Grid } from "@mui/material";
import './administracion.css'
import contabilidad2 from '../imagenes/contabilidad2.jpg'
import ventas1 from '../imagenes/ventas1.jpg'
import mercadeo1 from '../imagenes/mercadeo1.jpg'
import recursos1 from '../imagenes/recursos1.jpg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';





const Administracion = () =>{

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#8cb5a5d5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));

    return(
      <>
      <div className="contenedor">
      <div className="container">
      <Grid container xs={12} >

        <Grid item xs={3}>
          <div className='item1'>
            <h2>
              CONTABILIDAD
            </h2>

          </div>
          
        </Grid>
        <Grid item xs={3}>
          <div className='item2'>
            <h2>
              VENTAS
            </h2>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className='item3'>
            <h2>
              RECURSOS HUMANOS
            </h2>
          </div>    
        </Grid>
        <Grid item xs={3}>

          <div className='item4'>
            <h2>
              MERCADEO
            </h2>
          </div>
        </Grid>
      </Grid>
      </div>
      
      <Box sx={{ flexGrow: 1 }}>
        <div className="hola">
          <Grid container spacing={2}>

            <Grid item xs={6} >
              <Item>
                <img src={contabilidad2} width={500} height={400}/>
              </Item>
            </Grid>

            <Grid item xs={6} >
              <Item >
                <div>
                  <h2 className='item1'>
                    CONTABILIDAD
                  </h2>

                  <p>
                  La contabilidad es una disciplina que se encarga de estudiar, medir y analizar el patrimonio, la situación patrimonial 
                  económica y financiera de una empresa u organización, con el fin de facilitar la toma de decisiones en el seno de la misma 
                  y el control externo, presentando la información, previamente registrada, de manera sistemática y útil para las distintas partes interesadas.
                  La contabilidad es una disciplina técnica que a partir del procesamiento de datos sobre la composición y evolución del patrimonio de un ente, 
                  los bienes de propiedad de terceros en su poder y ciertas contingencias produce información para la toma de decisiones de administradores y 
                  terceros interesados y para la vigilancia sobre los recursos y obligaciones del ente.La finalidad de la contabilidad es suministrar información 
                  en un momento dado de los resultados obtenidos durante un período de tiempo, que resulta de utilidad a la toma de decisiones, tanto para el 
                  control de la gestión pasada, como para las estimaciones de los resultados futuros, dotando tales decisiones de racionalidad y eficiencia.
                  </p>
                  
                </div>
              </Item>
            </Grid>

          </Grid>

        </div>

        <div className="hola">
          <Grid container spacing={2} mb={'40px'}>

            <Grid item xs={6} >
              <Item >
                <img src={ventas1} width={500} height={400}/>
              </Item>
            </Grid>

            <Grid item xs={6} >
              <Item >
                <div>
                  <h2 className='item2'>
                    VENTAS
                  </h2>

                  <h3>
                  Su función principal es participar en una variedad de actividades con el objetivo de promover 
                  la compra de un producto por parte del cliente o su participación en algún servicio que la organización ofrezca.
                  El departamento de ventas debe desarrollar e implementar un protocolo para vender un producto o servicio que sea 
                  adecuado a la industria o sector, así como conectar con las personas que podrían estar interesadas y convertirlas en clientes.

                  El objetivo principal de todo departamento de ventas es, valga la redundancia, vender. Sin embargo, este objetivo 
                  no consiste solo en vender por vender, sino hacerlo de forma eficiente. Esto significa, por ejemplo, acortar el ciclo de ventas, 
                  lograr convencer a los prospectos en sus diferentes etapas, nutrir a los leads y tratar de convertirlos en clientes mediante 
                  estrategias y herramientas especializadas. Esto sirve para conseguir un aumento de la tasa de conversiones.
                  </h3>
                </div>
              </Item>
            </Grid>

          </Grid>
        </div>

        <div className="hola">
          <Grid container spacing={2}>

            <Grid item xs={6} >
              <Item >
                <img src={recursos1} width={500} height={400}/>
              </Item>
            </Grid>

            <Grid item xs={6} >
              <Item >
                <div>
                  <h2 className='item3'>
                    RECURSOS HUMANOS
                  </h2>

                  <p>
                    El departamento de recursos humanos se encarga, por tanto, Este se encarga de organizar
                    de todo lo relacionado con las personas que forman parte de una empresa. En este sentido, 
                    el departamento de recursos humanos se encarga de gestionar el capital humano, ya sea en 
                    materia administrativa, así como la propia gestión de equipos.
                  </p>
                  <p>
                  El departamento de recursos humanos ha sido un departamento que se ha ligado erróneamente al pago de nóminas y gestión de las mismas como única tarea.
                  Sin embargo, es un departamento que ha experimentando una transformación hacia una mayor profesionalización.
                  También es tarea indispensable de este departamento la contratación de personal. Por ello, de este depende la calidad del equipo humano con el que cuenta
                   la empresa, ejerciendo un rol determinante en la consecución de los objetivos.
                  </p>
                </div>
              </Item>
            </Grid>

          </Grid>
        </div>

        <div className="hola">
          <Grid container spacing={2}>

            <Grid item xs={6} >
              <Item >
                <img src={mercadeo1} width={500} height={400}/>
              </Item>
            </Grid>

            <Grid item xs={6} >
              <Item >
                <div>
                  <h2 className='item4'>
                    MERCADEO
                  </h2>

                  <h3>
                    ¿Para qué sirve la mercadotecnia?
                  </h3>
                  <p>
                  Comprender para qué sirve la mercadotecnia te ayudará a visualizar de forma ideal qué es capaz de hacer para tu organización. 
                  Considerando que es una disciplina extremadamente amplia, con múltiples de variables y utilidades, en síntesis se trata de una 
                  herramienta que permite traducir los beneficios y particularidades de los productos para transformar las acciones en ventas.
                  Ahora bien, ¿qué logra conseguir? 
                  Descubre algunos de los principales propósitos de la mercadotecnia:
                  </p>
                  <h3>
                  Identificar las características de los consumidores
                  </h3>
                  <p>
                  Analizando y estudiando las preferencias, gustos e intereses de los clientes potenciales, así como sus datos demográficos, 
                  necesidades y principales hábitos, la mercadotecnia sirve para enfocar todas las estrategias hacia las áreas de mayor oportunidad en el mercado.
                  </p>
                </div>
              </Item>
            </Grid>

          </Grid>
        </div>

          

      </Box>


      
  

      </div>
      </>
      
    )
  }

export default Administracion;