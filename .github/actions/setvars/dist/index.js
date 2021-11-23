module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(104);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 104:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(990);
const readenv = __webpack_require__(539);
try {
  const dotenvFile = core.getInput('path');
  const variables = readenv(dotenvFile);

/*  for (const key in variables) {
    const value = variables[key];
    core.setOutput(key, value);
	
  }
 */ 
  
  console.log(`loaded ${Object.keys(variables).length} values into the environment`); 
  core.debug(variables);
  core.setOutput('env', JSON.stringify(variables));
  
} catch (error) {
  core.setFailed(error.message);
}


/***/ }),

/***/ 468:
/***/ (function(module) {

module.exports = eval("require")("dotenv");


/***/ }),

/***/ 539:
/***/ (function(module, __unusedexports, __webpack_require__) {

const fs = __webpack_require__(747)

let read_env = function (envFile) {
    
    if (!fs.existsSync(envFile)){
        throw new Error('file does not exist');
    }

    const dotenv = __webpack_require__(468).config({ path: envFile });
    console.log("loading .env file from " + envFile);
    
    const returnedMap = {};
    for (const key in dotenv.parsed) {
        const value = dotenv.parsed[key];
        const lowercase_key = key.toLocaleLowerCase()
        returnedMap[lowercase_key] = value;
    }
    return returnedMap;
}

module.exports = read_env;

/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 990:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ })

/******/ });