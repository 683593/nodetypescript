import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import Products from "./components/products";
import Home from "./components/home";

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.route();
    }
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    private route(): void {
        let router: express.Router;
        router = express.Router();
        this.app.use('/', Home);
        this.app.use('/api/v1/products', Products);
        // this.app.use('/', router);
        // this.app.use('/', router);
        // this.app.use('/', router);
    }

}

export default new App().app;