import assert from "assert";
import {makeGreeter} from "./index"

const greet = {
    "english": makeGreeter("English"),
    "spanish": makeGreeter("Spanish"),
    "russian": makeGreeter("Russian"),
    "greek": makeGreeter("Greek")
};

assert.equal(greet.english(), "Hello world!");
assert.equal(greet.english("Ben"), "Hello Ben!");
assert.equal(greet.spanish(), "\u00A1Hola mundo!");
assert.equal(
    greet.spanish("Edgar", "Spanish"), 
    "\u00A1Hola Edgar!"
);
assert.equal(greet.russian(), "Привет мир!");
assert.equal(greet.greek(), "γειά σου κόσμος");
console.log("success!");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)
*/
