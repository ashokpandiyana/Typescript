var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Static typing
var name1 = "John";
var age = 30;
var isStudent = true;
var anything = true;
var unionType = 54;
var names = ["Ashok", "Bloke"];
var numbers = [1, 2, 3, 4, 5];
var combined = ["As", 1]; //This is tuple
console.log(names, numbers, combined);
function greet(person) {
    return "Hello, ".concat(person, "!");
}
// Type inference
var message = "Hello, TypeScript!"; // TypeScript infers this as string
var count = 10; // TypeScript infers this as number
function introducePerson(person) {
    console.log("This is ".concat(person.name, ", they are ").concat(person.age, " years old."));
}
introducePerson({ name: "Alice", age: 28 });
// Classes
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("".concat(this.name, " moved ").concat(distance, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog("Rex");
dog.bark();
dog.move(10);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Union
function printId(id) {
    console.log("Your ID is: ".concat(id));
}
printId(101);
printId("202");
function printCoord(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
printCoord({ x: 100, y: 100 });
// Generics
function identity(arg) {
    return arg;
}
var output = identity("myString");
console.log([1, 2, 3, 4, 5].map(function (item) { return item * 2; }));
var sum = function (a, b) {
    return a + b;
};
console.log(sum(4, 3));
// type gurading
function printLength(value) {
    if (typeof value === "string") {
        // Inside this block, TypeScript knows that 'value' is a string
        console.log(value.length); // valid, as strings have a 'length' property
    }
    else {
        // Inside this block, 'value' is narrowed to a 'number'
        console.log(value.toFixed(2)); // valid, as numbers have a 'toFixed' method
    }
}
printLength("Hello, World!"); // Output: 13
printLength(123.456); // Output: 123.46
var twelve = "12";
var twelveNumber = twelve;
var twelveNumber2 = twelve;
console.log(twelveNumber, typeof twelveNumber);
console.log(twelveNumber2, typeof twelveNumber2);
console.log(10);
