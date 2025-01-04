## **1. Static Typing**

TypeScript allows you to explicitly define types for variables, ensuring type safety during development.

```typescript
let name1: string = "John"; // String type
let age: number = 30; // Number type
let isStudent: boolean = true; // Boolean type
let anything: any = true; // Any type (can hold any value)
let unionType: number | string | any = 54; // Union type (can be number, string, or any)
```

- **`string`**: Represents text.
- **`number`**: Represents integers and floating-point numbers.
- **`boolean`**: Represents `true` or `false`.
- **`any`**: A flexible type that disables type checking.
- **Union Types (`|`)**: Allows a variable to have multiple possible types.

---

## **2. Arrays**

Arrays in TypeScript can be strongly typed.

```typescript
let names: string[] = ["Ashok", "Bloke"]; // Array of strings
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
```

- **`string[]`**: An array where all elements are strings.
- **`number[]`**: An array where all elements are numbers.

---

## **3. Tuples**

Tuples allow you to define an array with a fixed number of elements, each having a specific type.

```typescript
let combined: [string, number] = ["As", 1]; // Tuple with one string and one number
```

- Tuples enforce both the order and type of elements.

---

## **4. Functions**

Functions can have parameter and return types.

```typescript
function greet(person: string): string {
  return `Hello, ${person}!`;
}
```

- **Parameter Type**: Specifies the type of input arguments.
- **Return Type**: Specifies the type of the returned value.

---

## **5. Type Inference**

TypeScript automatically infers types when they are not explicitly defined.

```typescript
let message = "Hello, TypeScript!"; // Inferred as string
let count = 10; // Inferred as number
```

- TypeScript analyzes the assigned value to determine the type.

---

## **6. Interfaces**

Interfaces define the structure of objects.

```typescript
interface Person {
  name: string;
  age: number;
  hobbies?: (string | number)[]; // Optional property
}
```

- **Optional Properties (`?`)**: Properties that may or may not exist.
- Interfaces are used for type-checking objects.

---

## **7. Classes**

Classes encapsulate data and behavior.

```typescript
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
```

- **`constructor`**: Initializes class properties.
- **Inheritance (`extends`)**: Enables one class to inherit from another.
- **Public Fields**: Automatically create and initialize properties.

---

## **8. Enums**

Enums provide a way to define a set of named constants.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

- **Enum Values**: Start at `0` by default but can be customized.

---

## **9. Union Types**

Union types allow a variable to have multiple possible types.

```typescript
function printId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}
```

- Useful when a function or variable can handle multiple types.

---

## **10. Type Aliases**

Type aliases create reusable type definitions.

```typescript
type Point = {
  x: number;
  y: number;
};
```

- Simplifies complex type definitions.

---

## **11. Generics**

Generics make functions and classes reusable for multiple types.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString");
```

- **`<T>`**: Placeholder for a type that will be specified later.
- Enables type-safe reuse of logic.

---

## **12. Type Guards**

Type guards narrow down the type of a variable within a block.

```typescript
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // Valid for strings
  } else {
    console.log(value.toFixed(2)); // Valid for numbers
  }
}
```

- **`typeof`**: Checks the runtime type of a variable.

---

## **13. Type Assertion**

Type assertions tell TypeScript to treat a variable as a specific type.

```typescript
let twelve: any = "12";
let twelveNumber: number = twelve as number;
let twelveNumber2: number = <number>twelve;
```

- **`as`**: Modern syntax for type assertion.
- **`<>`**: Legacy syntax (not recommended in JSX).

---

## **14. Index Signatures**

Index signatures allow dynamic keys in objects.

```typescript
interface Person2 {
  [key: string]: string;
}
const person2: Person2 = {
  name: "John",
  age: "30",
  city: "New York",
};
```

- Useful when object keys are unknown at compile time.

---

## **15. Partial Utility Type**

`Partial` makes all properties of an interface optional.

```typescript
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}
```

- Commonly used for updating objects without requiring all fields.

---

## **16. Record Utility Type**

`Record` creates an object type with predefined keys and value types.

```typescript
type UserRoles = "admin" | "editor" | "viewer";
type RoleDescriptions = Record<UserRoles, string>;
const roles: RoleDescriptions = {
  admin: "Has full access to all resources.",
  editor: "Can edit existing resources.",
  viewer: "Can view resources but cannot make changes.",
};
```

- Ensures consistency in key-value mappings.

---

## **17. Double Casting**

Double casting bypasses strict type checks.

```typescript
console.log(10 as unknown as string);
```

- **`as unknown as string`**: First casts to `unknown`, then to `string`.

---

## **18. Map Function**

The `map` function transforms arrays.

```typescript
console.log([1, 2, 3, 4, 5].map((item) => item * 2));
```

- Applies a function to each element of an array.

---

## **19. Sum Function with Generics**

A generic sum function works with multiple types.

```typescript
const sum = <T extends number | string>(a: T, b: T): T => {
  return (a as any) + (b as any);
};
console.log(sum<number>(4, 3));
```

- **`<T extends number | string>`**: Restricts `T` to `number` or `string`.

---

## **20. Object.assign**

`Object.assign` merges objects.

```typescript
product.update({ price: 1200 });
```

- Copies properties from one object to another.

---

Certainly! While the previous explanation covered a wide range of TypeScript topics, there are a few additional concepts and features that are worth mentioning to ensure a comprehensive understanding of TypeScript. Below are some additional topics that were not explicitly covered in the previous breakdown:

---

## **21. Intersection Types**

Intersection types combine multiple types into one.

```typescript
type Admin = {
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  permissions: ["read", "write"],
};
```

- **`&` Operator**: Combines properties from multiple types.
- Useful for creating complex types by merging simpler ones.

---

## **22. Literal Types**

Literal types allow you to specify exact values as types.

```typescript
let direction: "left" | "right" | "up" | "down";
direction = "left"; // Valid
// direction = "diagonal"; // Error: Type '"diagonal"' is not assignable to type '"left" | "right" | "up" | "down"'.
```

- **String Literals**: Restrict variables to specific string values.
- **Numeric Literals**: Restrict variables to specific numbers.

---

## **23. Readonly Modifier**

The `readonly` modifier ensures that a property cannot be modified after initialization.

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.
```

