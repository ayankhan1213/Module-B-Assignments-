// Question No 1
// let subjectOne = +prompt("Enter the Marks", "English Subject Marks")
// let subjectTwo = +prompt("Enter the Marks", "Math Subject Marks")

// if (subjectOne >= 0 && subjectOne <= 100 && subjectTwo >= 0 && subjectTwo <= 100) {
//     if (subjectOne < 40 || subjectTwo < 40) {
//         alert("Fail😨")
//     }else if (subjectOne > 85 && subjectTwo > 85) {
//         alert("Outstanding Performance");
//     }
//     else {
//         let average = (subjectOne + subjectTwo) / 2
//         if (average >= 75) alert("Excellent😏")
//         else if (average >= 60) alert("Good😏")
//         else if (average >= 50) alert("Pass😏")
//         else alert("Fail")


//     }
// } else {
//     alert("Invalid👀")
// }

// Question No 2

// let userName = "admin"
// let password = "admin"

// for (let i = 0; i < 3; i++) {
//     let promptOne = prompt("Enter the Username")
//     let promptTwo = prompt("Enter the Password")

//     if (promptOne === userName && promptTwo === password) {
//         alert("Welcome Back")
//     }
//     else if (promptOne !== userName) {
//         alert("Incorrect Username")
//     }
//     else {
//         alert("Incorrect Password")
//     }
//     if (i >= 2) {
//         alert("Too many Attempts🤐")
//     }
// }

// Question 3
// let products = [
//     { name: "Laptop", price: 4500 },
//     { name: "Mobile", price: 3000 },
//     { name: "Headphones", price: 1500 },
//     { name: "Keyboard", price: 1200 },
//     { name: "Mouse", price: 800 },
//     { name: "Smart Watch", price: 5000 },
//     { name: "Tablet", price: 6000 }
// ];

// let promptInput = prompt("Enter the Product").toLowerCase().trim();
// let productFound = false;
// let productName;
// let productPrice;
// products.forEach((product) => {
//     if (product.name.toLowerCase() === promptInput) {
//         productFound = true;
//         productName = product.name
//         productPrice = product.price
//     }
// })
// if (productFound) {
//     alert(`Available`)
//     let cont = document.querySelector(".container")
//     let h2 = document.createElement("h2")
//     let h3 = document.createElement("h3")
//     h2.textContent = "Total Bill"
//     h3.textContent = `Your Product is ${productName} and his Price is ${productPrice}`
//     let btn = document.createElement("button")
//     btn.textContent = "Apply Disocunt"
//     let div = document.createElement("div")
//     div.classList.add("btn")
//     cont.appendChild(h2)
//     cont.appendChild(h3)
//     cont.appendChild(div)
//     div.appendChild(btn)

//     let isDiscountApplied = false;

//     btn.onclick = function () {
//         if (isDiscountApplied) {
//             alert("Discount already applied");
//             return;
//         }
//         let finalPrice;
//         if (productPrice > 5000) {
//             finalPrice = productPrice * 0.85; 
//         }

//         else if (productPrice > 3000) {
//             finalPrice = productPrice * 0.90; 
//         }

//         else {
//             finalPrice = productPrice;
//             alert("No Discount");
//             return;
//         }
//         finalPrice = Math.round(finalPrice);
//         h3.innerHTML = `Product: ${productName} | Original: <del class="old-price">${productPrice}</del> | Final: <span class="final"> ${finalPrice} </span>`;
//         isDiscountApplied = true;
//     };

// } else {
//     alert("Not Available")
// }

// Question 4
// let employHours = +prompt("Enter Working Hours")
// if (employHours > 0 && employHours <= 24) {
//     if (employHours >= 8) {
//         alert("Full working day")
//         if (employHours > 10) {
//             alert("Overtime Detected")
//         }
//     } else if (employHours >= 4 && employHours <= 7) {
//         alert("Partially present")
//     } else if (employHours < 4) {
//         alert("Absent")
//     }
// } else {
//     alert("Invalid👀")
// }


// Question 5

// let passwordInput = prompt("Enter the Password")
// let hasLetter = false;
// let hasNumber = false;
// if (passwordInput.length < 6 && passwordInput.length > 0) {
//     alert("Weak Password")
// }
// if (passwordInput.length >= 6) {
//     for (let i = 0; i < passwordInput.length; i++) {
//         let asciiCode = passwordInput[i].charCodeAt()
//         if (asciiCode >= 65 && asciiCode <= 90 || asciiCode >= 97 && asciiCode <= 122) {
//             hasLetter = true
//         }
//         if (asciiCode >= 48 && asciiCode <= 57) {
//             hasNumber = true
//         }

