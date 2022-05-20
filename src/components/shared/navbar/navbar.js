// import React from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbarStyles.css';

// let tieneClass = false;

export const Navbar = () => {

  
  // para manejar las funciones de navbar
  useEffect(() => {
    
    let menu = document.querySelector('.toggle');
    let navigate = document.querySelector('.navigate');
    let main = document.querySelector('.main');
    let contenid_menu = document.querySelector('.contenido-menu');
    menu.onclick = function(){
      navigate.classList.toggle('active');
      main.classList.toggle('active');
      contenid_menu.classList.toggle('active');
      
    }
  
  
    // agregar la clase hovered en el list item seleccionado
    
    let list = document.querySelectorAll('.navigate li');
    console.log(list[0]);
  
    function activeLink(){
      list.forEach((item) => item.classList.contains('hovered'));
      this.classList.add('hovered');
    }

    function overNavigate(){
      navigate.classList.remove('active');
      main.classList.remove('active');
      contenid_menu.classList.remove('active');
    }

    function quitarActive(){
      // if(this.tieneClass){
      //   list.forEach(item => item.classList.contains('hovered'));
      // }
    }

    function deativeLink(){
      navigate.classList.add('active');
      main.classList.add('active');
      contenid_menu.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('click', activeLink));
    list.forEach((item) => item.addEventListener('mouseover', quitarActive));

    navigate.addEventListener('mouseover', overNavigate);
    navigate.addEventListener('mouseleave', deativeLink);

    
    
  }, [])
  
  
  return (
    <div className='contenedor'>
      <div className="navigate">
        <ul>
          <li>
            <NavLink className="navlink" to="/home/dashboard">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#fff">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
              </span>
              <span className="title">VT PROYECTOS</span>
            </NavLink>
          </li>
          <li>
              <NavLink className="navlink" to="/home/dashboard" end>
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28"
                        fill="#fff" bbox="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z" />
                    </svg>
              </span>
              <span className='title' >Dashboard</span>
              </NavLink>
          </li>
          <li>
            <NavLink 
              to="/home/notas"
              end
            className="navlink"
              
            >
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28" fill="#fff">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z" />
                    </svg>
              </span>
              
                <span className='title'>Notas</span>
              </NavLink>
          </li>
          <li>
            <NavLink to="/home/firmas" end className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28" fill="#fff">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                    </svg>
              </span>
              <span className="title">Firmas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/facturas" end className="navlink">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28"
                    fill="#FFFFFF">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
              </span>
              <span className="title">Facturas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/proyeccion" end className="navlink" >
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="28"
                        viewBox="0 0 24 24" width="28" fill="#FFFFFF">
                        <g>
                            <rect fill="none" height="24" width="24" x="0" />
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2 c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11c-0.18,0-0.36-0.02-0.52-0.07l-4.55,4.56 C4.98,15.65,5,15.82,5,16c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9 c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55C14.64,12.02,14.82,12,15,12c0.18,0,0.36,0.02,0.52,0.07 l3.55-3.56C19.02,8.35,19,8.18,19,8c0-1.1,0.9-2,2-2S23,6.9,23,8z M23,8c0,1.1-0.9,2-2,2c-0.18,0-0.35-0.02-0.51-0.07l-3.56,3.55 C16.98,13.64,17,13.82,17,14c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-0.18,0.02-0.36,0.07-0.52l-2.55-2.55C10.36,10.98,10.18,11,10,11 c-0.18,0-0.36-0.02-0.52-0.07l-4.55,4.56C4.98,15.65,5,15.82,5,16c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2 c0.18,0,0.35,0.02,0.51,0.07l4.56-4.55C8.02,9.36,8,9.18,8,9c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.18-0.02,0.36-0.07,0.52l2.55,2.55 C14.64,12.02,14.82,12,15,12c0.18,0,0.36,0.02,0.52,0.07l3.55-3.56C19.02,8.35,19,8.18,19,8c0-1.1,0.9-2,2-2S23,6.9,23,8z" />
                            </g>
                        </g>
                    </svg>
              </span>
              <span className="title">Proyeccion</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/dashboard" end className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="28"
                        viewBox="0 0 24 24" width="28" fill="#FFFFFF">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4h16V7z" />
                                <rect height="2" width="6" x="9" y="12" />
                            </g>
                        </g>
                    </svg>
              </span>
              <span className="title">Compras</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/dashboard" end className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="28"
                        viewBox="0 0 24 24" width="28" fill="#FFFFFF">
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g />
                            <g>
                                <path
                                    d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z" />
                            </g>
                        </g>
                    </svg>
              </span>
              <span className="title">Inventario</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/dashboard" className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="28"
                        viewBox="0 0 24 24" width="28" fill="#FFFFFF">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                            <g>
                                <path
                                    d="M8,17h2v-1h1c0.55,0,1-0.45,1-1v-3c0-0.55-0.45-1-1-1H8v-1h4V8h-2V7H8v1H7C6.45,8,6,8.45,6,9v3c0,0.55,0.45,1,1,1h3v1H6v2 h2V17z M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M20,18H4V6h16V18z M14,10l2-2l2,2 M18,14.25l-2,2l-2-2" />
                            </g>
                        </g>
                    </svg>
              </span>
              <span className="title">Fondos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/dashboard" className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28"
                        fill="#FFFFFF">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z" />
                    </svg>
              </span>
              <span className="title">Clientes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/dashboard" end className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="28"
                        viewBox="0 0 24 24" width="28" fill="#FFFFFF">
                        <g>
                            <rect fill="none" height="24" width="24" y="0" />
                        </g>
                        <g>
                            <g>
                                <rect height="1.5" width="4" x="14" y="12" />
                                <rect height="1.5" width="4" x="14" y="15" />
                                <path
                                    d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,7V4h2v3v2h-2V7z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z" />
                                <circle cx="9" cy="13.5" r="1.5" />
                                <path
                                    d="M11.08,16.18C10.44,15.9,9.74,15.75,9,15.75s-1.44,0.15-2.08,0.43C6.36,16.42,6,16.96,6,17.57V18h6v-0.43 C12,16.96,11.64,16.42,11.08,16.18z" />
                            </g>
                        </g>
                    </svg>
              </span>
              <span className="title">Empleados</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/dashboard" end className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="0 0 24 24" height="28px" viewBox="0 0 24 24" width="28"
                        fill="#fff">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
              </span>
              <span className="title">Depreciacion</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/dashboard" end className="navlink">
              <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="0 0 24 24" height="28px" viewBox="0 0 24 24" width="28"
                        fill="#fff">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
              </span>
              <span className="title">Maximum</span>
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="main">
        <div className="topbar">
          <div className="toggle">
            <svg  xmlns="http://www.w3.org/2000/svg" height="100"
                viewBox="0 0 24 24" width="30" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </div>
          <div className="user">
            <img src="/assets/img/foto_perfil_empleado.png" alt="usuario" />
          </div>
        </div>
      </div>
    </div>
  )
}
