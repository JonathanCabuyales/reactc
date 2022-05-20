import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

export const FacturaTable = ({data}) => {
  return (
      <>
        <div className='row'>
            <Table className='mt-3 ms-3'>
                <TableHead className='table__cabecera'>
                    <TableRow>
                        <TableCell style={{ color: '#fff'}}>Nombre</TableCell>
                        <TableCell style={{ color: '#fff'}}>Descripcion</TableCell>
                        <TableCell style={{ color: '#fff'}}>Cantidad</TableCell>
                        <TableCell style={{ color: '#fff'}}>Subtotal</TableCell>
                        <TableCell style={{ color: '#fff'}}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            
        </div>
        <div className='factura__subtotal'>
            
            <div className='row ampliar'>
                <div className='col factura__mover__derecha'>
                    <span><b>Subtotal 12%</b></span>

                </div>
                <div className='col'>
                    <label className='disabled'>0.00</label>
                </div>
            </div>
            
        </div>
      
      </>
  )
}
