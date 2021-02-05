import { MissingParamError } from '../errors/missing-param-erros';

import { badRequest } from '../helper/http-helper';

import { getTemp } from '../commands/getTemp';
import { Request, Response } from 'express';

function GetTempWeather(req: Request, res: Response){
    const { city } = req.params;
    
    if(!city){
        const response = badRequest(new MissingParamError('city'));
        return res.status(response.status).json(response);
    };

    const response = getTemp(city);
    return res.status(response.status).json(response.body);
};

export default GetTempWeather;