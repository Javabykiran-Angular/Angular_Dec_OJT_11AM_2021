// 1 function without arg. & without return type
// 2 function with arg. & without return type
// 3 function without arg. & with return type
// 4 function with arg. & with return type

// 1 function without arg. & without return type
function add1(){
  console.log("// 1 function without arg. & without return type")
}

// add1();

// 2 function with arg. & without return type

function add2(a:number,b:number){
  console.log("Function Type 2 is called..");
  console.log("Addition is "+(a+b))
}

// add2(5,6);

// 3 function without arg. & with return type

function add3():number{
  return (4+5)
}

// let temp1=add3();
// console.log("Result is "+temp1);
// console.log("Result is "+add3());

// 4 function with arg. & with return type

function add4(a:number,b:number):number{
  return (a+b);
}

console.log(`
    Addition is ${add4(7,7)}
`)
