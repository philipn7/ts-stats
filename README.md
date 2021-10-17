# Stats
A TypeScript application that takes in csv data and analyzes it to learn about refactoring for reusable code, abstract classes, inheritance and composition. As part of the 'TypeScript: The Complete Developers Course'.

## Project Setup
`npm --init`

`tsc --init`

`npm install nodemon concurrently`

Setup source and build directory in tsconfig.json
`"rootDir": "./src"` `"outDir": "./build"`

Scripts in package.json to auto build and run
```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

## Type Assertion
`row[5] as MatchResult`

Tells TypeScript to override type to our choosing. In this example a string is overridden as enum type called MatchResult.

## Two ways to refactor for code reuse
We have a class called CsvFileReader but we put so much project specific code that it is not as reusable.

### Abstract class
Create an abstract CsvFileReader class and then have child classes that cater to specific needs. There is a type used in the CsvFileReader class which we reference everywhere. How do we abstract that type away? We can cheat and use the 'any' type but that's not ideal.

### Generics
- Like functions arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return at a future point
- Used heavily when writing reusable code

```
class HoldAnything<TypeOfData> {
	data: TypeOfData;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
```

In the above example, 'TypeOfData' can be thought of as an argument passed into the class 'HoldAnything'. The type of 'data' is generic until we pass that argument.