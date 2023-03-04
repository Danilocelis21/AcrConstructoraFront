import './App.css';
import Login from './components/login/login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Usuarios from './components/usuarios/usuarios';
import Portafolio from './components/portafolio/portafolio'
import { ProtectedRoute } from './components/protectedRoute/portectedRoute';
import Administracion from './components/administracion/administracion'
import InformacionGeneral from './components/informacionGeneral/informacionGeneral'
import PaginaPrincipal from './components/paginaPrincipal/paginaPrincipal'
import { useState } from 'react'

const App = () =>  {

  const [isAllowed, setIsAllowed] = useState()
  const [user,setUser] = useState()

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === ''){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
    console.log('isAllowed',isAllowed)
  }

  return (
    
    <BrowserRouter>
        <Routes>
            <Route element={<ProtectedRoute isAllowed={isAllowed}/>}>
              <Route path='/portafolio' element={<Portafolio/>}> </Route>
            </Route>
              <Route path='/usuarios' element={<Usuarios/>}> </Route>

            <Route path='/paginaPrincipal' element={<PaginaPrincipal/>}> </Route>
            <Route path='/inicioSesion' element={<Login childToParentData={functionToGetchildData}/>}></Route>
            <Route path='/administracion' element={<Administracion/>}></Route>
            <Route path='/informacionGeneral' element={<InformacionGeneral/>}></Route>
            
        </Routes>
    </BrowserRouter>
     
     
  );
}

export default App;

