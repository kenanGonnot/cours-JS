// Create constants here
// =====================================

const hoursPerDay = 24;
let numberOfHours = 22;
let isItGood = true;
// let firstName = "Adam";
// let lastName = "Padam"
// let wholeName = firstName + " " + lastName;
// console.log(wholeName);


const myName = `Alexander`;
const salutation = `Bienvenue sur mon site ${myName}!`;
// console.log(salutation);

console.log("\n===========================================================\n");
// =====================================
let person = {
    firstName: "Adam",
    lastName: "Padam",
    numberOfHours: 22,
    isItGood: true
}

let personName = person.firstName + " " + person.lastName;
let personHours = person["numberOfHours"];

// console.log(personName);
// console.log(personHours);

// Creation d'une classe here
// =====================================
console.log("\n===========================================================\n");

class people {
    constructor(firstName, lastName, numberOfHours, isItGood) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberOfHours = numberOfHours;
        this.isItGood = isItGood;
    }

}

let myPeople = new people("Adam", "Padam", 22, true);
console.log(myPeople)
console.log("\n===========================================================\n");

// =====================================
// Array
let guests = ["Adam", "Padam", "John", "Jane"];
console.log(guests);

let firstGuests = guests[0];
console.log(firstGuests);
console.log("\n===========================================================\n");

let artistProfile = {
    name: "Tao Perkington",
    age: 27,
    available: true
};
let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
artistProfile.available = false; // modification de l'objet
console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }


guests.push("Kikiki"); // ajout d'un élément à la fin du tableau
console.log(guests);
let howManyGuests = guests.length;
console.log("number of guests : " + howManyGuests)
guests.unshift("Kikiki"); // ajout d'un élément au début du tableau
guests.pop(); // suppression d'un élément à la fin du tableau
console.log(guests);
console.log("number of guests : " + howManyGuests)
console.log("\n===========================================================\n");
// =====================================
// condition if else

const numberOfSeats = 30;
const numberOfGuests = 25;
if (numberOfGuests < numberOfSeats) {
// autoriser plus d'invités
} else {
// ne pas autoriser de nouveaux invités
}

// La difference entre "==" et "===" est que "==" est un opérateur de comparaison, et "===" est un opérateur de comparaison stricte.
// Exemple :
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false

// Exemple de condition
let userLoggedIn = true;
let UserHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

// userLoggedIn && userHasPremiumAccount; // true
// userLoggedIn && userHasMegaPremiumAccount; // false
//
// userLoggedIn || userHasPremiumAccount; // true
// userLoggedIn || userHasMegaPremiumAccount; // true
//
// !userLoggedIn; // false
// !userHasMegaPremiumAccount; // true

// autre exemple de condition if else
// let userLoggedIn = true;
// let welcomeMessage = ''; // déclarer la variable ici
//
// if (userLoggedIn) {
//     welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
// } else {
//     welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
// }
//
// console.log(welcomeMessage); // imprime 'Welcome back!'


// =====================================
// Instruction switch

let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');

        break;
    case 'premium':
        console.log('You have a premium account!');

        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;

    default:
        console.log('Unknown account type!');
}

console.log("\n===========================================================\n");


// =====================================
// for loop
const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
    console.log("Passager embarqué !");
}
console.log("\n===========================================================\n");

// for in loop
const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
    console.log("Embarquement du passager " + passengers[i]);
}
console.log("\n===========================================================\n");

// for of loop
for (let passenger of passengers) {
    console.log("Embarquement du passager " + passenger);
}
console.log("\n===========================================================\n");

// autre exemple for loop
const passengers2 = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },

    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },

    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },

    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers2) {
    console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}
console.log("\n===========================================================\n");


// =====================================
// while loop
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges
console.log("\n===========================================================\n");


// =====================================

// try catch
try {
// code susceptible à l'erreur ici
} catch (error) {
// réaction aux erreurs ici
}

// =====================================

// function declaration

function afficherDeuxValeurs(valeur1, valeur2) {
    console.log('Première valeur:' + valeur1);
    console.log('Deuxième valeur:' + valeur2);
}

// On exécute la fonction
afficherDeuxValeurs(12, 'Bonjour');
console.log("\n===========================================================\n");

function meaningless() {
    let sum = 0;
    for (let rating of ratings) {
        sum += rating;
    }
    return sum / ratings.length;
}

// =====================================

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    showBalance() {
        console.log(this.owner + ' has ' + this.balance + '€');
    }

    deposit(amount) {
        console.log(this.owner + ' deposit ' + amount + '€');
        this.balance += amount;
        this.showBalance();
    }

    withDraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            console.log(this.owner + ' withdraw ' + amount + '€');
            this.balance -= amount;
            this.showBalance();
        }
    }
}

const newBankAccount = new BankAccount('Will Alexander', 100);

newBankAccount.showBalance(); // imprime Will Alexander has 100€
console.log("\n")
newBankAccount.deposit(50); // imprime Will Alexander deposit 50€
console.log("\n")
newBankAccount.withDraw(20); // imprime Will Alexander withdraw 20€

console.log("\n===========================================================\n");

// =====================================

const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]

const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495
const roundMeUp = Math.ceil(495.966); // arrondit vers le haut à l'entier le plus proche, renvoie 496
const roundMe = Math.round(495.966); // arrondit au nombre entier le plus proche, renvoie 496

console.log(roundMeDown); // imprime 495
console.log(roundMeUp); // imprime 496
console.log(roundMe); // imprime 496
console.log("\n===========================================================\n");

// =====================================

class BePolite {

    static sayHello() {
        console.log("Hello!");
    }

    static sayHelloTo(name) {
        console.log("Hello " + name + "!");
    }

    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // imprime "Hello!""

BePolite.sayHelloTo("Will"); // imprime "Hello Will!""

const sum = BePolite.add(2, 3); // sum = 5

console.log("sum = " + sum);

console.log("\n===========================================================\n");

// =====================================

// exemple refactorisation et regex

const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    return wordArray.length;
}

const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    let totalLetters = 0;

    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
    }

    return totalLetters;
}

const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
}

const printStringStats = (stringToTest) => {
    console.log({
        wordCount: getWordCount(stringToTest),
        letterCount: getLetterCount(stringToTest),
        averageWordLength: getAverageWordLength(stringToTest)
    })
}

// printStringStats();
// =====================================

// commentaire
/*
** renvoie la longueur moyenne des mots
** arrondie à deux chiffres après la virgule
*/

// =====================================




