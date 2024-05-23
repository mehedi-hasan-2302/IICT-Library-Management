export interface IUser {
    type: 'ADMIN' | 'EMPLOYEE' | 'STUDENT';
    firstName:string;
    lastName:string;
    email:string;
    password:string; 
}