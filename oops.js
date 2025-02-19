const arra = [1 ,2,50,4,8,9,]
console.log(arra[5])

const obje = {
    name : "harry potter ",
    age : 18 ,
    teacher : "professor dumbledor ",
    Parents : "james Potter anny Potter "
}
console.log(obje.name)

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2    // this is a function variable using dot notetion we are do this code 

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);




const marvel = ["ironman" , "captain america " , "hulk " , "thor "]

const harrypotter = {
    friends : 'rhon ' ,
    one : 'hormany ',
    teacher : 'dubledou '
} 
Object.prototype.obj = function () {
    console.log('hello world ')
}
marvel.obj()
harrypotter.obj()

Array.prototype.add = function () {
    console.log("rizwan")
}

marvel.add()
// harrypotter.add()


const data = function (username){
    this.username = username
}
const createuset = function (username , email , password ) {
     data.call(this , username)   // this is use for a exicute a function 
     this.email = email
     this.password = password
}
const user = new createuset("harish " , "email.com" , "2152")
console.log(user)