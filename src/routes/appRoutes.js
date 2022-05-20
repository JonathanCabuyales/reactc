import React from 'react'
// import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ClientesScreen } from '../pages/clientes/ClientesScreen'
import { ComprasScreen } from '../pages/compras/ComprasScreen'
import { DashboardScreen } from '../pages/dashboard/dashboardScreen'
import { DepreciacionScreen } from '../pages/depreciacion/DepreciacionScreen'
import { EmpleadosScreen } from '../pages/empleados/EmpleadosScreen'
import { FacturasScreen } from '../pages/facturas/FacturasScreen'
import { FirmasScreen } from '../pages/firmas/FirmasScreen'
import { FondosScreen } from '../pages/fondos/FondosScreen'
import { Login } from '../pages/login/loginScreen'
import { MaximumScreen } from '../pages/maximum/MaximumScreen'
import { NotaScreen } from '../pages/notas/NotaScreen'
import { ProyeccionScreen } from '../pages/proyeccion/ProyeccionScreen'

export const AppRoutes = () => {
  // const {token} = useSelector(state => state.auth);

  
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={ <Login /> }/>
            <Route path='*' element={ <Navigate to='' replace={true} /> }/>
            <Route path='home'>
              <Route path='dashboard' element={ <DashboardScreen /> }/>
              <Route path='notas' element={ <NotaScreen /> }/>
              <Route path='firmas' element={ <FirmasScreen /> }/>
              <Route path='facturas' element={ <FacturasScreen /> }/>
              <Route path='proyeccion' element={ <ProyeccionScreen /> }/>
              <Route path='compras' element={ <ComprasScreen /> }/>
              <Route path='fondos' element={ <FondosScreen /> }/>
              <Route path='clientes' element={ <ClientesScreen /> }/>
              <Route path='empleados' element={ <EmpleadosScreen /> }/>
              <Route path='depreciacion' element={ <DepreciacionScreen /> }/>
              <Route path='maximum' element={ <MaximumScreen /> }/>
            </Route>
        </Routes>
        
    </BrowserRouter>
  )
}
