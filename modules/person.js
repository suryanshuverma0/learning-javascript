const name = "Suryanshu Verma";
const age = 19;

export {name , age};

//another export syntax may be
//export default identifier_name;
//remember there should be only one default export default in file.


/*
to use the module there is two way 
first one is you can update your package.json by adding the following
  "type": "module",
and if the package.json file is not installed it can be simply installed by using command  as
npm init -y

second method is replace the .js extension with .mjs extension

The .mjs file extension is used to indicate that a JavaScript file is written using ECMAScript Modules (ESM) syntax. ESM is a standard for organizing and structuring JavaScript code that allows for modularization and encapsulation of functionality. Modules are a way to split code into smaller, more manageable pieces.
*/
