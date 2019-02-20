"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Home {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', (req, resp) => {
            resp.json("You are at Home!!!!!!!");
        });
    }
}
exports.default = new Home().router;
//# sourceMappingURL=home.js.map