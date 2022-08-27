import express from "express";
import cors from "cors";
import helmet from "helmet";
import playerRouter from "./routes/player";

const port = 3500;
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use("/players", playerRouter);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})