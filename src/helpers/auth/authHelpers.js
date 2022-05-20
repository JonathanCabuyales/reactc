import axios from "axios";
import { enviroments } from "../../envirments/enviroments";
// import { setlogin } from "../reducers/authReducer";

const userService = (usuario, pass) => {
    return axios.get(`${enviroments.baseUrl}/login/login.php?usuario=${usuario}&password=${pass}`);
}

const getDataByToken = (token) =>{
    return axios.get(`${enviroments.baseUrl}/login/login_data_get.php?token=${token}`);
}

export {
    userService,
    getDataByToken
}

