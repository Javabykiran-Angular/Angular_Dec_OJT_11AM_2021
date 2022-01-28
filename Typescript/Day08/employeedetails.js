"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, salary, role) {
        this.fname = f;
        this.lname = l;
        this.salary = salary;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.dispaly = function () {
        console.log("\n\n            First Name  :: ".concat(this.fname, "\n            Last Name   :: ").concat(this.lname, "\n            Salary      :: ").concat(this.salary, "\n            Department  :: ").concat(this.dept.getRole(), "\n\n          "));
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
