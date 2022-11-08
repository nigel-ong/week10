//alert("this is fun")
// console.log("this is really fun")

// for (let i = 2;i <= 1024; i= i * 2){
//     console.log(i)};


// let i = 1;

// while (i <= 1024)
//  {
//     console.log(i);
//     i = i*2};

let input = "";
do{
    input = prompt("What is your name?")
    //prompt always returns a string
    

    } while (
        //!isNaN(input)
        Number(input) || input == 0
    )
console.log(input);