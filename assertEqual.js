

/*const assertEqual = function (actual, expected) {
    return actual === expected;
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs" !== "Bootcamp"));
console.log(assertEqual(1, 1)); */

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
};

// Test cases
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(2, 3);
