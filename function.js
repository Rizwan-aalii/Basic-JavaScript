// function in js syntax's and method 
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName()


// function addTwoNumbers(number1, number2){                       // this function have a paramiter 

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2                                      // return is return a value in variable that defind in function scope
}
// console.log(addTwoNumbers(10,4));

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username")                 // this functio have a condition 
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))

// function calculateCartPrice(num1){                        // this function just return a one value 
//     return num1              
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// function calculateCartPrice(...num1){                               // we are use a resat operetor in this to print all value 
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))
 

const user = {
    username: "ronaldo",                                               // this is object we using in function 
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

const myNewArray = [200, 400, 100, 600]                              // this is Array we use in function 

// function returnSecondValue(getArray){
//     return getArray[1]                                                
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

function array (arra) {
        console.log(arra)
        return myNewArray
}

array(myNewArray)
let film = "dil wale "

let kotlin = () => {
      // let film = "Dil Wale " 
     console.log(`has using a ${film} `)
  };
  kotlin()

//   (() => {
//     statements
//   })                              // iife use for a 
let nname = "rizwan" ;
(()=> {
    //nname = "rizwan khan "
    console.log(nname);
    
})()                                            // immediately imvoke function expression that run faster  and also protect a global scoop value polution 