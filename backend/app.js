// imports
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import tests from "./routes/testRoutes.js";
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors()); // Enables CORS (allows requests from other domains)

// Logging HTTP requests
if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined')); // Detailed logs for production
} else {
    app.use(morgan('dev')); // Simpler logs for development
}

app.use(express.json()); // Middleware to parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

app.set('view engine', 'ejs'); // Sets EJS as the templating engine
app.set('views', path.join(path.resolve(), 'views')); // Sets the 'views' folder for EJS templates

app.use(express.static(path.join(path.resolve(), 'public'))); // Set folder for static files (CSS, images, JS files, etc.)

app.use("/test", tests);

// Hello world route
app.get("/", (req, res) => {
    const data = {
        data: {
            msg: "Hello World"
        }
    };

    res.json(data);
});

// Start server
const server = app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

export default server;
