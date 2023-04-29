// function getAllusers(){

//     //it will make a API call which will take 1 second 

//     let users=[];

//     setTimeout(()=>{
//         users=[
//             {userName:"Utkarsh", email:"utmalik@amazon.com"},
//             {userName:"Rahul",email:"rahul@fyi.com"}
//         ];
//     },1000);

//     return users;
// }


// function findUser(userName){
//     const users = getAllusers();
//     const user = users.find((user)=> user.userName === userName);
//     return user;
// }

// console.log(findUser('Rahul'));



// const promise = new Promise((resolve,reject)=>{

//     //make some operation

//     if(success){
//         resolve(value);
//     }else{
//         reject(error);
//     }

// })




function getUsers(){

     return new Promise((resolve,reject)=>{

            //api call
            setTimeout(()=>{

            resolve([{userName:"Utkarsh", email:"utmalik@amazon.com"},
                {userName:"Rahul",email:"rahul@fyi.com"}]);

        },1000);
     });
}


// function findUser(userName){
//     const users = getAllusers();
//     const user = users.find((user)=> user.userName === userName);
//     return user;
// }


function findUser(userName){

    getUsers()
    .then((users)=>{
        const user = users.find((user)=> user.userName === userName);
        console.log(user);
    })
    .catch((err)=>{
        console.log(err);
    })
}

findUser('Rahul');
console.log("Utkarsh");










// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// },1000);

// setTimeout(()=>{
//     console.log(3);
// },0);

// console.log(4);


// for(let i=0;i<4;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }