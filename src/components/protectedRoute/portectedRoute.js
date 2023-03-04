import { Children } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";


export const ProtectedRoute=({
    isAllowed,
    redirecTo = '/inicioSesion',
    children
}) => {
    if (!isAllowed){

        return<Navigate to={redirecTo}/>
    }
    return children ? children : <Outlet/>
}