let a : number = 5 
let b: number = 7
let result = a + b
// console.log(result)

const JSONfile:any = JSON.parse("55");
console.log(typeof JSONfile)

let age: number = 25;
// let names: string = "Alice";
let college: string = "ACEM"
let isStudent: boolean = true;
let person: null = null;
let notDefined: undefined = undefined;
let bigNumber: bigint = 12345678901234567890n;
let uniqueKey: symbol = Symbol("unique");

// Using any
let dynamicValue: any = 42;
dynamicValue = "TypeScript";

// Using void
function greet(): void {
    console.log("Hello, world!");
}

// Arrays
let numbers: number[] = [1, 2, 3];
let names: string[] = ["John", "Doe"];
let mixed: (number | string)[] = [10, "Alice"];

// Tuples
let tuple: [number, string] = [1, "hello"];

// Enum
enum Color {
    Red,
    Green,
    Blue,
}
let myColor: Color = Color.Green;
