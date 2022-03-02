class Person {

     constructor(private _id:number, private _names:string, private _course:boolean){

     }


    get names (){
        return this._names;
    }
    
    set names (value:string){
        this._names = value;
    }

     printPerson = ():void => {
        console.log(`${this._names}는 졸업을 ${this._course}했다.`)
    }

}

let employee1 = new Person(2,'kimm',false);
console.log(employee1.names);
employee1.printPerson();