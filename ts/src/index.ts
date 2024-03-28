import express, {Application, Request, Response} from "express";
import {routes} from './routes/routes';
import {tryExecute} from "./model/Utils";

// Create express app
const app: Application = express();

// Middlewares
app.use(express.json({limit: '50mb', type: 'application/json'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));


// Routes
app.get("/", tryExecute, (req: Request, res: Response) => {
    res.json({
        message: "Welcome to the API!",
    });
});

// setup routes
app.use(tryExecute, routes);

// Start server & listen to port
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
