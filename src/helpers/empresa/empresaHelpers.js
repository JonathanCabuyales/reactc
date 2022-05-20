import axios from 'axios';
import { enviroments } from '../../envirments/enviroments';

export const getEmpresa = (token) =>{
    return axios.get(`${enviroments.baseUrl}/empresa/empresa_get.php?token=${ token }`);
}