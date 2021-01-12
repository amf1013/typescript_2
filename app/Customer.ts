/// <reference path="User.ts"/>

class Customer implements User {
    forenames: string;
    surname: string;
    nickname: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved: Date;
    locked: boolean;
    failedLoginAttempts: number;

    // firstName: (forenames: string) => string;
    // fullName: (forenames: string, surname: string) => string;

    lastLoginDate: Date;
}