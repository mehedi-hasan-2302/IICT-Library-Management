"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const AuthControllers_1 = __importDefault(require("../controllers/AuthControllers"));
const Validation_1 = require("../middlewares/Validation");
const router = express_1.default.Router();
router.post("/register", (0, Validation_1.ValidateSchema)(Validation_1.Schemas.user.create), AuthControllers_1.default.handleRegister);
router.post("/login", (0, Validation_1.ValidateSchema)(Validation_1.Schemas.user.login), AuthControllers_1.default.handleLogin);
module.exports = router;
