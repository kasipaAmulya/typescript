"use strict";
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
exports.__esModule = true;
//creation of class
var Greetings = /** @class */ (function () {
    function Greetings() {
        this.safeProp = "teady";
        this.anonProp = "some safe locker here";
    }
    return Greetings;
}());
exports.Greetings = Greetings;
function Sample() {
}
exports.Sample = Sample;
var SpecialGreetings = /** @class */ (function (_super) {
    __extends(SpecialGreetings, _super);
    function SpecialGreetings() {
        return _super.call(this) || this;
    }
    SpecialGreetings.prototype.getsafeProp = function () {
        return this.safeProp;
    };
    SpecialGreetings.prototype.worked = function () {
        return "worked a lot";
    };
    return SpecialGreetings;
}(Greetings));
exports.SpecialGreetings = SpecialGreetings;
var objGreetings = new SpecialGreetings();
console.log(objGreetings.getsafeProp());
