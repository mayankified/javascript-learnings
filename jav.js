"use strict"
// console.log("Hello Lodu!");
// // this a comment:
// var mayank="tinu";
// console.log(mayank);
// console.log(mayank);
// console.log(mayank.length);

// const pi=4.34;
// console.log(pi);

// let mayan="    tinaa      ";
// let maya=mayan.trim();
// console.log(mayan.length);
// console.log(maya.length);

// let newString="Mayank";
// // newString=newString.toUpperCase();
// // newString=newString.toLowerCase();
// // newString=newString.slice(1,5);
// console.log(newString);

// // typeof
// let as=2;
// console.log(typeof as);
// console.log(typeof as);

// //number to string
// console.log(typeof (as+""));

//string to numver
// let ass="54"
// console.log(typeof +ass);

//another way
//as=Number(as);
//as=String(as);

// let string1="Mayank";
// let string2="Kashyap";
// let String=string1+" " +string2;
// console.log(String);

// let string1="23";
// let string2="24";
// let String=+string1 + +string2;
// console.log(String);

//template
// let name="Mayank";
// let age=17;
// let aboutme=`My name is  ${name} and i am  ${age} years old`;
// console.log(aboutme);

//undefined
// let poo;
// console.log(typeof poo);

// null
//let as=null;
//console.log(typeof as); //error //bugg

// // bigint
// let nam=BigInt(232323);
// let na=323232n;
// console.log(nam + na);

// == & != only check values
// // === & !== checks data trypes also
// let as=5;
// let asa=6;
// console.log(as>asa);

// falsy value

// false
// ""
// null
// undefined
// 0

// let age=9;
// let dr;
// console.log(age>18?"daruu":"chai");

// and && or ||

// let ass=prompt("Enter the number");
// console.log(ass);

// let day=6;
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//         case 1:
//             console.log("Monday");
//             break;
//             case 2:
//                 console.log("Tuesday");
//                 break;
//                 case 3:
//                     console.log("Wednesday");
//                     break;
//                     case 4:
//                         console.log("Thursday");
//                         break;
//                         case 5:
//                             console.log("Friday");
//                             break;
//                             case 6:
//                                 console.log("Saturday");
//                                 break;
//                             }

//sum of numbers using whileloop
// let i=1;
// let num=1111,sum=0;
// while(i<=num){
//     sum+=i
//     i++;
// }
// console.log(sum)

// let array=["a","b",3,3.55,null,undefined]; 
// console.log(typeof array[5])
// console.log(Array.isArray(array))

// let ams=[1,2,3]
// console.log(ams)

//push
// ams.push(4)
// console.log(ams)

//pop
// let as=ams.pop()
// console.log(ams)
// console.log(as)

//unsifht
// ams.unshift(0)
// console.log(ams)

//shift
// ams.shift()
// console.log(ams)

//push and pop are faster//

//array nd objects are refrence type var, pointers are used.

//cloning array
//1
// let arr1=[1,2,3]
// let arr2=[1,2,3]
// console.log(arr1===arr2)
// 2
// let arr1=[1,2,3]
// let arr2=arr1.slice()                fastest
// console.log(arr1===arr2)
// console.log(arr1)
// console.log(arr2)
//3
// let arr1=[1,2,3]
// let arr2=[].concat(arr1)             concat mtlb jodna
// console.log(arr1===arr2)
// console.log(arr1)
// console.log(arr2)
//4
// let arr1=[1,2,3]
// let arr2=[...arr1]
// console.log(arr1===arr2)              use this
// console.log(arr1)
// console.log(arr2)

//adding two array::
// let arr2=arr1.slice().concat([1,2,3])
// console.log(arr2).

// let arr2=[...arr1,2,3,4]
// console.log(arr2)

// let arr2=[].concat(arr1,[1,2,3])
// console.log(arr2)

//for loop in array
// let arr1=["apple","mango","grapes"]
// for(let i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i].toUpperCase())
// }

//constant array me sare methods use kr sakte ho sirf directly assign nhi kr sakte[location thodi change hoga]
//use const array[refrence type(heap memory,pointers)] from now on

//for of loop

// let arr=[1,2,3,4,5]
// for(let ex of arr)
// {
//     console.log(arr[ex-1])
// }

//for in loop

// let arr=[1,2,3,4,5]
// for(let ex in arr)
// {
//     console.log(arr[ex])
// }

