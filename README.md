# Stats Project
A TypeScript application that takes in csv data and analyzes it. Main focus is to learn about refactoring for reusable code comparing inheritance versus composition. As part of the 'TypeScript: The Complete Developers Course'.

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

# Two Ways to Refactor for Code Reuse
We have a class called CsvFileReader but we put so much project specific code that it is no longer reusable.

## Inheritance
Create an abstract CsvFileReader class and then have child classes that cater to specific needs. 

There is a type used in the CsvFileReader class which we reference everywhere. How do we abstract that type away? We can cheat and use the 'any' type but that's not ideal.

![](images/Pasted%20image%2020211017170750.png)

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

## Composition
![](images/Pasted%20image%2020211017164650.png)

Interface based approach. MatchReader now uses an interface. We 'delegate' the responsibility of loading the data to another class.

- Inheritance 'is a' relationship
- Composition 'has a' relationship

What is composition and what isn't? Composition is NOT compositing pieces of an object into another. This is the literal use of 'composition' in the English language and is actually called multiple inheritance. 

Composition is an object that has a reference to another object (interface) and is **delegating** specific behaviour to it.

By using composition, we can create more complex relationships without having duplicate hierarchies for variations of parent classes.

## Example of Inheritance:
Say we want to create Window and Wall objects with rectangular and circular shapes...

![](images/Pasted%20image%2020211017174531.png)
- The parent classes have properties which are shared across it's children. Rectangular and Circular have different properties hence they need different object to represent them. Note the duplicate hierarchies if we wanted both rectangular and circular objects using inheritance.

## Example of Composition

![](images/Pasted%20image%2020211017174651.png)
- Using composition means that the shape is delegated to another object. We are free to create relationships without duplicating the hierarchy.