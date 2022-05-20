import axios from "axios"
import { enviroments } from "../../envirments/enviroments"

export const getFirmas = (token) => {
    return axios.get(`${enviroments.baseUrl}/firmas/firmas_get.php?token=${token}`);
}