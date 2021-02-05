import express from 'express';

import route from './routes';

const app = express();
const PORT = 3000;

app.use(route);
app.listen(PORT, () => {
    console.log(`[localhost:${PORT}]: Server is running`);
});