//     }
//     if (hasLetter && hasNumber) {
//         alert("Strong Password")
//     }
//     else if (hasLetter || hasNumber) {
//         alert("Medium Password")
//     }
//      if(passwordInput.includes("123")){
//         alert("Avoid common patterns")
//     }

// } else if (passwordInput == "") {
//     alert("Invalid👀")
// }


// Question 6
// let accountBalance = 50000;
// let deposit = +prompt("Enter the Deposit amount.");

// if (deposit <= 0) {
//     alert("Something went wrong. Invalid amount.");
// } else {
//     if (deposit >= 20000) {
//         alert("Large Deposit Detected");
//     }
//     accountBalance += deposit;

//     if (accountBalance > 100000) {
//         alert("High Account Balance");
//     }

//     alert(`Your account balance is ${accountBalance}`);
// }

// Question 7

// let studentInput = +prompt("Tum kitne din aye the School?" , "Is Mahine me");
// const maxDays = 30;
// if (studentInput < 0 || studentInput > 30){
//     alert("Invalid input")
// }
// else if(maxDays === studentInput){
//     alert("Perfect Attendance")
// }
// else{
//     let avg = (studentInput / 30) * 100
//     if(avg >=75){
//         alert("🟢Eligible")
//     }else if(avg >=50 && avg<=74){
//         alert("🟡Warning")
//     }
//     else if(avg <50){
//         alert("🔴Not Eligible")
//     }
// }

// Question 8
// let input = prompt("Enter the Mobile Brand 📱").toLowerCase().trim();
// let brandFound = false;
// let brandPrice;
// let mobiles = [
//     { brand: "iPhone", price: 120000 },
//     { brand: "Samsung", price: 80000 },
//     { brand: "Infinix", price: 30000 },
//     { brand: "Xiaomi", price: 45000 },
//     { brand: "Redmi", price: 18000 },
//     { brand: "Tecno", price: 20000 }
// ];

// mobiles.forEach((product) => {
//     if (input == product.brand.toLowerCase()) {
//         brandFound = true
//         brandPrice = product.price
//     }
// })
// if (brandFound) {
//     if (brandPrice >= 50000) {
//         alert("🔥 High-End Device")
//     }
//     else if (brandPrice >= 20000 && brandPrice < 50000) {
//         alert("📱 Mid-Range Device")
//     }

//     else{
//         alert("💸 Budget Device")
//     }
// }
// else{
//     alert("Brand Not Available😌")
// }


// let questionOne = +prompt("2+2 is equal to.....")
// let questionTwo = +prompt("4+4 is equal to.....")
// let questionThree = +prompt("12+4 is equal to.....");
// let score = 0;
// let anserOne = 4
// let anserTwo = 8
// let anserThree = 16

// if (isNaN(questionOne) ||
//     isNaN(questionTwo) ||
//     isNaN(questionThree)) {
//     alert("Invalid")
// }
// else {

//     if (questionOne == anserOne) {
//         score++
//     }
//     if (questionTwo == anserTwo) {
//         score++
//     }
//     if (questionThree == anserThree) {
//         score++
//     }
//     if (score == 3) {
//         alert("Excellent Performance")
//     }
//     if (score == 2) {
//         alert("Good Job")
//     }
//     if (score == 1) {
//         alert("Needs Improvement")
//     }
//     if (score == 0) {
//         alert("Try Again")
//     }
// }

// let h2 = document.createElement("h2").textContent = ("Your Final score is " + score) 
// document.querySelector("body").append(h2)


// Question 10

// let itemOne = +prompt("Enter the Price Item1")
// let itemTwo = +prompt("Enter the Price Item2")
// let itemThree = +prompt("Enter the Price Item3")
// let finalPrice;
// if (itemOne <= 0 || itemTwo <= 0 || itemThree <= 0) {
//     alert("Error!")
// } else {
//     let total = itemOne + itemTwo + itemThree;
//     if (total > 5000) {
//         finalPrice = total - (total * 15 / 100);
//         alert("Your Final Price with Discount of 15% " + finalPrice)
//     }
//     else if (total > 3000) {
//         finalPrice = total - (total * 10 / 100);
//         alert("Your Final Price with Discount of 10% " + finalPrice)
//     }
//     else {
//         finalPrice = total;
//         alert("No Discount. Your Final Price is " + finalPrice)
//     }
// }
