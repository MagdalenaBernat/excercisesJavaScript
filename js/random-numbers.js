"use strict";

const userNumber = prompt("Please enter 6 numbers (range: 1-49)"); // w tym przypadku jedna zmienna dla stringa z liczbami? 
                                        //Czy osobne okna dla kazdej liczby i  wtedy wyjdzie number, który można porównać z random ? 
    console.log(userNumber);


let userFirstNumber = "3";
let userSecondNumber = "11";
let userThirdNumber = "19";
let userFourthNumber = "25";
let userFifthNumber = "33";
let userSixthNumber = "46";

// let type;


// "drawing machine"

let theFirstNumber = console.log(Math.round(Math.random() * (49 - 1 + 1) + 1)); //czytelniej będzie theFirstRandomNumber, ale jest długie

let theSecondNumber = console.log(Math.round(Math.random() * (49 - 1 + 1) + 1));

let theThirdNumber = console.log(Math.round(Math.random() * (49 - 1 + 1) + 1));

let theFourthNumber = console.log(Math.round(Math.random() * (49 - 1 + 1) + 1));

let theFifthNumber = console.log(Math.round(Math.random() * (49 - 1 + 1) + 1));

let theSixthNumber = console.log(Math.round(Math.random() * (49 - 1 + 1) + 1));

// end of "drawing machine"



//the first number
console.log(theFirstNumber); // te działania lepiej osobno, czy wyżej, między zmiennymi?

//the second number
if (theSecondNumber !== theFirstNumber) {
    console.log(theSecondNumber);
    // type = theSecondNumber
    // return = theSecondNumber;
} else {
    do 
 }

//the third number

//the fourth number

//the fifth number

//the sixth number



                    // poniżej konkatenacja czy po przecinku?
let userNumbers = (userFirstNumber + "," + " " + userSecondNumber + "," + " " + userThirdNumber + "," + " " + userFourthNumber + "," + " " + userFifthNumber + "," + " " + userSixthNumber);
                    // (4, 7, 8, 10, 11, 14);
                    // "4" + "," + " " + "7" + "," + " " + "8" +  "," + " " + "10" +  "," + " " + "11" +  "," + " " +"14"
let winningNumbers = (theFirstNumber, theSecondNumber, theThirdNumber, theFourthNumber, theFifthNumber, theSixthNumber);
                    // (theFirstNumber + theSecondNumber + theThirdNumber + theFourthNumber + theFifthNumber + theSixthNumber); 
                    // (theFirstNumber + "," + " " + theSecondNumber + "," + " " + theThirdNumber + "," + " " + theFourthNumber + "," + " " + theFifthNumber + "," + " " + theSixthNumber);  


if (userNumbers === winningNumbers) {

    const message = `You're the winner! 
                    Your lucky numbers are: ${userNumbers}! They match with the winning numbers!`;

} else if (userNumbers !== winningNumbers) {

    const message = `Sorry, your numbers don't match with the winning ones. Try again! 
                    (You picked numbers: ${numbers}. The winning numbers are: ${winningNumbers})`;
        
} else {

    const message = `Error! Check whether you picked 6 numbers and that they are compatible with the range (1-49).`;
}   

return message;
        






function getFirstRandomNumber(){
    console.log(parseInt(Math.random() * (49 - 1 + 1) + 1));
}

function getSecondRandomNumber(Math.round(Math.random() * (49 - 1 + 1) + 1)){
    if (getSecondRandomNumber !== getFirstRandomNumber);
}

getThirdRandomNumber(Math.round(Math.random() * (49 - 1 + 1) + 1)){
    if (getThirdRandomNumber !== getFirstRandomNumber && getSecondRandomNumber); 
}

getFourthRandomNumber(parseInt(Math.random() * (49 - 1 + 1) + 1)){
    if (getFourthRandomNumber !== getFirstRandomNumber && getSecondRandomNumber && getThirdRandomNumber);
}

getFifthRandomNumber(parseInt(Math.random() * (49 - 1 + 1) + 1)){
    if (getFifthRandomNumber !== getFirstRandomNumber && getSecondRandomNumber && getThirdRandomNumber && getFourthRandomNumber);
}

getSixthRandomNumber(parseInt(Math.random() * (49 - 1 + 1) + 1)){
    if (getFifthRandomNumber !== getFirstRandomNumber && getSecondRandomNumber && getThirdRandomNumber && getFourthRandomNumber && getFifthRandomNumber);
}





// function get6RandomNumbers(numbers) {

//     let rangeOfNumbers = (>= 1 && <= 49);

//     let counter = 0;
//     const maxNumbers = 6;

//     let i = 0;

//     do {
//         console.log(parseInt(Math.random() * (49 - 1 + 1) + 1));
//         for (i = 0; i < 6; i++);
//     }
    
    
    
//     while (i < 6);

// }


//     let counter = 0;
//     let maxNumbers = 6;

// do {
//     console.log(parseInt(Math.random() * (49 - 1) + 1));
// } while (counter < maxNumbers);




// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

    

    
    //
    //     let counter = 0;
    // const maxNumbers = 6;

    // let i = 0;

    // do {
    //     console.log(parseInt(Math.random() * (49 - 1) + 1));
    // } while (counter < maxNumbers) {
    //     console.log("counter")
    //     for (i = 0; i <= maxNumbers; i += 1);
    //     counter += 1;
    // }

    // //

    // do {
    //     console.log(parseInt(Math.random() * (49 - 1) + 1));
    // } while (counter < maxNumbers) { // czy <=   // czy for (let i = 0, i <= maxNumbers, i++) i++ iteracja po elemencie
    //     for (i = 0; i <= maxNumbers; i += 1);
    //     console.log("counter")
    //     // counter += 1;
    // }

//
    

    




