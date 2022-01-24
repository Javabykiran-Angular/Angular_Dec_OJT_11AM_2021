// Array is growable & shrinkable dynamically
var a1 = [4, 5, 6, 7];
var a2 = ['angula 8', 'React js', 'Vue js', 'JSp'];
var a3 = [];
var a4 = [2.5, 'Sumit', true, 9, 'Raokhande'];
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
function display(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("value of a is " + a);
    console.log("Item is " + item);
}
// display('Sumit',2,4,8,88);
// display('raokhande',44,55,77,3,12,54,69,74,45);
var a5 = [55, 78, 99];
// display('Priya',a5);
//Array destructor
var t1 = a5[0], t2 = a5[1], t3 = a5[2];
//  console.log("Value of T1 "+t1);
//  console.log("Value of T2 "+t2);
//  console.log("Value of T3 "+t3);
var a6 = ['angula 8', 'React js', 'Vue js', 'Embber js', 'JSP', 'Core java', 'Spring Boot'];
var str1 = a6[0], str2 = a6[1], str_core = a6[4];
//  console.log("Str1 "+str1);
//  console.log("Str2 "+str2);
//  console.log("Str_core is "+str_core)
var str_angular = a6[0], str_array = a6.slice(1);
console.log("Str_angular " + str_angular);
console.log("Str array" + str_array);
