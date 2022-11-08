//alert("this is fun")
// console.log("this is really fun")

// for (let i = 2;i <= 1024; i= i * 2){
//     console.log(i)};


// let i = 1;

// while (i <= 1024)
//  {
//     console.log(i);
//     i = i*2};

// let input = "";
// do{
//     input = prompt("What is your name?")
//     //prompt always returns a string
    

//     } while (
//         (!isNaN(Number(input)))
//         //Number(input) || input == 0
//     )
// console.log(input);

// //alert("Welcome" + input);
// alert(`Welcome ${input}`);

// let fruits = ['Apple', 'Banana'];

// fruits.push("Orange");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("Mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// for (let 1 = 0; i < fruits.length ; i++){
//     console.long(fruits[i])
// }
            //better for finding index

// for (let item of fruits){
//     console.long(item)
// }
            // they do the same



///////////////////////// Objects
// const person ={
//     name:["Bob", "Smith"],
//     age: 32,
//     gender:"male",
//     interest: ["music, skiing"],

// };
// console.log(`My name is ${person.name[0]} ${person.name[0]}. I am interested in${person.interest[0]} and ${person.interest[1]}.`)

// for (let prop in person){
//     console.log(`My ${prop} is ${person[prop]}`)
// }

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
    };
    let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
    };
    let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
    };
    let students = [student1, student2, student3];

    for (let stud of students){
        if (stud.program === "CIT" && stud.GPA > 3){
            console.log(stud)
        }
    }