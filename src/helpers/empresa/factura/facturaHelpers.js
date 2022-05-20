import axios from "axios"
import { enviroments } from "../../../envirments/enviroments"

export const getSecuencial = (token) =>{
    return axios.get(`${enviroments.baseUrl}/libreria_2021/factura_get_secuencial.php?token=${token}`);
}