const head = function(array) {
    return array[0];
};

// Test cases
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([42]), 42);
assertEqual(head([]), undefined);