- **Readonly Arrays**: Prevents modification of array elements.

```typescript
const numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
```

---

## **24. Conditional Types**

Conditional types allow you to define types based on conditions.

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

- **Ternary Operator (`? :`)**: Used to define conditional logic in types.

---

## **25. Mapped Types**

Mapped types transform existing types into new ones.

```typescript
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;
// Result:
// {
//   darkMode: boolean;
//   newUserProfile: boolean;
// }
```

- **`keyof`**: Extracts keys from an object type.
- **`in`**: Iterates over each key in the object.

---

## **26. Template Literal Types**

Template literal types allow you to create complex string types using template literals.

```typescript
type World = "world";
type Greeting = `hello ${World}`; // "hello world"
```

- Useful for generating string patterns dynamically.

---

## **27. Utility Types**

TypeScript provides several built-in utility types for common transformations.

### **a. `Pick`**

Creates a new type by picking specific properties from an existing type.

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

### **b. `Omit`**

Creates a new type by omitting specific properties from an existing type.

```typescript
type TodoInfo = Omit<Todo, "completed">;

const todoInfo: TodoInfo = {
  title: "Clean room",
  description: "Clean your room thoroughly.",
};
```

### **c. `Exclude`**

Excludes specific types from a union.

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

### **d. `Extract`**

Extracts specific types from a union.

```typescript
type T1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
```

### **e. `ReturnType`**

Extracts the return type of a function.

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}

type GreetReturnType = ReturnType<typeof greet>; // string
```

---

## **28. Never Type**

The `never` type represents values that never occur.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```

- **Use Cases**:
  - Functions that always throw errors.
  - Impossible states (e.g., exhaustive checks in switch statements).

---

## **29. Unknown Type**

The `unknown` type is a safer alternative to `any`.

```typescript
let value: unknown;
value = "Hello";
value = 123;

// You must perform type checking before using `unknown`.
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

- Unlike `any`, `unknown` requires explicit type checking or casting.

---

## **30. Keyof Operator**

The `keyof` operator extracts the keys of an object type.

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"
```

- Useful for working with dynamic keys or creating mapped types.

---

## **31. Type Guards with `in` Operator**

The `in` operator can be used as a type guard to check if a property exists in an object.

```typescript
interface Bird {
  fly: () => void;
}

interface Fish {
  swim: () => void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly(); // TypeScript knows `animal` is of type `Bird`
  } else {
    animal.swim(); // TypeScript knows `animal` is of type `Fish`
  }
}
```

---

## **32. Abstract Classes**

Abstract classes cannot be instantiated directly and are meant to be subclassed.

```typescript
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
dog.move(); // Output: Moving...
```

- **Abstract Methods**: Must be implemented by subclasses.

---

## **33. Decorators**

Decorators are a special kind of declaration that can be attached to classes, methods, or properties.

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}
```

- **Common Use Cases**:
  - Logging
  - Access control
  - Dependency injection

---

## **34. Namespace**

Namespaces help organize code by grouping related functionality.

```typescript
namespace Validation {
  export function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

console.log(Validation.isValidEmail("test@example.com")); // true
```

- Useful for avoiding naming conflicts in large projects.

---

## **35. Module Augmentation**

Module augmentation allows you to extend existing modules.

```typescript
// Original module
declare module "some-module" {
  export interface User {
    name: string;
  }
}

// Augmenting the module
declare module "some-module" {
  export interface User {
    age?: number; // Adding an optional property
  }
}
```

- Useful when working with third-party libraries.

---
