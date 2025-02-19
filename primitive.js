
// diclaration of a variable
//universname = marvel  //also declare a variable like this 
let age = 30
let nname = "caipten america "
let isironman = true 
const name = "tony stark "
let herocaracter = new String ("Iron Man ")
let heith = new Number (100)
console.log(typeof heith)
console.log(heith)
console.log(typeof herocaracter)
console.log(herocaracter)
console.log(age);



// console.log(name);
// let jonnysins = "sins"
// console.log(jonnysins);

//  jonnysins = "guru"
//  console.log(jonnysins);
// // ++++++++++ type conversion of a value +++++++++++++++
//  let size = "110 cm "
//  let hsize = Number(size)

console.log( typeof hsize)
//  console.log(typeof size)
//  console.log( hsize)
//  console.log( size)
 

// //  ++++++++++++++++++ comparision of a values in js ++++++++++++++++++++++++++++++
// let mc = "100";
// let bkl = Number (100);
// let gg = "110"
// let ag = 50
// console.log(mc < ag);
// console.log(mc > ag);
// console.log(mc === ag);
// console.log(mc < gg);
// console.log(mc > gg);
// console.log(mc === gg);

// const scooter = {
//     brandName: "Honda",
//     model: "Dio 125",
//     price: 97000,
//     isscooter: true,
  
//     tellbedt: function() {
//       console.log(`Your pay on ${this.brandName} and this model ${this.model}. Pay now!`);
//       console.log(this);
      
//     }
//   };
  
//   // Call the method on the scooter object
//  // scooter.tellbedt();
  
//  // console.log("hello world");

//  function name() {
//     // Name = "John wick ";
//     // console.log(Name)
//     console.log(this)

//  }
// //  name();
// const harrypotter = function() {
//     console.log("harrypotter")
// }
// harrypotter();

// marvel = () => {
//     console.log("mcu")
// }
// marvel()

// (function data() {
//     console.log("data not founde")
// }) () ;


//   ( (name) => {
//     console.log(`data found ${name}`)
//    }) ('mrn@google.com')
 

///const cars = [ "Buggati chiron " , " Lamborgini chayam" , "Farrari " , "Rolls Royal " , "konneggest"]
// for (const car of cars){
   // console.log(car)
// } 

const comfounder = {
       Apple : " Steve Jobs " ,
       Facebook : "Mark Zukarbug" ,
       Invdia : "Jesun Hunga" ,
       Amazon : " Jeff Bezoz " ,
       Google : "Larry Page " ,
       Microsoft : " Bill Gates"
}

 //for(const comfun in comfounder){
    //console.log(comfun)
//  }
// let age = 70;
//  if (age <50 ) {
//     console.log("you have 10 year for retairment");
// } else if ( age < 40 ) {
//     console.log("you have 20 year for retaiment");
// } else if (age > 60 ) {
//     console.log("you are retair for work ");
// } else {
//     console.log("your are a child ");
// }


const cars = ["Bugatti Chiron", "Lamborghini Huracan", "Ferrari", "Rolls-Royce", "Koenigsegg Jesko", "McLaren", "Nissan"];

console.log(cars); // This will now work without errors
cars.forEach((item) => {
    //console.log(item);
});


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

const gameName = new String('rizwan-rw-com')

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
