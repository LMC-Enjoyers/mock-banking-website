"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "src/App.tsx")));
app.listen(5050);
exports.default = app;
//# sourceMappingURL=app.js.map