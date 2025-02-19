const data = function (){
    console.log('hello prototype')
}
data()

let userdataaccess = function (username, price) {
    this.myusername = username;
    this.score = price;
};

userdataaccess.prototype.increseval = function () {
    this.score++;
};

userdataaccess.prototype.printval = function() {
    console.log(`Your item ${this.myusername} and price ${this.score}`);
};

const first = new userdataaccess("headphone", 1000);
const second =  userdataaccess("mobile", 10200);  

first.printval();        // this code work beacuse this code have use a new keyword
second.printval();      // this code is not work becuse this is not use a new keyword a new keyword has give value's on emthy object




 
