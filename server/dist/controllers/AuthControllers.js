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
Object.defineProperty(exports, "__esModule", { value: true });
const UserServices_1 = require("../services/UserServices");
const libraryErrors_1 = require("../utils/libraryErrors");
const handleRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const registeredUser = yield (0, UserServices_1.register)(user);
        res.status(201).json({
            message: "User successfully created",
            user: {
                _id: registeredUser._id,
                type: registeredUser.type,
                firstName: registeredUser.firstName,
                lastName: registeredUser.lastName,
                email: registeredUser.email
            }
        });
    }
    catch (error) {
        if (error.message.includes("E11000 duplicate key error collection:")) {
            res.status(409).json({ message: "User with this email already exists", error: error.message });
        }
        else {
            res.status(500).json({ message: "Unable to register user at this time", error: error.message });
        }
    }
});
function handleLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = req.body;
        try {
            const loggedIn = yield (0, UserServices_1.login)(credentials);
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    _id: loggedIn._id,
                    type: loggedIn.type,
                    firstName: loggedIn.firstName,
                    lastName: loggedIn.lastName,
                    email: loggedIn.email
                }
            });
        }
        catch (error) {
            if (error instanceof libraryErrors_1.InvalidUsernameOrPasswordError) {
                res.status(401).json({ message: "Unable to login user at this time", error: error.message });
            }
            else {
                res.status(500).json({ message: "Unable to login user at this time!", error: error.message });
            }
        }
    });
}
exports.default = { handleRegister, handleLogin };
