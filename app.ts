import express from "express";
import toDoRoutes from "./routes/todos";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(toDoRoutes);

app.listen(3000);
