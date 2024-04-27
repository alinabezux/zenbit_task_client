import {axiosService} from "./axios.service";

import {urls} from '../configs/urls';

const itemsService = {
    getItems: () => axiosService.get(urls.items)
}

export {itemsService}
