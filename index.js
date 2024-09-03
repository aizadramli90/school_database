import express from 'express';
import 'dotenv/config';
import healthController from './controller/health';

const app = express();
const PORT = process.env.PORT;


app.get("/health", healthController.get);
app.post("/health", healthController.post);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});