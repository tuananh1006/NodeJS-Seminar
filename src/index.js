import express from 'express';
import { envConfig } from './constants/config.js';

const app = express();
const PORT = envConfig.port;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});