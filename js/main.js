"use strict";

let XHRcalls = require("./_XHRcalls.js");
let outputCategory = require("./_output-category.js");
let eventListeners = require("./_eventListener.js");
let sortTime = require("./_sortByTime.js");

let copyrightDate = require("./_copyrightDate.js");

//Outputs current date and time to copyright area
copyrightDate.output();