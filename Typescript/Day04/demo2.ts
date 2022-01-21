
//Anonymous Function

//function does not have any name

let temp1=function (){
  console.log("First function type is called..");
}

// temp1();

let temp2=function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(4,3);
// console.log("Addition is "+res);

//Fat arrow function/Arrow function

  let temp3=()=>{
    console.log("Fat arrow function is called...")
  }

  // temp3();

  let temp4=(a:number,b:number):number=>{
    return (a+b);
  }
 
  // console.log(`
  //     Addition is ${ temp4(8,8)}
  // `)


//Optional paramter Function

function add1(a:number,b?:number){
  console.log('Value of a is '+a)//4
  console.log('Value of b is '+b)//undefined
  console.log('Addition of a+b is '+(a+b)) //NAN=> Not a Number
}

// add1(4);

function add2(a?:number,b?:number){
  console.log('Value of a is '+a)//4
  console.log('Value of b is '+b)//undefined
  console.log('Addition of a+b is '+(a+b)) //NAN=> Not a Number
}

// add2();

//Default Parameter Function

function add3(a:number,b:number=7){
  console.log('Value of a is '+a)//1
  console.log('Value of b is '+b)//7
  console.log('Addition of a+b is '+(a+b)) //8
}


// add3(1);
add3(1,11);
console.log("---------")
add3(4)
