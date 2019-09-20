let input = [1, 2];

let [first, second] = input;

console.log(first);
console.log(second);

function add([a, b]: [number, number]): number {
    return a + b;
}

console.log(add([4, 5]));

let [a, ...rest] = [1, 2, 3, 4, 5];
console.log("rest", typeof rest);
console.log("rest", rest);

let o = {
    d: "foo",
    b: 1,
    c: "bar"
};
let { b, d } = o;
console.log(d, b);

function keepWithObj(wholeObj: { a: string; b?: number }) {
    let { a, b = 1001 } = wholeObj;
    console.log("keepObj a", a);
    console.log("keepObj b", b);
}
keepWithObj({ a: "33" });
keepWithObj({ a: "22", b: 100 });

type C = { a: string; b?: number };
function f({ a = "1", b = 1000 }: C): void {
    console.log("f ", a);
    console.log("f ", b);
}

f({ a: "2" });
f({ a: "2", b: 2 });

let first1 = [1, 2];
let second1 = [2, 3];
let result = [2, ...first1, 4, 5, ...second1];
console.log("result.", result);

let object1 = { a: 1, b: 2, c: 3 };
let object3 = { a: 100, ...object1 };
let object4 = { ...object1, a: 100 };
console.log(object3);
console.log(object4);

class M {
    p = 12;
    m() {}
}

let m1 = new M();
let m2 = { ...m1 };
console.log("m1.p", m1.p);
console.log("m1.m", m1.m);
console.log("m2.p", m2.p);
