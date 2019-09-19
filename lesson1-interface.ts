function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

interface Person {
    firstName: string;
    lastName: string;
}

let user = { firstName: "Jane", lastName: "User" };

let user2 = { firstName: "Jane" };
greeter(user);
greeter(user2);
