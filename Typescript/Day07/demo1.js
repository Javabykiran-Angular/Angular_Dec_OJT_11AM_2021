//Array of Object(json)
var arrobj = [
    {
        fname: 'Sumit',
        lname: 'Raokhande',
        id: 9,
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", 'Feb', 'March'],
        result: [
            {
                sub: "M1",
                marks: 40
            },
            {
                sub: "M2",
                marks: 45
            },
            {
                sub: "M3",
                marks: 65
            }
        ]
    },
    {
        fname: 'Kiran',
        lname: 'Raokhande',
        id: 6,
        country: {
            cid: 3,
            cname: 'US'
        },
        month: ["May", 'Dec', 'June'],
        result: [
            {
                sub: "M1",
                marks: 45
            },
            {
                sub: "M2",
                marks: 55
            },
            {
                sub: "M3",
                marks: 75
            }
        ]
    },
    {
        fname: 'Spruha',
        lname: 'Raokhande',
        id: 3,
        country: {
            cid: 4,
            cname: 'Den Mark'
        },
        month: ["April", 'July', 'Aug'],
        result: [
            {
                sub: "M1",
                marks: 50
            },
            {
                sub: "M2",
                marks: 55
            },
            {
                sub: "M3",
                marks: 85
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n      First Name  ::".concat(arrobj[i].fname, "\n      Last Name   ::").concat(arrobj[i].lname, "\n      ID          ::").concat(arrobj[i].id, "\n      Country Name::").concat(arrobj[i].country.cname, "\n      Month       ::").concat(arrobj[i].month.join(" "), "\n      --------------Result------------\n  "));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n        Subject   ::".concat(arrobj[i].result[j].sub, "\n        Marks   ::").concat(arrobj[i].result[j].marks, "\n    "));
    }
}
