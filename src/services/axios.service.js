import axios from "axios";
// import {baseURL} from "../configs/urls";

const baseURL = process.env.REACT_APP_API_URL


const axiosService = axios.create({baseURL})

export {
    axiosService,
}