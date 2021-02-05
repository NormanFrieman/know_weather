import express from 'express';

import GetTempWeather from './controllers/getTempWeather';

const route = express.Router();

route.get('/getWeather/:city', (req, res) => GetTempWeather(req, res));

export default route;