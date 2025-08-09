"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const PORT = config_1.config.server.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://frontend-domain.vercel.app']
        : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true
}));
// Initialize database connection
let isConnected = false;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        if (isConnected)
            return;
        try {
            yield mongoose_1.default.connect(config_1.config.mongo.url, {
                w: "majority",
                retryWrites: true,
                authMechanism: "DEFAULT"
            });
            isConnected = true;
            console.log("Connection to MongoDB successfully made");
        }
        catch (error) {
            console.log("Could not make a connection to the database!", error);
            throw error;
        }
    });
}
// Register routes
(0, routes_1.registerRoutes)(app);
// Health check endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'IICT Library Management API is running!' });
});
// For Vercel serverless functions
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase();
    return app(req, res);
});
// For local development
if (process.env.NODE_ENV !== 'production') {
    (function startup() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectToDatabase();
                app.listen(PORT, () => {
                    console.log(`Server is running on port ${PORT}`);
                });
            }
            catch (error) {
                console.log("Could not start the server!", error);
            }
        });
    })();
}
