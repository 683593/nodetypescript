import app from "./app";
import Config from "./config";
app.listen(Config.port, (err) => {
    if (err) console.log("Something wrong")
    console.log("Hurray server is runnig on  port: " + Config.port)
});