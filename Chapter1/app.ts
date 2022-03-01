let id:number = 123;
let names:string = "min";
let course:boolean = false;

enum GenderType {
    Male = 'male',
    Female = 'female'
}

type StrOrNum = number | string;

interface Person {
    id:number;
    names:string;
    readonly course?:boolean;
    gender?: 'male' | 'female';
    //addComment (comment:string):string;
    addComment?: (comment:string) => string;
}

function getPerson(id:number,names:string,course:boolean):Person{
    return {id:123, names:"un",course:true};
}

function savePerson(person:Person):void{
    // person.course=false;
}

savePerson({id:222,names:"kim",course:true,gender:'male'});

let someValue: any = 5;
someValue = 'hello';
someValue = true;