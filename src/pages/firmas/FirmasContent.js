import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFirmas } from '../../helpers/firmas/firmasHelpers';
;

export const FirmasContent = () => {

    const {token} = useSelector(state => state.auth);

    const [firmas, setFirmas] = useState([]);

    useEffect(() => {
      getFirmas(token)
      .then((resp) =>{
          console.log(resp);
        setFirmas(resp.data?.data || []);
      })
      .catch((error) =>{

      })
    }, [setFirmas]);
    


  return (
    <>
        <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <div className='col-md-7'>
                
                <div className='buscarFirmas'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox='0 0 40 40'>
                            <path d="M39.8 41.95 26.65 28.8Q25.15 30.1 23.15 30.825Q21.15 31.55 18.9 31.55Q13.5 31.55 9.75 27.8Q6 24.05 6 18.75Q6 13.45 9.75 9.7Q13.5 5.95 18.85 5.95Q24.15 5.95 27.875 9.7Q31.6 13.45 31.6 18.75Q31.6 20.9 30.9 22.9Q30.2 24.9 28.8 26.65L42 39.75ZM18.85 28.55Q22.9 28.55 25.75 25.675Q28.6 22.8 28.6 18.75Q28.6 14.7 25.75 11.825Q22.9 8.95 18.85 8.95Q14.75 8.95 11.875 11.825Q9 14.7 9 18.75Q9 22.8 11.875 25.675Q14.75 28.55 18.85 28.55Z"/>
                        </svg>
                    </span>
                    <input className='form-control' placeholder='Buscar....' />
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col'>
                <Table>
                    <TableHead className='table__cabecera'>
                        <TableRow>
                            <TableCell sx={{ color: '#fff'}}>
                                Nombre
                            </TableCell>
                            <TableCell sx={{ color: '#fff'}}>
                                Fecha
                            </TableCell>
                            <TableCell sx={{ color: '#fff'}}>
                                Imagen
                            </TableCell>
                            <TableCell sx={{ color: '#fff'}}>
                                Acciones
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                (firmas.length > 0) &&
                                (
                                    firmas.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <b>{item.nombres + ' ' + item.apellidos}</b>
                                            </TableCell>
                                            <TableCell>
                                                {item.create_at}
                                            </TableCell>
                                            <TableCell>
                                                <img width='100px' src={item.foto_fir} alt={item.nombres + ' ' + item.apellidos} />
                                            </TableCell>
                                            <TableCell>
                                                <span>
                                                    <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="35"
                                                    width="35"
                                                    viewBox="0 0 50 50"
                                                    fill="red"
                                                    >
                                                    
                                                    <path d="M11.125 35Q10 35 9.188 34.167Q8.375 33.333 8.375 32.208V9.167H8.042Q7.458 9.167 7.062 8.771Q6.667 8.375 6.667 7.792Q6.667 7.167 7.062 6.771Q7.458 6.375 8.042 6.375H14.667Q14.667 5.792 15.062 5.396Q15.458 5 16.042 5H23.958Q24.542 5 24.938 5.396Q25.333 5.792 25.333 6.375H31.958Q32.542 6.375 32.938 6.792Q33.333 7.208 33.333 7.792Q33.333 8.375 32.938 8.771Q32.542 9.167 31.958 9.167H31.625V32.208Q31.625 33.333 30.812 34.167Q30 35 28.875 35ZM11.125 9.167V32.208Q11.125 32.208 11.125 32.208Q11.125 32.208 11.125 32.208H28.875Q28.875 32.208 28.875 32.208Q28.875 32.208 28.875 32.208V9.167ZM15.208 27.333Q15.208 27.917 15.604 28.312Q16 28.708 16.583 28.708Q17.167 28.708 17.562 28.312Q17.958 27.917 17.958 27.333V14.042Q17.958 13.417 17.562 13.021Q17.167 12.625 16.583 12.625Q16 12.625 15.604 13.021Q15.208 13.417 15.208 14.042ZM22.042 27.333Q22.042 27.917 22.438 28.312Q22.833 28.708 23.417 28.708Q24 28.708 24.396 28.312Q24.792 27.917 24.792 27.333V14.042Q24.792 13.417 24.396 13.021Q24 12.625 23.417 12.625Q22.833 12.625 22.438 13.021Q22.042 13.417 22.042 14.042ZM11.125 9.167V32.208Q11.125 32.208 11.125 32.208Q11.125 32.208 11.125 32.208Q11.125 32.208 11.125 32.208Q11.125 32.208 11.125 32.208V9.167Z" />
                                                    </svg>
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )
                            }
                    </TableBody>
                </Table>
            </div>
        </div>
    </>
  )
}
