

//kiedy trzeba deklarować zmienną, a kiedy nie ? Jaka jest różnica ?
//Czemu w 11 / 32 przeszło ? Nie powinno tam być let ?
    
    

//z deklaracją zadanie 13/32 moduł 2//
function slugify(title) {
  // Change code below this line

  let slug = title.toLowerCase().split(" ").join("-");
  return slug

  // Change code above this line
    }




//bez deklaracji zadanie 11/32 moduł 2//
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line

engraving = message.split(" ").length * pricePerWord;
return engraving


   // Change code above this line
}

// PYTANIE NR 2:
// w jaki sposób ładnie rozszerzyć poniższy kod, 
// aby wyświetliły się wszystkie słowa,
// które mają ilość znaków równą najdłuższemu słowu,
// np. "ab cde fgh ij klm":


// function findLongestWord(string) {

// let longestWord = "";
// let word = string.split(" ");
// for (let i = 0; i < word.length; i++) {
//   if (word[i].length > longestWord.length) {
    
//     longestWord = word[i];
//   }
// }
// return longestWord;

// }


// zmodyfikowany kod:
function findLongestWord(string) {

let longestWord = "";
let word = string.split(" ");
for (let i = 0; i < word.length; i++) {
  if (word[i].length > longestWord.length) {
    
    longestWord = word[i];
  }
}
    if (word[i].length === [i]) {

    }
    return longestWord;

}
console.log(findLongestWord("ab cde fgh ij klm"));



if (word[i] === word.length) {

}

//------------------------------------------------------
//obiekty ->
//Odwołanie się do właściwości za pomocą nawiasów kwadratowych
//(jaka jest różnica, o co z tym chodzi)
//------------------------------------------------------



//------------------------------------------------------
//Czy poniższą destrukturyzację można zrobić w inny sposób ?
//const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Tablica obiektów z imionami Mango i Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Tablica z jednym obiektem Ajax

// // W funkcji callback wygodnie jest destrukturyzować właściwości obiektu
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Tablica obiektów z imionami Poly i Houston
//------------------------------------------------------------------------


// metody tablic  reduce()
// Poniższe działa trochę jak a + b + c + d...,
//ale zamiast wypisywać to się iteruje aż do końca.
//A czy można to zapisac np. za pomocą ...rest? np. (a + ...rest)?

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// # Na początku metoda reduce() tworzy wewnętrzną zmienną-akumulator i
// # przypisuje jej wartość parametru initialValue lub pierwszego elementu
// # iterowanej tablicy, jeśli initialValue nie jest podana.
// previousValue = 0

// # Dalej funkcję callback wywołuje się dla każdego elementu tablicy. Obecna wartość
// # parametru  previousValue jest tym, co zwróciła funkcja callback w czasie poprzedniej iteracji.
// Iteracja 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Iteracja 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Iteracja 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Iteracja 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Iteracja 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Po tym, jak cała tablica została ziterowana, metoda reduce() zwraca wartość akumulatora.
// Rezultat - 32

// ======================================================================


//poruszanie sie po drzewie DOM - jak otworzyć ten przykłąd w nowym oknie?

//=======================================================================

// Dlaczego w poniższym wywala "unexpected token ;" jeśli dodam ";" za potions: [] ?

// const atTheOldToad = {
//   // Change code below this line

//   potions: []  // tu jakby było   potions: [];     to nie zadziała

//   // Change code above this line
// };

// BO W TYM PRZYPADKU MA BYĆ PRZECINEK!  // sama sobie odpowiedziałam xd


//=======================================================================


to zastępuje:

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    
  const bookIndex = this.books.indexOf(oldName);
  this.books.splice(bookIndex, 1, newName);
    
    // Change code above this line
  },
};



//====================================================================

// fajny kodzik:

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// };

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//=====================================================================

















//==================================================

//zaj. 10. obiekt parametru
//dlaczego nawiasy klamrowe: ({ name, email}) ? (poniżej linijka 151)
// skoro to obiekt to nie powinno być od razu jego wartości?
// dlaczego taki zapis z this. jest lepszy od klasycznego zapisu obiektów?


// class User {
//   // Destrukturyzacja obiektu
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

//====================================================

//4. moduł zad. 35 i 36
// Dlaczego 35 przeszło, a taki sam zapis w 36. nie?
//Czym się różnią te zapisy i po co tak? :(

// // 35:
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + (player.playtime / player.gamesPlayed);
// }, 0);

// const averagePlaytime = totalAveragePlaytimePerGame / players.gamesPlayed;

// console.log(totalAveragePlaytimePerGame)
// console.log(averagePlaytime)


// // 36:
// // Change code below this line
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance, 0)};
// // Change code above this line

// console.log(calculateTotalBalance);

//============================================================

// teoria z zadania 45/48 (moduł 4):

//Należy otrzymać tablicę ich imion posortowanych po rośnięciu ilości punktów za test.
//W tym celu posortujemy kopię tablicy metodą sort(), po czym metodą map()
//zestawimy tablicę wartości właściwości name z sortowanej tablicy.

// <- po co map() ? Jaki jest cel i sens jego użycia?

//===========================================================

//dalej łańcuchy metod. Czyli nie trzeba zapisywać [...students],
//tylko można użyć flatMap? Jaka jest różnica? Co lepiej robić?
//Dla porównania opcja 2. też z tej części teorii

// 1.
// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// 2.
// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

//===========================================================

//zadanie 45/48
// Uzupełnij kod tak, aby w zmiennej names otrzymać tablicę imion autorów
// w porządku alfabetycznym, rating książek których jest większy niż wartość
// zmiennej MIN_BOOK_RATING.

//przecież to jest bez sensu: jak alfabetycznie to nie wg ratingu,
//albo jedno albo drugie

//przez chwilę miałam tak:
// const names = [...books]
//   .filter((rating, index, array) => books.rating >= MIN_BOOK_RATING)
//   .map(name => name.author)
//   .sort((firstName, secondName) => firstName.author.localeCompare(secondName.author));

// console.log(names);


//ale nie działało :( zwracało [])



//MA BYĆ TAK:

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));

// console.log(names);

// linijka 261 -> dlaczego nie firstBook.author??
//Wcześniej bez tego nie działało...

//============================================================

// Jak moge wylogować tą tablicę ? (47/48)

// // Change code below this line
// const getSortedFriends = users => {
//    return [...users]
//   .flatMap(user => user.friends)
//   .filter((friends, index, array) => array.indexOf(friends) === index)
//   .sort((firstName, secondName) => firstName.localeCompare(secondName));
// };
// // Change code above this line

// console.log(getSortedFriends);

//============================================================

//48/48 moduł 4. Wyszło mi, ale nie rozumiem czemu xD

// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
  .filter(user => user.gender === gender)
  .reduce((balance, user) => balance + user.balance, 0);
};
// Change code above this line

console.log(getTotalBalanceByGender);

//============================================================


// wiem,że tak się zapisuje, ale dlaczego bez const/let?



// class User {
//   // Zadeklarowanie i inicjalizacja właściwości statycznej
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;  // <======================================== tu
//   #role;   // <======================================== i tu

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

//=====================================================================================

// Czemu tam nie może być this?

// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE = 50000;
  
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE){    <======================== czemu tylko tu musi być Car ?
//       return this.#price;
//     } else {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//=========================================================================

// 19 / 20 moduł 5 DO PRZEKMINIENIA I UTRWALENIA :)

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//=============================================================


