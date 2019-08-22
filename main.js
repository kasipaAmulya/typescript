// export{}
// let a="sai";
// function greet(name){
//     console.log("hello "+name);
// }
// greet('amulya');
// let b: string='sai';
// console.log(b);
// let n: number=100;
// let isVald: boolean=true;
// let arr: String[]=['red','pink','green'];
// let arr1: null=null;
// let arr2: undefined=undefined;
// let arr3: any=['sai','22'];
// console.log(n);
// console.log(isVald);
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
function fun1() {
    return "trying  to have fun";
}
var fundoo = function () {
    return "Lol...\u0065\u0301";
};
console.log(fun1());
console.log(fundoo());
// function usingParams(pRequired: boolean,pDefault: string="DBS-ID",pOptional?:number,...pRest:string[]){
//     console.log(pRequired,pDefault,pOptional,pRest);
// }
// usingParams(true);
// function restParams(...pRest:string[]){
//     console.log(pRest);
//     console.log();
// }
// restParams('1','2','3');
//currly function (function inside a function)
function compilicated() {
    console.log("inside complicated:");
    return function () {
        console.log("i will display if invoke only!:");
        return function (pName) {
            console.log("hello" + pName);
        };
    };
}
compilicated()()("sai");
//self invokable functions
//(<function implementatio n>)();
//eg:(function(){})();
(function () {
    console.log("a function");
    return "a value";
})(); //
//lamda functions
//()=><value to return>
(function () {
    console.log('B function');
    return "b value";
});
var p = function () { return console.log("a value"); };
p();
var out = function (a) { return function (a, x, y) { return x + y + a; }; };
console.log(out(10)(10, 20, 50));
//reverse engineering
console.log((function (a) {
    return function (x, y) {
        return x + y + a;
    };
})(10)(20, 30));
