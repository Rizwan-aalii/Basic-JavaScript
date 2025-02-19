// const numbers = [1, 3, 6, 8, 10, 15];

// // Double each number using map we are multiple with 2 
// const doubledNumbers = numbers.map(num => num * 2); 

// // Filter out the numbers greater than 10
// const filteredNumbers = doubledNumbers.filter(num => num <= 10); 

// console.log(filteredNumbers);
// console.log(doubledNumbers)

const ottomanempire = [
      {
         name : "osman ghazi ", sultan : 1  , ruletime : 1300-26
      },
      {
         name : " orhan ghazi " , sultan : 2 , ruletime : 1326-59
      },
      {
        name : " murad "  ,      sultan : 3   ,   ruletime : 1359-89
      },
      {
        name : " beyazid " ,    sultan : 4  ,     ruletime : 1389-1402
      },
      {
        name : " Mehmed  " ,    sultan : 5  ,     ruletime : 1432-81
      },
      {
        name : " abdul hamid II " ,    sultan : 6  ,     ruletime : 1876-1909
      }
]
 
   const sultanacces = ottomanempire.filter( (sul) =>  sul.name === "osman ghazi " )
   console.log(sultanacces)