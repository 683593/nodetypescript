"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("../components/home");
class Routes {
    routes(app) {
        app.use('/api', home_1.default);
        // app.use('/api/v1/products', Products);
        // app.use('/api/v1/categories', Categories);
    }
}
exports.Routes = Routes;
//export default new Routes();
//# sourceMappingURL=routes.js.map