import axios from 'axios';
import * as URL from "../utils/url";

export const countryfetch = () => {
    return axios.get(`${URL.getCountries}`);
}