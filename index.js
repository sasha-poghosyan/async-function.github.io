// function f(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('ok')
//         },2000);
//     })
// }
// const myPromise = f()

// myPromise.then((res)=>{
//     alert(res)
// })



// function f(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve('ok')
//         },1000);
//     })
// }
// const myPromise = f()

// myPromise.then((y)=>{
//     alert(y)
//     return 90
// })
// .then((x)=>{
//     alert(x)
// })

















// function f(){
// return  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)

//     },1000)
// })
// }
// const myPromise = f()
// myPromise.then((y)=>{
//     alert(y)
//    return y +1
// })
// .then((x)=>{
//     alert(x)
//     return x +1
// })
// .then((z)=>{
//     alert(z)
//     return z +1
// })


// function f(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error('inch vor ban ayn che'))
//         },1000)
//     })
// }
// const myPromise =f()
// myPromise.catch((err)=>{
//     alert(err)
// })










// function f(){
//     if(19<11){
//         return new Promise((resolve,reject)=>{
//             resolve('Chisht')
//         })
//     }
//     else{
//         return new Promise((resolve,reject)=>{
//             reject("sxal")
//         })
//     }
// }
// const myPromise =f()


// myPromise.then((y)=>{
//     alert(y)
// })
// myPromise.catch((x)=>{
//     alert(x)
// })

















// function f(){
//     return new Promise((resolve,reject)=>{
//        resolve('chisht')
//    })
//      return new Promise((resolve,reject)=>{
//        reject('sxal')
//    })
// }
// const myPromise = f()

// myPromise.then((y)=>{
//     alert(y)
// })


// myPromise.catch((c)=>{
//     alert(c)
// })



// async function x(){
//     return 11
// }
// x().then((result)=>{
//     alert(result)
// })



// async function x(){
//     throw new Error('err')
// }
// x().then ((result)=>{
// alert(result)
// })
// .catch((err)=>{
//     alert(err)
// })



// function f1(){
//     return new Promise((resolve,reject)=>{
//         resolve(9)
//     })
// }
// async function f2(){
//     await f1()
//     alert(10)
//     return 100
// }
// f1().then((res)=>{
//     alert(res)
// })
// f2().then((x)=>{
//     alert(x)
// })




// function f1(){
//     return new Promise((resolve,reject)=>{
//         resolve(9)
//     })
// }
// async function f2(){
//     try{
//         const r  = await f1()
//         alert(r)
//     }
//     catch(err){
//         alert(err)
//     }
// }
// f2()




//stexcel funkcia vorn kashxati prompt @st vori arjeqi stexcel async funkcia
//stexcel 3 hat funkcia voronc trvi jamanak @st hertakanutyan ashxatelu
//stexcel funkcianer voronq petq e ashxaten hertov @st hertakanutyamb minchev mekn chi ashxatum myusn chi sksum


function f(){
   let x = prompt('barev')
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(x === 'resolve') {
       resolve('ok')
      } 
        else{

         return reject('sxal')
        }


})
    })
}
const myPromise = f()

myPromise.then((z)=>{
   alert(z)


})
myPromise.catch((y)=>{
    alert(y)

})










// function f(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('arajan')
//         },3000)

//     })
// }
// const func = f()
// func.then((x)=>{
//     alert(x)
// })
// function f2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('erkrord')
//         },2000)
//     })
// }
// const func1 = f2()
// func1.then((y)=>{
//     alert(y)
// })

// function f3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('errord')
//         },1000)
//     })
// }
// const func2 = f3()
// func2.then((c)=>{
//     alert(c)
// })





// function f(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('arajan 1')
//         },3000)

//     })
// }
// function f1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('erkrord 2')
//         },1000)
//     })
// }

// function f2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('errord 3')
//         },2000)
//     })
// }


// async function f4(){
//     try {
//       const r =  await f()
//       alert(r)
//       const a = await f1()
//       alert(a)
//       const s = await f2()
//       alert(s)
//     }
//     catch{
//         alert('error')
//     }
// }
// f4()






// function f(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// resolve('1')
//         },4000)
//     })
// }
// function f1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('2')
//         },1000)
//     })
// }
// function f2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('3')
//         },3000)
//     })
// }
// f().then((z)=>{
//     alert(z)
// })
// f1().then((x)=>{
//     alert(x)
// })
// f2().then((c)=>{
//     alert(c)
// })




// function f(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// resolve('1')
//         },4000)
//     })
// }
// function f1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('2')
//         },1000)
//     })
// }
// function f2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('3')
//         },3000)
//     })
// }
// async function  f4(){
// try{
//    const a = await f2()
//    alert(a)
//    const z = await f()
//    alert(z)
//    const x = await f1()
//    alert(x)
// }
// catch{
//     alert('ERROR')
// }
// }
// f4()












// let x = prompt('asa inch e grac')
// function f(){
//     return new Promise((resolve,reject)=>{
//         if(x === '555'){
//             resolve('ok')
//         }else{
//             reject('sxal')
//         }

//     })
// }
// const func = f()
// f().then((z)=>{
//     alert(z)
// })
// f().catch((x)=>{
//     alert(x)
// })





// function f(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          resolve(5)
//       },2000)
//     })
// }
// function f1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(5)
//         },1000)
//     })
// }
// function f2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(5)
//         },3000)
//     })
// }
// f().then((res)=>{
//     console.log(res);
//    return f1(res) 

