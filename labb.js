lab.javascript 5/8/2026
let i=1 
for(let i=1; i <= 100; i++){

    if(i & 3 == 0 && 1 % 5 == 0){
        console.log("Fizz Buzz")
    }else if(i % 3 == 0){
        console.log("Fizz")
    }else if(i % 5 == 0){
        console.log("Buzz")
    }else {
        console.log(i);
    }
}

//excercise 2

let n = 3;
for (let i = n + 1; ; i++) {
    let isPrime = true;

    for (let j = n - 1; j >= 2; j--) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime === true) {
        console.log(i);
        break;
    }
}

//excercise 3

const array = ["ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"]
    for(const element of array){
        console.log(element)
    }