import express from 'express';
import cors from 'cors';

import route from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(route);
app.listen(PORT, () => {
    console.log(`[localhost:${PORT}]: Server is running`);
});