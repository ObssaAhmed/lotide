const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    const eqObjects = function(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (let key in obj1) {
            if (Array.isArray(obj1[key])) {
                if (!eqArrays(obj1[key], obj2[key])) {
                    return false;
                }
            } else if (typeof obj1[key] === 'object') {
                if (!eqObjects(obj1[key], obj2[key])) {
                    return false;
                }
            } else if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    };

    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};
