class person implements iOperations{
    constructor(name: string,age:number){
        this.name=name;
        this.age=age;
    }
    public getName():string{
        return this.name;
     } ;
     public getAge():number{
        return this.age;
     } ;
    public name: string;
    public age: number;
    getDisplay(){
        console.log("sample1");
    }
   
}
interface iOperations{
    getName():string;
    getAge():number;
}
class Employee extends person{
    constructor(name,age){
        super(name,age);
    }
    public salary: number;
    getDisplay(){
        console.log("sample2");
    }
 
}
var e= new Employee("amulya",32);
console.log(e.getName());
e.getDisplay();