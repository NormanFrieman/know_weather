import axios from 'axios';

import config from '../../endpoints.config';

import { ResultWeather } from '../protocols/http';

export const acessApiWeather = async (city: string): Promise<ResultWeather> => {
    const response = await axios.get(`${config.url}/current?access_key=${config.acess_key}&query=${city}`);
    
    if(response.data.success === false)
        return {
            data: response.data,
            code: 404
        };

    return {
        data: response.data,
        code: 200
    };
};