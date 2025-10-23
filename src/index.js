import express from "express";
import { envConfig } from "./constants/config.js";
import databaseService from "./services/database.service.js";
import usersRouter from "./routes/users.routes.js";

const app = express();
const PORT = envConfig.port;
databaseService.connect();

app.use(express.json());
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
