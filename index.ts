// Static typing
let name1: string = "John";
let age: number = 30;
let isStudent: boolean = true;
let anything: any = true;

let unionType: number | string | any = 54;

let names: string[] = ["Ashok", "Bloke"];
let numbers: number[] = [1, 2, 3, 4, 5];
let combined: [string, number] = ["As", 1]; //This is tuple

console.log(names, numbers, combined);

function greet(person: string): string {
  return `Hello, ${person}!`;
}
// Type inference
let message = "Hello, TypeScript!"; // TypeScript infers this as string
let count = 10; // TypeScript infers this as number

type human = {
  name: string;
  age: number;
};
// Interface
interface Person {
  name: string;
  age: number;
  hobbies?: (string | number)[];
}

function introducePerson(person: Person): void {
  console.log(`This is ${person.name}, they are ${person.age} years old.`);
}

introducePerson({ name: "Alice", age: 28 });

// Classes
class Animal {
  constructor(public name: string) {}

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Rex");
dog.bark();
dog.move(10);

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

// Union
function printId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

// Type aliases
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({ x: 100, y: 100 });

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");

console.log([1, 2, 3, 4, 5].map((item) => item * 2));

const sum = <T extends number | string>(a: T, b: T): T => {
  return (a as any) + (b as any);
};

console.log(sum<number>(4, 3));

// type gurading

function printLength(value: string | number) {
  if (typeof value === "string") {
    // Inside this block, TypeScript knows that 'value' is a string
    console.log(value.length); // valid, as strings have a 'length' property
  } else {
    // Inside this block, 'value' is narrowed to a 'number'
    console.log(value.toFixed(2)); // valid, as numbers have a 'toFixed' method
  }
}

printLength("Hello, World!"); // Output: 13
printLength(123.456); // Output: 123.46

let twelve: any = "12";
let twelveNumber: number = twelve as number;
let twelveNumber2: number = <number>twelve;
console.log(twelveNumber, typeof twelveNumber);
console.log(twelveNumber2, typeof twelveNumber2);

console.log(10 as unknown as string); //Double casting

// Index signature
interface Person2 {
  [key: string]: string;
}
// Index signature
const person2: Person2 = {
  name: "John",
  age: "30",
  city: "New York",
};

console.log(person2.name); // Output: "John"
console.log(person2.age); // Output: "30"
console.log(person2.city); // Output: "New York"

interface Dictionary {
  [key: string]: number;
}

const prices: Dictionary = {
  apple: 2,
  banana: 1,
  orange: 3,
};

console.log(prices.apple); // Output: 2

interface Product {
  name: string;
  price: number;
  [key: string]: string | number; // Allow any other properties of type string or number
}

const item: Product = {
  name: "Laptop",
  price: 1000,
  brand: "Dell",
  warranty: 2,
};

console.log(item.name); // Output: "Laptop"
console.log(item.price); // Output: 1000
console.log(item.brand); // Output: "Dell"
console.log(item.warranty); // Output: 2

// Partial is commonly used when you need to update an object, and not all fields are required:
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const currentUser: User = { id: 1, name: "Alice", email: "alice@example.com" };

const updatedUser = updateUser(currentUser, { email: "newemail@example.com" });

console.log(updatedUser);

class Product {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  update(updates: Partial<Product>): void {
    Object.assign(this, updates);
  }
}

const product = new Product(1, "Laptop", 1500);

product.update({ price: 1200 });

console.log(product);

// The Record utility type in TypeScript is used to construct an object type where keys and their corresponding value types are defined.
// It's a concise and powerful way to create types for objects with a fixed set of keys.

type UserRoles = "admin" | "editor" | "viewer";

type RoleDescriptions = Record<UserRoles, string>;

const roles: RoleDescriptions = {
  admin: "Has full access to all resources.",
  editor: "Can edit existing resources.",
  viewer: "Can view resources but cannot make changes.",
};

console.log(roles.admin); // Output: "Has full access to all resources."
