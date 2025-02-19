// Arrays in javascript 

let superhero = ["ironman" , "capten america" , "ant man " , "spiderman " , "hulk " , "thor "]
const dcheros = ["superman", "batman","wonder woman" , "flash" ]
//console.log(superhero[1])
//console.log(typeof superhero) // this is way to access a arrays in js



// +++++++++++++++++++++++++ arrays methode   +++++++++++++++++++++++++++++++++++++++++ 

                 //superhero.push("loki");                                // this is for a add element in last index 
// console.log(typeof superhero);
// console.table([superhero]);
// console.table(`after using a push ${[ superhero]}`)
                  //superhero.pop();                                       // this is for a remove a last element 
// console.table(`after using a pop ${superhero} `); 
// console.table([superhero]); 


// superhero.unshift("thanos")                                             // this is for a starting add eliment 
// console.table([superhero])  
// superhero.shift()                                                       // ye vlue ko remov krta hai jo statring element hota hia 
// console.table([superhero]) 

// console.log(superhero.includes("ironman"));                             // this is for a check value we have in array and not 
// console.log(superhero.indexOf("capten america"))                         // this is check a value index in array 

// const superhiro = superhero.join()                            // this is refarence that one variable use a original array value both use same value but variable have string data type variable data type change 
// console.log(`this val superhe: ${ typeof superhe}`)
// console.log(`this val superhero : ${typeof superhero}`);

// console.log(`original:${ superhero}`);

//  const superhe = superhero.slice(1 , 3)                 // splice use for a you want value acording to requrd you so enter index in brekit and then access

// console.log(`this val superhe : ${superhe}`);
// console.log("slice " , superhero);                                        //this is not include a 3 

//  const superhe2 = superhero.splice(1 , 3)             //superhe2variable hai task perform krne ke liye liya hai but this is include a 3 and also not return a value that value his include and also change array 

// console.log(superhe2);                          

// console.log("splice " , superhero);


// 
// //  dcheros.push(superhero)
// //  console.log(dcheros);
// //const herogiri = superhero.concat(dcheros)
// //console.log(herogiri);
// const herogiro = [...superhero , ...dcheros]                         // sparde a element ye multi array ko one array mai add krta hai 
// console.log(herogiro);

// console.log(Array.from("Rizwan"))
const val1 = "Rizwan "
// console.log(Array.from(val1))                                        // this is a convarte a value other data type to Array
// console.log(Array.isArray(val1))                                   // this we are asking a qustion from a array this array and not 
// val1.foreach( (va)=> {
//     console.log(va)
// } )


// +++ yaha pr do array liye hai aur unko add kr ke ek arrary mai dal diya hai ab ye alag nhi hai ek hi hia ++++++

// let hero = ['salman ' , 'shahruk ', 'amir ', 'kartik' ]
// let holly = ['will' , 'keanu' , 'robart', 'tom ' , 'johshone']  
// let allhero = hero.concat(holly)     // this is also add two object 
// console.log(allhero)
// heros = [...hero, ...holly]         // spared operator use to add two object 
// console.log(heros)

// let arra = [10,50,60,[87,8,77],78,[888],456,44,[445,45],100]       // this is array and many more in just one 
// let anoarra = arra.flat(55)                   // using flat mathode to converde to one array 
// console.log(anoarra)

// +++ ONE MORE WAY TO MAKE ANYTHING ARRAY CONVERD TO ARRAY USING OF 
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))


