// number,string,boolean,any,void,null & undefined

var a1:number=10; //forward declaration & defination

// console.log('Value of a1 is '+a1);
var a2=20;
// console.log(`
//     Value of a2 is ${a2}
// `)

// a2='sumit';
var a3;
var a4:number;
// console.log(`
//     Value of a4 is ${a4}
// `)

var a5:any;
a5=2.5;
// console.log(`
//     Value of a5 is ${a5}
// `)

a5='Sumit';
// console.log(`
//     Value of a5 is ${a5}
// `)
a5=true;
// console.log(`
//     Value of a5 is ${a5}
// `)


// Type assertion
var a6:any;

// it achieve by 2 ways
// 1 Angle bracket
// 2 as syntax

// 1 Angle bracket

var temp=(<string> a6);
  // temp.
  // (<string> a6).
  // 2 as syntax

  var temp2=(a6 as string);
  // temp2.
//Operators
// Airthemathic => +,-,/,*,%
// logical => &&, ||
// bitwise => &,|,^,!,~,<<,>>
// unary => pre/post inc/dec ++,--
// ternary => condition ? expression1 : expression2
// assignment => =,+=,-=,*=,/=
// relational => <=,>=,<,>,!=,==(only checks the value),===(Strongly equality it checks both value as well as data type )
// a===b

var temp1=21<4?'hi':'bye';
// console.log("Value of temp1 "+temp1);
// var a=2;
// var b='2';

// var temp2=a===b?'Condition true':'false';

// var c1=2;
// var c2=3;

// var temp2=c1===c2?'hi':'bye';
// console.log(temp2);

//Control statement
// if,if-else,switch,break,coninue,nested if-else,if ladder

// if(2<4){
//     console.log("Condition is true..");
// }else{
//   console.log("Condition is false..");
// }

var choice=2;
// switch(choice){
//   case 1: console.log("U r in case 1");
//           break;
//   case 2: console.log("U r in case 2");
//           break;
//   default :console.log("U r in case default");
//           break;
// }

// loop
// for,while,do-while,foreach

var count=5;
// while(count!=0){
//   // console.log("Count is "+count);
//   count--;
// }

// do{
//     console.log("Count is "+count);
//   count--;
// }while(count!=0)

// for(var i=0;i<5;i++){
//   console.log(i);
// }
// console.log("After the loop "+i)
// var has global scope

// let has scope nearest within a block({})
// let i;
for(let i=0;i<5;i++){
    console.log("Value of i "+i)
   
}

// console.log("After the loop "+i)

const pi=2.5;
//const has global scope as well as local scope



