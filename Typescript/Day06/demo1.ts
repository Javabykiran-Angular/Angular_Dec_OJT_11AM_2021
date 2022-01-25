
//push & pop Method
//LIFO Principal Last In First Out
// when u add dynamic data into the array

let a1:number[]=[];

// a1.push(45);
// console.log(a1);
// a1.push(55,66,12);
// console.log(a1);
// let temp=a1.pop();
// console.log(a1);
// console.log("Poped value is "+temp);

//splice

var a2=[45,7,85,91,23];

// a2.splice(2,0,10);
// console.log(a2);
// a2.splice(1,0,40,74,30);
// console.log(a2);
// a2.splice(3,1);
// console.log(a2);
// a2.splice(4,2);
// console.log(a2);
// a2.splice(3,1,99);
// console.log(a2);

//slice
// It is used to copy a particular data
// when u have to copy a data mentioned it start index & end index
// & it returns a section of new array

var a3=[4,5,77,85,96,32,9,88,100,101,78];

// let res=a3.slice(1,6);
// console.log("Original array is "+a3);
// console.log(`
//   copied array is ${res}
// `)

// let res2=a3.slice(3);

// console.log(`
//   copied array is ${res2}
// `)


// Map

var a4=[2,3,4,5,6];

let res4=a4.map((value)=>{
  return (value*value);
})

// console.log("Original Array "+a4);
// console.log("Resultant Array "+res4);

let a5=["Sumit",'Mahesh','Priya',"Amit"];

let res5=a5.map((value,i)=>{

  return (" Hi Welcome "+value)
})

// console.log("Resultant Array "+res5);

let res6=a5.map((value,i)=>{
  
  if(i==3){
    return (" Hi Welcome "+value)
  }
  
})

console.log("Value is "+res6.join(" "));

