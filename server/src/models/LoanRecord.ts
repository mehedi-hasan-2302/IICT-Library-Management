export interface ILoanRecord {
    status: 'AVAILABLE' |  'LOANED';
    loanedDate: Date;
    dueDate: Date;
    returnedDate?: Date;
    student: string;
    employeeOut: string;
    employeeIn?: string;
    item: string;

}