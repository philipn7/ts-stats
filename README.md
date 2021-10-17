# Stats


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

## Enum
