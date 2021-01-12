interface User {
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;

    
    function firstName(firstNames: string, lastName: string): string {
        const spaceIndex: number = firstNames.indexOf(" ");
        const name: string = firstNames.slice(0, spaceIndex);
        return name;
    }
    // firstName: (forenames: string) => string;
    // fullName: (forenames: string, surname: string) => string;
}