class user {
    constructor (username , password) {
        this.username = username;
        this.password = password ;

    }

    get password () {
        return `${this.ppassword}toUpperCase()`
    }
    set password (value) {
        this.ppassword = value
    }
}

const input = new user ("john wick " , "wildhulk")
console.log(input.password)


usrd = function (usernaem , Password) {
    this.usernaem = usernaem ;
    this.Password = Password ;

     Object.defineProperty(this,'usernaem' , {
        set : function (value) {
            this.usernaem = value;
        },
        get : function () {
            return `${this.usernaem}toUase()`
        }
     })
}
const anoter = usrd ('johnwick')
console.log(anoter.usernaem)