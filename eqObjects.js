const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

const eqObjects = function(object1, object2) {
    const obj1Keys = Object.keys(object1);
    const obj2Keys = Object.keys(object2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (const key of obj1Keys) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            if (!eqArrays(object1[key], object2[key])) {
                return false;
            }
        } else if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
};


