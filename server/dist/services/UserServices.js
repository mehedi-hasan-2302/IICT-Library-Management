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
exports.register = register;
exports.login = login;
exports.findAllUsers = findAllUsers;
exports.findUserById = findUserById;
exports.modifyUser = modifyUser;
exports.removeUser = removeUser;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../config");
const UserDao_1 = __importDefault(require("../daos/UserDao"));
const libraryErrors_1 = require("../utils/libraryErrors");
function register(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const ROUNDS = config_1.config.server.rounds;
        try {
            const hashedPassword = yield bcrypt_1.default.hash(user.password, ROUNDS);
            const saved = new UserDao_1.default(Object.assign(Object.assign({}, user), { password: hashedPassword }));
            return yield saved.save();
        }
        catch (error) {
            throw new libraryErrors_1.UnableToSaveUserError(error.message);
        }
    });
}
function login(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = credentials;
        try {
            const user = yield UserDao_1.default.findOne({ email });
            if (!user) {
                throw new libraryErrors_1.InvalidUsernameOrPasswordError("Invalid username or password");
            }
            else {
                const validatePassword = yield bcrypt_1.default.compare(password, user.password);
                if (validatePassword) {
                    return user;
                }
                else {
                    throw new libraryErrors_1.InvalidUsernameOrPasswordError("Invalid username or password");
                }
            }
        }
        catch (error) {
            throw error;
        }
    });
}
function findAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield UserDao_1.default.find();
            return users;
        }
        catch (error) {
            return [];
        }
    });
}
function findUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserDao_1.default.findById(userId);
            if (user)
                return user;
            throw new libraryErrors_1.UserDoesNotExistError("User does not exist with this ID");
        }
        catch (error) {
            throw error;
        }
    });
}
function modifyUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = yield UserDao_1.default.findByIdAndUpdate(user._id, user, { new: true });
            if (!id)
                throw new libraryErrors_1.UserDoesNotExistError("User does not exist with this ID");
            return user;
        }
        catch (error) {
            throw error;
        }
    });
}
function removeUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let deleted = yield UserDao_1.default.findByIdAndDelete(userId);
            if (!deleted)
                throw new libraryErrors_1.UserDoesNotExistError("User does not exist with this ID");
            return "User deleted successfully";
        }
        catch (error) {
            throw error;
        }
    });
}
