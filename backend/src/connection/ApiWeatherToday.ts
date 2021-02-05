import axios from 'axios';

import config from '../../endpoints.config';

import { ResultWeather } from '../protocols/information';

export const ApiWeatherToday = async (city: string): Promise<ResultWeather> => {
    const res = await axios.get(`${config.url}/current?access_key=${config.acess_key}&query=${city}`);
    
    if(res.data.success === false)
        return {
            data: res.data,
            code: 404
        };

    return {
        data: res.data,
        code: 200
    };
};