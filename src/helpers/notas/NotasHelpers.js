// import React from 'react'

import axios from "axios"
import { enviroments } from "../../envirments/enviroments"

export const traerNotas = (token) =>{
    return axios.get(`${enviroments.baseUrl}/notas/notas_get.php?token=${ token }`);
}