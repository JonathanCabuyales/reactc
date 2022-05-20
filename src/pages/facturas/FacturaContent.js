// import React from 'react'

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getEmpresa } from "../../helpers/empresa/empresaHelpers";

import { ToastContainer, toast } from 'react-toastify';
import { getSecuencial } from "../../helpers/empresa/factura/facturaHelpers";
import { getDataByToken } from "../../helpers/auth/authHelpers";
import { FacturaTable } from "./FacturaTable";

export const FacturaContent = () => {

    const { token } = useSelector(state => state.auth);

    const [empresa, setEmpresa] = useState({});

    const [secuencial, setSecuencial] = useState(0);

    const [dataUser, setDataUser] = useState({});

    useEffect(() => {
      
        getEmpresa(token)
        .then((resp) =>{
            console.log(resp);
            setEmpresa(resp.data.data[0]);

        })
        .catch((error) =>{

        });

        getSecuencial(token)
        .then((resp)=>{
            // console.log(resp);
            let sec = (resp.data.data.length === 0) ? 1 : resp.data.data[0].secuencial;
            setSecuencial(sec);
        })
        .catch((error)=>{

        });

        getDataByToken(token)
        .then((resp) =>{
            // console.log(resp);
            setDataUser(resp.data.data);
        })
        .catch((error)=>{

        });
    }, [setEmpresa, setSecuencial, setDataUser]);
    
    
  return (
    <>
        <div className="tituloFactura">
            <h2>Facturas</h2>
            <div className="cabeceraFactura">
                <div className="row">
                    <div className="col">
                        <span><b>Tipo Comprobante:</b></span>
                        <select className="form-select">
                            <option value="#">Tipo de Comprobante</option>
                            <option value="FACTURA">Factura</option>
                            <option value="NOTAVENTA">Nota de Venta</option>
                        </select>
                    </div>
                    <div className="col">
                        <span><b>Empresa:</b></span>
                        <label className="disabled">{ empresa.nombre_emp }</label>
                    </div>
                    <div className="col">
                        <span><b>Ruc:</b></span>
                        <label className="disabled">{ empresa.ruc_emp }</label>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <span><b>Nº Factura</b></span>
                        <label className="disabled">
                            {secuencial}
                        </label>
                    </div>
                    <div className="col-md-4">
                        <span><b>Fecha:</b></span>
                        <input className="form-control" type="date" />
                    </div>
                </div>

                <div className="row mt-4 mb-4">
                    <div className="col-md-4">
                        <span style={{ color: 'darkorange' }}><b>Seleccione cliente:</b> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="svCliente"
                                enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g>
                                    <g>
                                        <path
                                            d="M10,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S6,5.79,6,8C6,10.21,7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S8,9.1,8,8C8,6.9,8.9,6,10,6z" />
                                        <path
                                            d="M4,18c0.22-0.72,3.31-2,6-2c0-0.7,0.13-1.37,0.35-1.99C7.62,13.91,2,15.27,2,18v2h9.54c-0.52-0.58-0.93-1.25-1.19-2H4z" />
                                        <path
                                            d="M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 c0.93,0.93,1.62,1.62,2.57,2.57L22,20.59C20.5,19.09,21.21,19.79,19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C18,17.1,17.1,18,16,18z" />
                                    </g>
                                </g>
                            </svg>
                        </span>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <span><b>Forma de pago:</b></span>
                        <select className="form-select">
                            <option value="#" defaultValue="#">Forma de Pago</option>
                            <option value="EFECTIVO" >Efectivo</option>
                            <option value="DEBITO">Tarjeta de Debito</option>
                            <option value="CREDITO">Tarjeta de Credito</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <span><b style={{ color: 'darkorange' }}>Vendedor:</b></span>
                        <label className="disabled">
                            {dataUser?.usuario}
                        </label>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="tituloFactura">

            <div className="cabeceraFactura">
                <div className="row col-md-4">
                    <button className="btn mt-4" type="button">Buscar Item 
                    
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 50 50" fill="#fff">
                            <path d="M22.65 34H25.65V25.7H34V22.7H25.65V14H22.65V22.7H14V25.7H22.65ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z"/>
                        </svg>
                    </button>
                </div>
                <div className="row item">
                    <div className="col-md-3">
                        <span><b>Codigo de barras:</b></span>
                        <input type="text" className="form-control"  placeholder="codigo de barras" />
                    </div>
                    <div className="col-md-2">
                        <span><b>Descripcion: </b></span>
                        <label className="disabled"></label>
                    </div>
                    <div className="col">
                        <span><b>Stock: </b></span>
                        <label className="disabled">0</label>

                    </div>
                    <div className="col">
                        <span><b>Precio: </b></span>
                        <label className="disabled">0</label>

                    </div>
                    <div className="col">

                        <span><b>Cantidad: </b></span>
                        <input className="form-control" type="number" placeholder="0"/>
                    </div>
                    <div className="col">
                        <span><b>Total: </b></span>
                        <label className="disabled">0</label>

                    </div>
                    <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                        <button type="button" className="btn btngrabar">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 50 50" fill="#fff">
                                <path d="M22.65 34H25.65V25.7H34V22.7H25.65V14H22.65V22.7H14V25.7H22.65ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31 41 36 36Q41 31 41 24Q41 17 36 12Q31 7 24 7Q17 7 12 12Q7 17 7 24Q7 31 12 36Q17 41 24 41Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="row col">
                    <FacturaTable data="probando"  />
                </div>
            </div>
        </div>
    </>
  )
}
