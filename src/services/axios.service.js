import axios from "axios";
import {baseURL} from "../configs/urls";

// const baseURL = process.env.NODE_ENV === "production" ? prodURL : devURL;


const axiosService = axios.create({baseURL})

export {
    axiosService,
}