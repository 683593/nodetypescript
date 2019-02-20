import { Router, Request, Response, NextFunction } from "express";
class Home {
    public router: Router;
    constructor() {
        this.router = Router();
        this.router.get('/', (req: Request, resp: Response) => {
            resp.json("You are at Home!!!!!!!");
        });
    }

    //console.log("Home is called");
    // console.log("Welcome to HOME!!!");
}
export default new Home().router;