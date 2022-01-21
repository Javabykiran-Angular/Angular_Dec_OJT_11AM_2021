//Anonymous Function
//function does not have any name
var temp1 = function () {
    console.log("First function type is called..");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(4, 3);
// console.log("Addition is "+res);
//Fat arrow function/Arrow function
var temp3 = function () {
    console.log("Fat arrow function is called...");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log(`
//     Addition is ${ temp4(8,8)}
// `)
//Optional paramter Function
function add1(a, b) {
    console.log('Value of a is ' + a); //4
    console.log('Value of b is ' + b); //undefined
    console.log('Addition of a+b is ' + (a + b)); //NAN=> Not a Number
}
// add1(4);
function add2(a, b) {
    console.log('Value of a is ' + a); //4
    console.log('Value of b is ' + b); //undefined
    console.log('Addition of a+b is ' + (a + b)); //NAN=> Not a Number
}
// add2();
//Default Parameter Function
function add3(a, b) {
    if (b === void 0) { b = 7; }
    console.log('Value of a is ' + a); //1
    console.log('Value of b is ' + b); //7
    console.log('Addition of a+b is ' + (a + b)); //8
}
// add3(1);
add3(1, 11);
console.log("---------");
add3(4);
