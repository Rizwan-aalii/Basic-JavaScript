// this is for object 
     const helloharry = new Object ()                              // decleration of a object 1 
     

         const sym = Symbol ("Lord Voldmort")                              // decleration of a symbole
                                                   
     const harrypotter = {                                             // decleration of a object 2
         Name : "Harry Potter " ,
         Friends : ["Ron weasley" , " Ginny weasley " , "Hermione Granger " , " Luna Lovegood" ] , 
         harryteacher : "Dumbledore " ,
         harrypotterage : 14 ,
         [sym]  : "hello",                                         // this is a Symbol
         heisamagecaine : true 
}
         //console.log(harrypotter);

      harrypotter.callharry = function() {                                         //  object with function 
         //console.log(`Hello welcome ${this.Name} nice to see`);               //we use a this key word this say we use on this object that we select and we want 
         //console.log(`Hello welcome ${Name} nice to see`);                    // without this key word first declare a name in global 
     
}
         // console.log(harrypotter.callharry());                                     // calling a function 
          //console.log(harrypotter[sym]);


      // +++++++++++++++  object methode +++++++++++++++
      
    
    // const mrpotter = {                                                       // decleration of a object 3  
    //     motherpotter : "lily Potter " ,
    //     fatherPotter : "james Potter " ,
    //         harryfevteacher: {
    //             teacher : "mcGonagall",                                      // object and another object 
    //             teacher2 : "Sirius Black ",
    //             harrywife : {
    //                   name : "ginny weasley "
    //} //} //}                                          
          //console.log(mrpotter.harryfevteacher.harrywife);                     // this wey to access a multiple object value 


        // const firsthalf = { a:"harry potter stone secrest "    }    // this is how we spared a array meaning is use multi array return as one array 
        // const midhalf = { b :" harrypotter azikaban gobletfire phonenix " }
        // const finalhalf = {c : " harrypotter prinde hallows hallowspart2"}
        // const fullmovie = { ...finalhalf , ...midhalf , ...finalhalf,}     // SPAREDE OPEROTER USING ADD MULTIPLE OBJECT
        // console.log(fullmovie);

        
                //console.log(Object.keys(harrypotter), );  // this is the way that we can access key and many more
                //console.log(Object.values(harrypotter))
                //console.log(Object.entries(harrypotter))
                //console.log(harrypotter.hasOwnProperty('Harry Potter'))  // this check a key in object 
      let harry = {
                    harryboy : "true",
                    lastsceneofaharrypottermovie : "voldmort kill harry but  "
       }
      const {lastsceneofaharrypottermovie : lastscene } = harry   // this is the way that we can actuly change a key of a object 
      console.log(lastscene);
      


      const users = [
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
        },
    ]
    
    users[1].email
    
    