// })
// .then((res)=>{
//     console.log(res + 5);
//     return f2(res)
// })
// .then((res)=>{

// console.log(res + 10);
// return (res)

// })









// function f(){
//     return new Promise((resolve,reject)=>{
//         setInterval(() => {
//             resolve(10)
//         }, 1000);
//     })
// }

// async function f1(){
//     await f()
//   alert(55)
// return 555



// }
// f().then((x)=>{
//     alert(x)
// })


// f1().then((c)=>{
//     alert(c)



// })





// let x = function (arr){
//     return arr * 5
// };
// let y = [
//     {
//         z:[15,75]
//     },
//     {
//         f:{
//             a:{
//                 b:[35,55]
//             },
//             c:{
//                 d:[15,70,110]
//             }
//         }
//     },
//     50,
//     [
//         [9,4,7]
//     ],
//     x
// ];
// alert(y[0].z[1] + y[3][0][2] + y[2] + y[4](7));
// console.log(y);

//75 + 7 + 50 + 35








// let  x = [7,32,26];
// let y = function(arr) {
//     let i = 0;
//     while( i < x.length){
//         alert(arr[i]);
//         i++
//     }
// };
// y(x);
// y([56,32,45]);



// let z = function (arr){
//     let i = 0;
//     while(i < arr.length){
//         alert("Ահա ձեր թիվը " + arr[i]);
//         i++
//     }
// }
// z([4,5,6])



// let x = function (){
//     return 20;
// }
// let z =function (){
//     return 555
// }
// let y = function(x){
//     return x ()

// }
// alert(y(z))
// alert(y(x))




// let z = [1,2,5]
// let x = function(arr){
//     let i =0;
//     while(i < z.length){
//         alert(arr[i])
//         i++
//     }
// }

// x([55,66,77])



// let x =[7,32,26];
// let forEach = function(arr,fun){
//     let i = 0;
//     while(i< x.length){
//         fun(arr[i])
//         i++
//     }
// };
// x.forEach(function(val){
//     alert(val);
//     alert('Aha dzer tivn '+ val)
// })





// let x = [7,32,26];
// let forEach = function(arr,fun){
//     let i = 0;
//     while(i < x.length){
//         fun(arr[i],i);
//         i++
//     }
// };
// forEach([15,25,35],function(val,i){
//     alert(val);
//     alert('aha dzer tivn ' + val + ' index e ' + i)
// })







// let z = function(arr,f1){
//     let i = 0;
//     while(i < arr.length){
//         f1(arr[i],i);
//         i++

//     }

// };
// z([15,25,35],function(val,i){
//     alert(val)
//     alert('dzer tivn e ' + val + ' index ' + i)

// })


// let x = [4,5,6,7,8];
// x.forEach(function(val,i){
//     alert(val)
//     alert("aha dzer tivn "+ val + ' index '+ i)
// })



// let x = [9, 12, 64, 25]
// let y = function (x) {
//     return x + 2
// };
// let z = 0;
// x.forEach(function (val) {
//     z = z + y(val) + 3
// });
// let f = function (val1) {
//     return y(val1) + y(val1);

// };
// let g = function (val1) {
//     return f(val1) + 1;

// };
// alert(y(g(f(z))));

// z 14 17 69 30 = 130
//f 130+2 130+2 =  264
//g 264 +2 264 +2 = 533
//y 533 +2 = 535
//z 130
//f 264
//g 533
//y 535



 //let x = [7,25,24]
// x.forEach(function(y){
//     alert(y)
// })


// x.forEach(function(y,i){
//     x[i] = y *2
//     alert(x)
// })

// let z = x.map(function(y){
//     return y *2 
// })
// alert(z)





// let x = [
//   {
//       name :'Artur',
//       lastName:"caturyan"
//   },
//   {
//       name:'Sasha',
//       lastName:'Poghosyan'
//   }

// ];
// let names = [];
// x.forEach(function(val,i){
//     names[i] = val.name
// })
// alert(names)


//map - ov

// let names = x.map(function(val){
//     return val.name;
// })
// alert(names)




// let x = [1, 2, 3, 4]
// let y = function (x) {
//     return x + 2
// };
// let z = 0;
// x.forEach(function (val) {
//     z = z + y(val) + 3
// });
// let f = function (val1) {
//     return y(val1) + y(val1);

// };
// let g = function (val1) {
//     return f(val1) + 1;

// };
// alert(y(g(f(z))));


//z 6 7 8 9 = 30
//f 30 + 2 +30 +2 = 64
// 64+2 + 64 +2 = 133
//133 + 2






// let x =[7,32,26];
// let forEach = function(arr,fun){
//     let i = 0;
//     while(i< x.length){
//         fun(arr[i])
//         i++
//     }
// };
// forEach([15,25,35],function(val){
//     alert(val);
//     alert('Aha dzer tivn '+ val)
// })





// let x = [10, 22, 30, 4]
// let y = function (x) {
//     return x + 10
// };
// let z = 0;
// x.forEach(function (val) {
//     z = z + y(val) + 5
// });
// let f = function (val1) {
//     return y(val1) + y(val1);

// };
// let g = function (val1) {
//     return f(val1) + 10;

// };
// alert(y(g(f(z))));


//z 25 37 45 19 = 126
//f 136 + 136 = 272
//g 282 + 282 + 1 = 565
//y 565 +10