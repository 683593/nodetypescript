"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const config_1 = require("./config");
app_1.default.listen(config_1.default.port, (err) => {
    if (err)
        console.log("Something wrong");
    console.log("Hurray server is runnig on  port: " + config_1.default.port);
});
//# sourceMappingURL=server.js.map