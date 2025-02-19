new Promise(function(resolve,reject){
    console.log('helloworld')
    resolve()
}).then(function(){
    console.log('resolve is compelet ')
})

// const promicesecond = new Promise ((resolve , reject) => {
//     setTimeout(function(){
//         console.log('data is use ')
//         resolve()
//     } , 1000)
// }).then(function(){
//     console('resolve not problem')
// })


const promicesecond = new Promise((resolve  , reject) => {
    setTimeout(function() {
        console.log('data is used');
        resolve();
    }, 1000);
}).then(function() {
    console.log('resolve not a problem');
});

const promictree = new Promise ( (resolve , reject) => {
    setTimeout(function(){
        resolve({username : "rizwan" , password : "10254"})
    }, 1000)
})
promictree.then((user)=>{
    console.log('rizWAN DATA' , user)
})