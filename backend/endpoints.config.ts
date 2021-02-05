import * as dotenv from 'dotenv';

dotenv.config();

export default {
    url: process.env.URL ?? '',
    acess_key: process.env.ACCESS_KEY ?? ''
};