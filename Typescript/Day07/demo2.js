var Myclass = /** @class */ (function () {
    function Myclass(f, l, id) {
        this.fname = f;
        this.lname = l;
        this.id = id;
    }
    Myclass.prototype.display = function () {
        // let a:number;
        console.log("\n        First Name  ::".concat(this.fname, "\n        Last Name   ::").concat(this.lname, "\n        ID          ::").concat(this.id, "\n    "));
    };
    return Myclass;
}());
var obj = new Myclass("Sumit", "Raokhande", 9);
obj.display();
