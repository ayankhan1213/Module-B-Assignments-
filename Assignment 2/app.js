// Question 1
// const subjectEnglish = +prompt("Enter your English marks:", "Out of 100");
// const subjectMaths = +prompt("Enter your Maths marks:", "Out of 100");
// const subjectScience = +prompt("Enter your Science marks:", "Out of 100");
// const subjectHistory = +prompt("Enter your History marks:", "Out of 100");
// const subjectGeography = +prompt("Enter your Geography marks:", "Out of 100");
// const totalMarks = subjectEnglish + subjectMaths + subjectScience + subjectHistory + subjectGeography;
// const percentage = (totalMarks / 500) * 100;
// let grade;
// let valid = true;
// if (isNaN(subjectEnglish) || isNaN(subjectMaths) || isNaN(subjectScience) || isNaN(subjectHistory) || isNaN(subjectGeography)) {
//     alert("Error🤐")
//     valid = false
// }
// else if (
//     subjectEnglish < 0 || subjectMaths < 0 ||
//     subjectScience < 0 || subjectHistory < 0 ||
//     subjectGeography < 0 ||
//     subjectEnglish > 100 || subjectMaths > 100 ||
//     subjectScience > 100 || subjectHistory > 100 ||
//     subjectGeography > 100
// ) {
//     alert("Marks should be between 0 and 100❌");
//     valid = false
// }
// else if (percentage >= 90 && percentage <= 100) {
//     grade = "A+";
// }
// else if (percentage >= 80 && percentage <= 90) {
//     grade = "A";
// }
// else if (percentage >= 70 && percentage <= 80) {
//     grade = "B";
// }
// else if (percentage >= 60 && percentage <= 70) {
//     grade = "C";
// }
// else if (percentage >= 50 && percentage <= 60) {
//     grade = "D";
// }
// else if (percentage >= 40 && percentage <= 50) {
//     grade = "E";
// }

// else if (percentage >= 0 && percentage <= 40) {
//     grade = "F";
// }

// if (valid) {
//     document.writeln(`English Marks: ${subjectEnglish} <br>`);
//     document.writeln(`Maths Marks: ${subjectMaths} <br>`);
//     document.writeln(`Science Marks: ${subjectScience} <br>`);
//     document.writeln(`History Marks: ${subjectHistory} <br>`);
//     document.writeln(`Geography Marks: ${subjectGeography} <br>`);
//     document.writeln(`Total Marks: ${totalMarks} <br>`);
//     document.writeln(`Percentage: ${percentage} <br>`);
//     document.writeln(`Grade: ${grade} <br>`);
// }

// Question 2

// const myReduce = (arr, callback, initialValue) => {
//   let accumulator;
//   let startIndex;

//   if (initialValue !== undefined) {
//     accumulator = initialValue;
//     startIndex = 0;
//   } else {
//     accumulator = arr[0];
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i]);
//   }

//   return accumulator;
// };

// // Question 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let left = 0;
// let right = arr.length - 1;

// while(left < right){
// let save = arr[left];
// arr[left] = arr[right]
// arr[right] = save

// left++
// right--
// }



// Question 4
// const arrOne = [1, 2, 3, 4, 5]
// const arrTwo = [6, 7, 8, 9, 10]
// const mergeArr = []
// for (let i = 0; i < arrOne.length; i++) {
//     mergeArr.push(arrOne[i])
// }
// for (let j = 0; j < arrTwo.length; j++) {
//     mergeArr.push(arrTwo[j])
// }
// console.log(mergeArr);

// Another Method
// const arrOne = [1, 2, 3, 4, 5]
// const arrTwo = [6, 7, 8, 9, 10]
// const mergeArr = arrOne.concat(arrTwo)
// console.log(mergeArr);


// Question 5
// let sentence = "Hello World".split(" ").reverse("").join(" ")
// console.log(sentence);

// Question 6
// console.log(a);
// var a = 6;    Hoisitng Perform Output Undefined b/c Hoisitng Perform 

// Let and Const Hoisting Nahi hotii hai Output Refernce Error Aata hai
// hello() 
// function hello(){
//     alert("World!")
// } Hoisitng huii or output aya World!
  

// Question 7
// isLooged()

// var isLooged = function (){
//     alert("Hello World")
// }  Function Expression error comes b/c function expresson me hoisting nahi hotti

// sayHello()
// function sayHello(){
//     alert("Hello world")
// }  Hoisting Hogi to Output Ayega Hello World

// Question 8
// function generate(name, email, type, orderId) {
//     if (type === "welcome") {
//         return `🎉Welcome ${email} 🎉 Hello ${name}, Welcome to our platform! Your account has been created with email: ${email} We are happy to have you with us 🚀 Regards, Team`;
//     }
//     if (type === "order") {
//         return `🛒 Order Confirmation 🛒 Hello ${name}, Your order has been confirmed Order ID: ${orderId} We will notify you once it is shipped 📦Thanks for shopping with us! Regards Team
//         `;
//     }
//     return "Invalid email type";

// }
// console.log(generate("Ayan", "aw1900@gmail.com", "welcome"));
// console.log(generate("Babar", "babar@gmail.com", "order", "#12345"));

// Question 9
// PROPER WAY
// function getValue(i) {
//     return i * 2;
// }

// for (let i = 0; i < 1000000; i++) {
//     let value = getValue(i);
//     console.log("Value is " + value);
// }

// WRONG WAY AND PERFOMANCE SLOW
// function getValue(i) {
//     return i * 2;
// }
// for(let i = 0; i<10000; i++){
//     let value = `${getValue(i)}`
//     console.log("Value is " + value); 
// }