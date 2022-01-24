
// Array is growable & shrinkable dynamically

let a1=[4,5,6,7];
let a2:string[]=['angula 8','React js','Vue js','JSp'];
let a3=[];

let a4=[2.5,'Sumit',true,9,'Raokhande'];

// for(let i=0;i<a1.length;i++){
//   console.log(`
//       a[${i}]=${a1[i]}
//   `)
// }

// console.log("Array is "+a1);
// console.log("Array using Join "+a1.join(' '));
// console.log("Array using Join "+a1.join(' # '));

//foreach

// a1.forEach((myvalue,i)=>{
//     // console.log("Value is "+myvalue+" Index is "+i);
//     if(i==2){
//       console.log("Value is "+myvalue+" Index is "+i);
//     }
// });

//Rest Parameter function

function display(a:string,...item:number[]){

  console.log("value of a is "+a)
    console.log("Item is "+item);
}

// display('Sumit',2,4,8,88);
// display('raokhande',44,55,77,3,12,54,69,74,45);

let a5:number[]=[55,78,99];
// display('Priya',a5);

 //Array destructor
 let [t1,t2,t3]=a5;
//  console.log("Value of T1 "+t1);
//  console.log("Value of T2 "+t2);
//  console.log("Value of T3 "+t3);

 let a6:string[]=['angula 8','React js','Vue js','Embber js','JSP','Core java','Spring Boot'];

 let [str1,str2,,,str_core]=a6;
//  console.log("Str1 "+str1);
//  console.log("Str2 "+str2);
//  console.log("Str_core is "+str_core)

let [str_angular,...str_array]=a6;
console.log("Str_angular "+str_angular);
console.log("Str array"+str_array);
