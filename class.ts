//creation of class
export class Greetings{
    public strPop: string;
    private numProp: number;
    protected safeProp: any="teady";
    anonProp: any="some safe locker here";
}
export function Sample(){

}
export class SpecialGreetings extends Greetings{
    constructor(){
        super();
    } 
    public getsafeProp(){
        return this.safeProp;
    }
    public worked(): string{
        return "worked a lot";
    }
}
var objGreetings =new SpecialGreetings();
console.log(objGreetings.getsafeProp());