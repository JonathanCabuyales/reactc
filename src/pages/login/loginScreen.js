import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { loginSuccess } from '../../actions/authAction';
import { useForm } from '../../hooks/hookForms';


export const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { token } = useSelector(state => state.auth);
    const {formState, onInputChange} = useForm({usuario: '', contrasenia: ''});

    const {usuario, contrasenia} = formState;
    console.log(token);

    const enviarFormulario = (e) =>{
        e.preventDefault();
        Swal.fire({
            title: 'Verificando credenciales',
            backdrop: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            allowEnterKey: false,
            icon: 'info',
            didOpen: () =>{
                Swal.showLoading()
            }
        });
        console.log(e);
        dispatch( loginSuccess(usuario, contrasenia) );
        console.log(usuario, contrasenia);
    }
    if(token.length > 0){
        
        setTimeout(() => {
            Swal.close();
            navigate('/home/dashboard', { replace: true });

        }, 1200);
    }

    // funcion para presionar el enter
    const keyEnter = (e) =>{
        e.preventDefault();
        if(e.code === 'Enter' && e.which === 13){
            enviarFormulario(e);
        }
        console.log(e);
    }
  return (
    <>
        
        <div className='login1'>

            <video src='assets/video/VT1.mp4' muted autoPlay loop preload='auto'></video>

            <div className='login'>
                <div className='inputs'>
                    <h2>Inicio de Sesión</h2>
                    <input type='text' placeholder='Usuario' name='usuario' value={ usuario } onChange={ onInputChange } />
                    <br />
                    <input type='password' placeholder='Contraseña' name='contrasenia' value={ contrasenia } onChange={ onInputChange } onKeyUp={ keyEnter }  />
                    <br />
                    <button type='button' className='btn btn-primary' onClick={(e) =>enviarFormulario(e)}>Ingresar</button>
                </div>
            </div>
        </div>
    </>
  )
}
