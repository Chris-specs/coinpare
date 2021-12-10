import axios from "axios";

export const cryptoInstance = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data'
})