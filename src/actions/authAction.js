import { getDataByToken, userService } from "../helpers/auth/authHelpers";
import { setlogin } from "../reducers/authReducer";

export const loginSuccess = (usuario, contrasenia) =>{
    return async (dispatch) =>{
        const user = await userService(usuario, contrasenia);
        // console.log(user.data);
        if(user.data){
            const dataUser = await getDataByToken(user.data.access_token);
            // console.log(dataUser);
            if(dataUser.data){
                let enviar = {
                    ...user.data,
                    id: dataUser.data.data.id,
                    rol: dataUser.data.data.rol
                };
                // console.log(enviar);

                dispatch(setlogin(enviar));
            }
        }
    }
}
