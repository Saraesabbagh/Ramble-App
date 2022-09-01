"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const bluebird_1 = __importDefault(require("bluebird"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.static(path_1.default.join(__dirname, "/react-frontend")));
const mongoDbUrl = "mongodb://0.0.0.0/Ramble";
mongoose_1.default.Promise = bluebird_1.default;
mongoose_1.default.connect(mongoDbUrl).then(() => { console.log("Database connection worked "); }).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});
/**
 * API Routes.
 */
app.get("/api/");
app.post("/api/signup");
/**
* Handles all other routes
*/
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "react-frontend/public/index.html"));
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map