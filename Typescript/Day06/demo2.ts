
//Json Object java script object notation
//it can store data is in key & value format

let objJson={
  fname:'Sumit',
  "lname":'Raokhande',
  id:9
}

// u can retrive a data in 2 ways
//1 dot operator
//2 square operator

//1 dot operator

// console.log(`
//   First Name  :: ${objJson.fname}
//   Last name   :: ${objJson.lname}
//   Id          :: ${objJson.id}
// `)

//2 square operator

console.log(`
  First Name  :: ${objJson["fname"]}
  Last name   :: ${objJson["lname"]}
  Id          :: ${objJson['id']}
`)