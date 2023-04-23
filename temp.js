

//IIFEs 
// Immidiately invoked function expressions



// (function(){
//     console.log("hello");
// })();



//arrow functions

// const add = function(a,b){
//     return a+b;
// }

// const add =  (a,b) => a+b;

// console.log(add(3,4));



// let person = {

//     firstName:"Utkarsh",
//     lastName:"Malik", 
//     age:27,
//     sayHi: function(){
//         console.log("Hii");
//     },
//     getFullName:function(){

//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(person.getFullName());


// const getFullName = person.getFullName;

// const fullName= getFullName();
// console.log(fullName);




//this keywords : 

// value of this keyword inside of methods point to the object with which
//that object is called with 






//this -> window 


var a = "hello";

// console.log(this.a);





//constructor functions 

// let person = {

//     firstName:"Utkarsh",
//     lastName:"Malik"
// // }



// function Person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.getFullName= function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// let person1 = new Person("Utkarsh", "Malik");

// let person2  = new Person("Rahul", "Jain");

// console.log(person1);
// console.log(person2);

// console.log(person1.toString());





// function Person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }

// let person1 = new Person("Utkarsh", "Malik");

// let person2  = new Person("Rahul", "Jain");



// Person.prototype.getFullName = ()=>{
//     console.log("hello");
// }

// console.log(Person.prototype);





// const obj = {name:"Utkarsh"};

// const obj = new Object({name:"Utkarsh"});

// console.log(Object.prototype);

// console.log(obj.toString());



// function Person(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }

// let person1 = new Person("Utkarsh", "Malik");

// let person2  = new Person("Rahul", "Jain");



// Person.prototype.getFullName = ()=>{
//     console.log("hello");
// }

// console.log(person1.toString());


// console.log(person1.__proto__.__proto__ === Object.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);



// let arr=["1","12","12342"]
// let arr = new Array("1","12","12342");

// console.log(typeof arr);


// console.log(arr.__proto__ === Array.prototype);

// arr.toString = ()=> 5;

// console.log(arr.toString());

// console.log(Object.prototype.__proto__);



//methods : forEach, map, filter, reduce 


// call apply and bind are methods 

// const person1={
//     firstName:"Utkarsh",
//     lastName:"Malik"
// }


// const person2={
//     firstName:"Rahul",
//     lastName:"Jain"
// }

// function getFullName(age,x){
//     return this.firstName + " " +  this.lastName + age +x;
// }


// const fullName = getFullName.call(person1,10,20);
// console.log(fullName);


// const fullNameWIthApply = getFullName.apply(person1,[10,20]);
// console.log(fullNameWIthApply);


// const getFullNameFn = getFullName.bind(person1);

// getFullNameFn(10,20);




