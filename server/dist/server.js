"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const hostname = "127.0.0.1";
const port = 5050;
app_1.default.listen(port, hostname, () => {
    console.log("server is working");
    console.log(`http://${hostname}:${port}/`);
});
//# sourceMappingURL=server.js.map