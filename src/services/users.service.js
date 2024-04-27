import {axiosService} from "./axios.service";
import {urls} from '../configs/urls';

const usersService = {
    signUp: (user) => axiosService.post(urls.users.registration, {user}),
    logIn: (user) => axiosService.post(urls.users.logIn, {user}),
    logOut: () => localStorage.removeItem('userId'),
    getUser: () => localStorage.getItem('userId'),
}

export {usersService}