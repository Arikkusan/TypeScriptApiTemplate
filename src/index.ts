import express, {Application, Request, Response} from "express";
import {routes} from './routes/routes';
import {tryExecute} from "./model/Utils";

// path to the folder of your web pages
const PAGE_FOLDER_PATH = __dirname + '/../public/pages/';

// Create express app
const app: Application = express();
const cookieParser = require('cookie-parser');

// Middlewares
app.use(cookieParser());
app.use(express.json({limit: '50mb', type: 'application/json'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));


// Routes
app.get("/api", tryExecute, async (req: Request, res: Response) => {
    res.json({
        message: "Welcome to the API!"
    });
});

// setup routes
app.use('/api', tryExecute, routes);


// Static files access
app.use(express.static('public'));

app.get('/:pageName', tryExecute, async (req: Request, res: Response) => {

    // Return the file in the pages folder if the name is valid otherwise return 404 page
    res.sendFile(req.params.pageName + '.html', {root: PAGE_FOLDER_PATH}, e => {
        if (!e) return;

        res.sendFile('404.html', {root: PAGE_FOLDER_PATH}, e => {
            if (e) res.status(500).send(e);
        });

    });
});


// Start server & listen to port
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\nVisit http://localhost:${PORT} to view the app.\nPress CTRL + C to stop the server. \n`);
});
