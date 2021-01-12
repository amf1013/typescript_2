"use strict";
function firstName(firstNames, lastName) {
    var spaceIndex = firstNames.indexOf(" ");
    var name = firstNames.slice(0, spaceIndex);
    return name;
}
var user = {
    forenames: 'Alexander Mark',
    surname: 'Farrell',
    nickname: 'Alex',
    emailAddress: 'alex.farrell@email.com',
    role: 'IT guy',
    dateCreated: new Date("1994-12-06"),
    dateRemoved: new Date("2000-01-01"),
    locked: true,
    failedLoginAttempts: 3
};
//# sourceMappingURL=app.js.map