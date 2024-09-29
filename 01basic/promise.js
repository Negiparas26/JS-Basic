//promise no->1

//promise is a object
//with new keyord ia a instance in promise

const  promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('async task is complete');
        //use resolve here for connection or call 
        resolve()
    },1000)
})

//promise is create 
// then consum it 
promiseOne.then(function(){
console.log("promise consumed");
})
//use resolve() for connection for output (promised consumed)


// promise no -->2             .then 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task two")
        resolve ();
    },1000)
}).then (()=>console.log("Async task 2 resolved"))



// promise no-->3        data 

const promisethree=new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@gmail.com"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);
})


// promise no-->4      .then .then ,catch,finally

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"paras",password:"123"})
        }else {
            reject("ERROR something went wrong")
        }
    },1000)
})
//promisefour.then(function(){}).catch()
promisefour
.then((user)=>{
    console.log(user);
    return user.username; 
})
.then((data)=>console.log(data))
.catch(function(err){console.log(err)})
.finally(function(){console.log("the promise is reslove rejected 4")})

//promise ---> no 5     async   await

const promisefive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"paras",password:"123"})
        }else {
            reject("ERROR something went wrong in 5")
        }
    },1000)
})

// async await can not handle error directly  use try catch 
async function consumepromisefive(){
   try{
    const response=  await promisefive
   console.log(response);
   }catch(error){
    console.log(error)
   }
}
consumepromisefive()




// async await  && fetch().then.then


async function getallusers(){
   try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await response.json()
    console.log(data);

   }catch(error){
    console.log("E :",error)
   }
}
getallusers()


/// fetch()
//.then(()=>{})


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)})
  