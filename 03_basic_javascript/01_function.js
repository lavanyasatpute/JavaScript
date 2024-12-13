function sayMyName(){
    console.log('L');
    console.log('a');
    console.log('v');
    console.log('a');
    console.log('n');
    console.log('y');
    console.log('a');
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumber(2,6)
// console.log("Result:",result);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please Enter a Username.");
    //     return
    // }
    if(!username){
        console.log("Please Enter a Username.");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Lavanya"));

function calculateCartPrice(val1, val2, ...num){
    return [val1,num]
}
console.log(calculateCartPrice(300,34,566,765,76,87));

