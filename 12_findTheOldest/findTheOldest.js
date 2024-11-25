
// ---ORIGINAL ANSWER (PASSED)---

// const findTheOldest = function(people) {
//     let currYear = new Date().getFullYear();
//     let oldestAge = 0;

//     let completedCreds = people.map((person) => {
//         if(!("yearOfDeath" in person)){
//             person["yearOfDeath"] = currYear;
//         }
//         return person;
//     });

//     return completedCreds.reduce((oldestPerson, person) => {
//         let currentAge = person.yearOfDeath - person.yearOfBirth;
//         if(currentAge > oldestAge){
//             oldestAge = currentAge;
//             return person;
//         }
//         return oldestPerson;
//     }, people[0]);
// };

function getAge(person){
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people){
    return people.reduce((oldestPerson, currPerson) => {
        return getAge(oldestPerson) > getAge(currPerson) ? oldestPerson : currPerson;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
