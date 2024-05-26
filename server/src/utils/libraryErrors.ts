export class UnableToSaveUserError extends Error {
    constructor(message:string){
        super(message);
    }
}

export class InvalidUsernameOrPasswordError extends Error{
    constructor(message:string){
        super(message);
    }
}


export class UserDoesNotExistError extends Error{
    constructor(message:string){
        super(message);
    }
}
