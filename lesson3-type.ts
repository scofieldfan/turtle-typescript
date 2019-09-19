let isOk: boolean = false;
let age: number = 100;
let sex: string = "1";

let list1: number[] = [12, 3, 3, 3];
let list2: Array<number> = [12, 3, 3, 3];
let list3: Array<string> = ["1", "2", "3", "4"];
let list4: any[] = ["2", 23, false];
interface People {
    name: string;
    sex: number;
}
let list5: Array<People> = [{ name: "fan", sex: 1 }, { name: "x", sex: 0 }];

let x: [string, number];

x = ["1", 2];

console.log(x[0].substring(0));

enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Blue;
console.log("color:", color);

let abc: any = 4;
abc = "abc";
abc = null;
abc = undefined;
abc = {};
abc = false;

let obj: any = 4;
obj.test();
obj.toFixed();

let obj2: Object = 4;
obj.test();
obj.substring(0);
obj.toFixed();

function warnUser(): void {
    console.log("This is my warning message");
}
let a: void = null;
let c: void = undefined;

function error(message: string): never {
    throw new Error(message);
}

function info(message: string): never {
    setTimeout(() => {
        console.log(2);
    }, 100);
}

function create(o: object | null): Object {
    return o;
}

let objt: object = undefined;
create({ name: "fan" });

let test: any = "2323";
let test2: number = (<string>test).length;

let test3: number = (test as string).length;
