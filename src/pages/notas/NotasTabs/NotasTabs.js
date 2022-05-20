// import React from 'react'

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { traerNotas } from "../../../helpers/notas/NotasHelpers";
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from '@mui/material';
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

export const NotasTabs = () => {
  const { token } = useSelector((state) => state.auth);
  const [notas, setNotas] = useState([]);

  const [page, setPage] = useState(0);
  const [rowPerPage, setrowPerPage] = useState(5);

  // evitar que muestre una capa si si existen filas vacias
  const filaVacias = page > 0 ? Math.max(0, (1 + page) * rowPerPage - notas.length) : 0;

  // funcion para cambiar de pagina
  const handleChangePage = (event, newPage) =>{
    setPage(newPage);
  }
// funcion para cambiar la cantidad de filas por pagina
  const handleChangeRowPerPage = (event) =>{
    // console.log(event);
    setrowPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  useEffect(() => {
    traerNotas(token)
      .then((resp) => {
        console.log(resp.data.data);
        setNotas(resp.data.data);

        //   console.log(notas);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, [setNotas]);

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <span>
            <svg
              className="svglimpiarnota"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </span>

          <span>
            <svg
              className="svgagregarnota"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
            </svg>
          </span>
          <div className="row">
            <textarea
              placeholder="Escriba una nota..."
              style={{
                resize: "none",
                width: "100%",
                height: "300px",
                padding: "5px",
              }}
            ></textarea>
          </div>
        </div>
        <div className="col-md-8">
          <Table className="table__modificar">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b className="titulo">Notas</b>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {
                    notas.length > 0 && 
                    (
                      notas.map((item, index) =>(
                        <TableRow key={item.id_nota}>
                          <TableCell key={item.id_nota}>
                            {item.descripcion_nota}
                          </TableCell>
                          <TableCell key={index}>
                            <span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="30"
                                width="30"
                                viewBox="0 0 50 50"
                                fill="blue"
                                >
                                <path d="M9 39H11.2L35.45 14.75L34.35 13.65L33.25 12.55L9 36.8ZM6 42V35.6L35.4 6.2Q36.25 5.35 37.525 5.375Q38.8 5.4 39.65 6.25L41.8 8.4Q42.65 9.25 42.65 10.5Q42.65 11.75 41.8 12.6L12.4 42ZM39.5 10.45 37.45 8.4ZM35.45 14.75 34.35 13.65 33.25 12.55 35.45 14.75Z" />
                                </svg>
                            </span>

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

              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5,10,15, { label: 'All', value: -1 }]}
                    count={notas.length}
                    rowsPerPage={rowPerPage}
                    page={page}
                    colSpan={3}
                    SelectProps={{
                      inputProps: {
                        'aria-label': 'row per page',
                      },
                      native: true
                      
                    }}
                    labelRowsPerPage="Cantidad Por Vista"
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowPerPage}
                    showFirstButton
                    showLastButton
                  />
                </TableRow>
              </TableFooter>

          </Table>
          {/* <div className="card">
            <div className="card-header">
              <div className="card-subtitle">Notas</div>
            </div>
            <div className="card-body">
              {notas.length > 0 &&
                notas.map((p) => (
                  <div className="row" key={p.id_nota}>
                    <div className="col-md-10">
                      <p className="card-text">{p.descripcion_nota}</p>
                    </div>
                    <div className="col-md-2 centrar-iconos">
                        <div className="row">
                            <div className="col">
                                <span>
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30"
                                    width="30"
                                    viewBox="0 0 50 50"
                                    fill="blue"
                                    >
                                    <path d="M9 39H11.2L35.45 14.75L34.35 13.65L33.25 12.55L9 36.8ZM6 42V35.6L35.4 6.2Q36.25 5.35 37.525 5.375Q38.8 5.4 39.65 6.25L41.8 8.4Q42.65 9.25 42.65 10.5Q42.65 11.75 41.8 12.6L12.4 42ZM39.5 10.45 37.45 8.4ZM35.45 14.75 34.35 13.65 33.25 12.55 35.45 14.75Z" />
                                    </svg>
                                </span>

                            </div>


                            <div className="col">
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

                            </div>
                        </div>

                    </div>
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
