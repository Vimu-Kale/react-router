import axios from 'axios';
import * as URL from "../utils/url";

export const unifetch = (collegeName,country) => {
  return axios.get(`${URL.getColleges}${collegeName}${country?"&country="+country:""}`);
}

export const countryunifetch = (country) => {
  return axios.get(`http://universities.hipolabs.com/search?country=${country}`);
}

