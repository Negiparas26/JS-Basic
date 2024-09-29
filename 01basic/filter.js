// let user=[1,44,55,44,88,5]
// user.forEach( (value ,index ,arr)=>{
//     console.log(value ,index, arr);
// })

// filter  
// const num=[1,2,3,4,5]
//   let val= num.forEach( (item)=> { console.log(item)})
// console.log(val);  //undefined

// val=num.filter( (item) =>{ return item>2 })
// console.log (val)

// map
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num *2);
// console.log(squares); // Output: [1, 4, 9, 16, 25]
//let str="para"s";
//let str1='para's';
// let ptr="para's";
// let ptr1='para"s'
// // console.log(str);
// // console.log(str1);
// console.log(ptr);
// console.log(ptr1);
// console.log(1n|| 2n);
// console.log(2|| 4n);



// const user={
//     username:"paras",
//     price:554,
//     welcomemessage: function(){
//         console.log(`${this.username},welcome to website`);
  
//         console.log(this);  }
// }
//  user.welcomemessage()
// console.log(this);




// function chai(){
//     let username="paras"
//     console.log(this);
//     console.log(this.username)
//     //i can not use this inside function to access it value
// }
// chai()


// const chai = ()=>{
//     let username="paras"
//          console.log(this);  // {}
//       console.log(this.username)// undefined
// }
// chai()




// arrow function   ()=> 





// const sum=(num,numm)=>{
//     return num+ numm;
// }
// console.log(sum(3,4))



//implicit run 
// const sum=(num,numm)=>(num+ numm);

// console.log(sum(3,4))

 //"use strict";

// function x(){
//     console.log(this);
// }
// x()
const obj={
    a:10 ,
    b:5,
    p:console.log(this),
    x: ()=>{
       console.log(this)
    }
}

obj.x();





