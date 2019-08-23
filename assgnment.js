var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.getName = function () {
        return this.name;
    };
    ;
    person.prototype.getAge = function () {
        return this.age;
    };
    ;
    person.prototype.getDisplay = function () {
        console.log("sample1");
    };
    return person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age) {
        return _super.call(this, name, age) || this;
    }
    Employee.prototype.getDisplay = function () {
        console.log("sample2");
    };
    return Employee;
}(person));
var e = new Employee("amulya", 32);
console.log(e.getName());
e.getDisplay();
