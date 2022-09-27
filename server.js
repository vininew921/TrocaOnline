const express = require("express");
var history = require("connect-history-api-fallback");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
app.listen(port);

console.log(`Application started using port ${port}`);
