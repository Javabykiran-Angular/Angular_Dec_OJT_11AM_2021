
//Array of Object(json)

let arrobj=[
  {
    fname:'Sumit',
    lname:'Raokhande',
    id:9,
    country:{
      cid:1,
      cname:'India'
    },
    month:["Jan",'Feb','March'],
    result:[
      {
        sub:"M1",
        marks:40
      },
      {
        sub:"M2",
        marks:45
      },
      {
        sub:"M3",
        marks:65
      }
    ]
  },
  {
    fname:'Kiran',
    lname:'Raokhande',
    id:6,
    country:{
      cid:3,
      cname:'US'
    },
    month:["May",'Dec','June'],
    result:[
      {
        sub:"M1",
        marks:45
      },
      {
        sub:"M2",
        marks:55
      },
      {
        sub:"M3",
        marks:75
      }
    ]
  },
  {
    fname:'Spruha',
    lname:'Raokhande',
    id:3,
    country:{
      cid:4,
      cname:'Den Mark'
    },
    month:["April",'July','Aug'],
    result:[
      {
        sub:"M1",
        marks:50
      },
      {
        sub:"M2",
        marks:55
      },
      {
        sub:"M3",
        marks:85
      }
    ]
  }
];

for (let i = 0; i < arrobj.length; i++) {
  
  console.log(`
      First Name  ::${arrobj[i].fname}
      Last Name   ::${arrobj[i].lname}
      ID          ::${arrobj[i].id}
      Country Name::${arrobj[i].country.cname}
      Month       ::${arrobj[i].month.join(" ")}
      --------------Result------------
  `)

  for (let j = 0; j < arrobj[i].result.length; j++) {
    console.log(`
        Subject   ::${arrobj[i].result[j].sub}
        Marks     ::${arrobj[i].result[j].marks}
    `)
    
  }

  
}