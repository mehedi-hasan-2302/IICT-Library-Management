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
//CRUD methods
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let users = yield (0, UserServices_1.findAllUsers)();
            res.status(200).json({ message: "Users retrieved successfully", users });
        }
        catch (error) {
            res.status(500).json({ message: "Unable to retrieve users at this time", error: error.message });
        }
    });
}
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.userId;
        try {
            let user = yield (0, UserServices_1.findUserById)(userId);
            res.status(200).json({ message: "User found successfully", user });
        }
        catch (error) {
            if (error instanceof libraryErrors_1.UserDoesNotExistError) {
                res.status(404).json({ message: "User requested does not exist" });
            }
            else {
                res.status(500).json({ message: "Could not find user", error: error.message });
            }
        }
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        try {
            let updateUser = yield (0, UserServices_1.modifyUser)(user);
            res.status(202).json({ message: "User updated successfully", user: updateUser });
        }
        catch (error) {
            if (error instanceof libraryErrors_1.UserDoesNotExistError) {
                res.status(404).json({ message: "User requested does not exist" });
            }
            else {
                res.status(500).json({ message: "Unable to update user currently", error: error.message });
            }
        }
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let userId = req.params.userId;
        try {
            yield (0, UserServices_1.removeUser)(userId);
            res.status(202).json({ message: "User deleted successfully" });
        }
        catch (error) {
            if (error instanceof libraryErrors_1.UserDoesNotExistError) {
                res.status(404).json({ message: "User requested does not exist" });
            }
            else {
                res.status(500).json({ message: "Unable to delete user at this time", error: error.message });
            }
        }
    });
}
exports.default = { getAllUsers, getUserById, updateUser, deleteUser };
