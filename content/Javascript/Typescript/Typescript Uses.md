Lets say I have created a directory, `envExample` I want to use a library name `envalid` in my project and *log* the value of my environment variable from `.env` file with type validation. How do I do this with typescript code?

> [!info] Envalid is a small library for validating and accessing environment variables in Node.js programs

create directory:
```bash
mkdir envExample
cd envExample
```

Initialise the new `Node.js` project:
```bash
npm init
```

And this will create a `package.json` file in the directory. And inspecting the package.json we get:
```json
{
  "name": "env-example",
  "version": "1.0.0",
  "description": "This Package will demostrate working with other library in Typescript",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Abrar Fahim",
  "license": "ISC"
}
```

Add the `envalid` to the project 
```bash
npm i envalid
```

This will create a `packeage.json`, `packeage-loc.json` file and `node_modules`. Lets not look into the `node_modules` folder right now. All that folder does it fetches the required code and functionality of the library we want to use in our code base.

And the package.json file has the reference of the library we have used in the codebase and the version of it:
```json
{
...
  "dependencies": {
    "envalid": "^8.0.0"
  }
...
}
```

Now we want to create our `.env` file:
```bash
echo "EXAMPLE_ENV=1234vfdsa" > .env
```

Now to organise our code we are going to use source directory:
```bash
mkdir src

# writing the envalid functionality 
touch src/envConstants.ts

# Entry point for importing/exporting code in TS project
touch src/index.ts
```

inside the `envConstants.ts` we add the following code:
```ts
import { cleanEnv, str } from 'envalid';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Define the environment variables
export const envConstants = cleanEnv(process.env, {
  EXAMPLE_ENV: str(),
});
```

> [!note]  `envalid` uses the `process.env` object to load environment variables, and the `.env` file isn't automatically loaded into `process.env` by default.

Typescript will show an error on `process`. Why? well typescript doesn't know what the process is. We need to add the typescript functionality to our code. Run the following:

```bash
npm i --save-dev @types/node
```
This will add the types of node. But what is the `--save-dev` part in the command?

Lets explore the changes in our `package.json` file in the `envExample` directory?
```json
{
...
  "devDependencies": {
    "@types/node": "^20.14.10"
  }
...
}
```

##### --save-dev
This flag tells `npm` to save the installed package as a development dependency. Development dependencies are packages only needed during the development (like testing, linters, or type definitions) and are not required for the application to run in production.

And lets look at the error in `process` disappear. Your IDE now knows the types of the `node processes`.

Now add the following in `index.ts`:
```ts
import { envConstants } from "./envConstants";

// lets import env from the file './envConstants' and use env.EXAMPLE_ENV
console.log(envConstants.EXAMPLE_ENV);
```

Now if I were to run the node `src/index.ts` it throws an error:
```bash
(node:22113) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/abrarfahim/Developer/temp/envExample/src/index.ts:1
import { envConstants } from "./envConstants";
^^^^^^

SyntaxError: Cannot use import statement outside a module
```

Why? Because we haven't created the Typescript configuration file yet. Run the following on the root folder
```bash
npx tsc --init
```

This will add `tsconfig.json` file to the codebase. Replace with followings:
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src/**/*.ts"]
}
```

now run the following command:
```bash
npx tsc
```

What is this `npx`?
#### `npx`
`npx` is a versatile tool that makes it easier to run project-specific binaries, use temporary tools, and avoid global installations, leading to cleaner and more maintainable code.

By running the command a `dist` folder will be created. Inside the folder will be the compiled js files. Now if we run the following file we will see this:

```bash
> node dist/index.js
1234vfdsa
```

Now we can update the package.json with the following script:
```json
{
...
	"script": {
		build: "tsc",
		start: "node dist/index.js"
	}
...
}
```

Now after any change in the code base simply run the following:
```bash
npm run build
npm start
```
