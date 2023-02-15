
const eqArrays = function(actual, expected) {
    if (actual.length !== expected.length) {
        return false;
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
};

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
        console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
};


const middle = function(array) {
    const length = array.length;
    if (length <= 2) {
        return [];
    }
    if (length % 2 === 0) {
        const middleIndex = length / 2;
        return [array[middleIndex - 1], array[middleIndex]];
    } else {
        const middleIndex = Math.floor(length / 2);
        return [array[middleIndex]];
    }
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
