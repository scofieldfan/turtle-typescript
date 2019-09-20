interface LabelledValue {
    label: string;
    color?: string;
    width?: number;
    area?: number;
}

function printMyLable(labelObj: LabelledValue) {
    console.log(labelObj.label);
}

let obj = { label: "123", d: 234 };

printMyLable(obj);

function createSquares(config: LabelledValue): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.area) {
        newSquare.area = config.area;
    }
    return newSquare;
}
console.log(createSquares({ label: "test" }));

interface Point {
    readonly x: number;
    readonly y: number;
}
let point: Point = { x: 1, y: 2 };

let testa: ReadonlyArray<number> = [1, 4, 5, 6, 6, 7];

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySerach: SearchFunc = (source: string, pattern: string) => {
    return source.indexOf(pattern) === -1;
};

mySerach("333", "222");

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["22", "33"];
myArray[2] = "bar";

interface ReadOnlyStringArray {
    readonly [index: number]: string;
}
let readonlyArray: ReadOnlyStringArray = ["aa", "bb", "dd"];

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(c: Date) {
        this.currentTime = c;
    }
    constructor(h: number, d: Date) {}
}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterfaceF;
}

interface ClockInterfaceF {
    tick();
}
function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterfaceF {
    return new ctor(hour, minute);
}
class AnimalClock implements ClockInterfaceF {
    hour: number;
    minute: number;
    constructor(h: number, m: number) {
        this.hour = h;
        this.minute = m;
    }
    tick() {
        console.log("aaa");
    }
}
let foo = createClock(AnimalClock, 1, 1);
console.log("foo:", foo);
foo.tick();

interface Shape {
    color: string;
}
interface Square extends Shape {
    length: number;
}
let fooS: Square = <Square>{};
fooS.color = "2";
fooS.length = 1;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let c: Counter = <Counter>function(start: number) {};
    c.interval = 100;
    c.reset = () => {};
    return c;
}

let counter = getCounter();
counter(10);
counter.reset();
counter.interval = 100;

class Control {
    private state: any;
}

interface SelectControl extends Control {
    select(): void;
}

class Button extends Control implements SelectControl {
    select(): void {}
}

class Button2 extends Control {
    select(): void {}
}

class Button3 implements SelectControl {
    select(): void {}
}
