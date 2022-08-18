"use strict"

//

let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line
productName = 'Repair droid';
pricePerItem = 3500;
console.log(productName);
console.log(pricePerItem);

//

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = (pricePerItem * orderedQuantity);
console.log(totalPrice);

//

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked Droid, price per item is 3500 credits`;

//

let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//

function sayHi() {
  console.log("Hello, this is my first function!");
}

sayHi();

//

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//

function add(a, b, c) {
  return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

//

function makeMessage (name, price) {

    const message = `You picked ${name}, price per item is ${price} credits`;
    
  return message;
};

//

function calculateTotalPrice (orderedQuantity, pricePerItem) {

  const totalPrice = orderedQuantity * pricePerItem;

  return totalPrice;

//

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {

const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

  return message;
    }

//

function isAdult(age) {
  // Change code below this line
  const passed = age>=18;
  console.log(18);

  // Change code above this line
  return passed;
    }

//

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === 'jqueryismyjam';

  // Change code above this line
  return isMatch;
    }
    
//

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
    }
    
//

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered > available){
  message = `Not enough goods in stock!`;
} else {
  message = `Order is processed, our manager will contact you.`;
}
  // Change code above this line
  return message;
}

////

// złożony operator przypisania
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
  d /= 10;
  
////

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;

  if(totalPrice > customerCredits){
    message = `Insufficient funds!`;
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  }
  // Change code above this line
  return message;
    }

//


let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

    console.log(cost); // 500

//

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
    }

//

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  // Change code above this line
  return message;
    }

//

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
    }

//

  function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line
    return canAccessContent;
  }

//

  function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line
  return isNotInRange;
  }

//

  function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }
  // Change code above this line
  return discount;
  }

//

  function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
  // Change code above this line
  return message;
  }

//

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  // Change code above this line
  return message;
  }

//

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter" : // Change this line
      price = 0; // Change this line
      break;

    case "professional" :// Change this line
      price = 20; // Change this line
      break;

    case "organization" :// Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
  }

//

  function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
    message = "Canceled by user!";
    break;

    case "jqueryismyjam":
    message = "Welcome!";
    break;

    default:
    message = "Access denied, wrong password!";
  }
  // Change code above this line
  return message;
  }

//

function getShippingCost(country) {
  let message;
  // Change code below this line
  let price;
  switch (country) {
    
    case "China":
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    case "Chile":
    price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    case "Australia":
    price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    case "Jamaica":
    price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;

    default:
    message = "Sorry, there is no delivery to your country";    
  }
  // Change code above this line
  return message;
  }

//

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
  }

//

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

//

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
  }

//

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + '...';
  }
    
  /// Change code above this line
  return result;
  }

//

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
  }

//

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
  }

//

  function checkForSpam(message) {
    let result;
    // Change code below this line
    if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
      result = true;
    } else {
      result = false;
    }
  
    // Change code above this line
    return result;
  }


  for (let i = 1; i < 4; ++i) {
    console.log(i);
  }