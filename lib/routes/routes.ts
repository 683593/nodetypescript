
import Products from "../components/products";
import Categories from "../components/categories";
import Home from "../components/home";

export class Routes {
    public routes(app):void {
        app.use('/api', Home);
        // app.use('/api/v1/products', Products);
        // app.use('/api/v1/categories', Categories);
    }

}
//export default new Routes();