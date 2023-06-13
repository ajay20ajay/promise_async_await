// function ab(a,b){
//     return a + b;
//   }
//   function detail(name, sum){
//     console.log(`${name} ${sum}`);
//   }
//   detail("smile", ab(20,30))



// setTimeout(() => {
//     console.log("1")
//       setTimeout(() => {
//          console.log("2")
//           setTimeout(() => {
//             console.log("3")
//             setTimeout(() => {
//                 console.log("4")
//                   setTimeout(() => {
//                      console.log("5")
//                       setTimeout(() => {
//                         console.log("6")
//                         setTimeout(() => {
//                             console.log("7")


//                         },7000);
//                     }, 6000);
//               }, 5000);  
//             }, 4000);            
//           },3000);
//       }, 2000);
// }, 1000);



// const a = ms => new Promise(resolve => setTimeout(resolve, ms)); 
// let chain = Promise.resolve(); 
// for (let count = 1; count <= 7; count++) 
// { 
//   chain = chain.then(() =>
//    { 
//     console.log(count); 
//     return a(count*1000); 
//   }); 
// }


//  const promise= new Promise(function(res,rej){
//     var r="s"
//     if(r)
//     {
//         res(console.log("promise resolved"))
//     }
//     else{
//         rej(console.log("promise rejected"))
//     }
// })

// promise.then(function(data)
//         {console.log(data)})
//        .catch(function(err)
//        { console.log(err)})   

        // promise.then(function(result){
        //     console.log(result)
        // },function(err)
        // {
        //     console.log(err)
        // })



        // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);


// setTimeout(() => {
//     console.log("enjoy")
//     setTimeout(() => {
//       console.log("the");
//       setTimeout(() =>{
//         console.log("journey");
//         },3000)
//     },2000)
//   },1000)

// const promise = new Promise(function(res,rej){
//     let num=7;
//     if(num%2 == 0){
//       res("even");
//     }
//     else{
//       rej("odd");
//     }
//   })
//     promise.then(function(data){
//     console.log("is=",data);
//   }).catch(function(err){
//     console.log("Error",err);
//   })




// a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000); 
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves 
//     let result = await promise; 

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();


p1 = Promise.resolve(50);
p2 = 200
p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'geek');
});

Promise.all([p1, p2, p3]).then(function(values) {
    console.log(values);
}); 