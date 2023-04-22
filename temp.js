

// function add(a,b){
//     return a+b;
// }

// //functions are first class citizens in javascript 


// function average(a,b,f){
//     return f(a,b)/2;
// }

// const result = average(4,7,add);

// console.log(result);

// function a(){

//     function b(){

//        return 10;
//     }

//     return b;
// }

// const result = a()();

// console.log(result);




const f = function add(a,b){
    return a+b;
}

console.log(f(4,5));

//we can assign functions to variables
// we can pass functions as arguements to another functions 
// we can even return functions from functions 







// function a(){

//     return function b(){


//         return function c(){

//             console.log("hello");

//         }
//     }
// }

// a()()();