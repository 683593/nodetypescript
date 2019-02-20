"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const products_1 = require("./components/products");
const home_1 = require("./components/home");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.route();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }
    route() {
        let router;
        router = express.Router();
        this.app.use('/', home_1.default);
        this.app.use('/api/v1/products', products_1.default);
        // this.app.use('/', router);
        // this.app.use('/', router);
        // this.app.use('/', router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map