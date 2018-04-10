import assert from "assert";
import {makeGreeting} from "./index"

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Ben"), "Hello Ben!");
assert.equal(makeGreeting("", "Spanish"), "\u00A1Hola mundo!");
assert.equal(makeGreeting("Edgar", "Spanish"), "\u00A1Hola Edgar!")
console.log("success!");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better (refactor)
*/