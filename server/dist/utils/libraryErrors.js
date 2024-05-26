"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidUsernameOrPasswordError = exports.UnableToSaveUserError = void 0;
class UnableToSaveUserError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UnableToSaveUserError = UnableToSaveUserError;
class InvalidUsernameOrPasswordError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidUsernameOrPasswordError = InvalidUsernameOrPasswordError;
