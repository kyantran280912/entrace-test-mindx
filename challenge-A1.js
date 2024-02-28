// solution-1
const allLongestString = (inputArray) => {
    let greatestLength = 0;
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        const currentLength = inputArray[i].length;
        if (currentLength > greatestLength) {
            greatestLength = currentLength;
            result = [inputArray[i]];
        } else if (currentLength === greatestLength) {
            result.push(inputArray[i]);
        }
    }
    return result;
};

// solution-2
const filterMaxLengthStringArray = (inputArray) => {
    let greatestLength = Math.max(...inputArray.map((string) => string.length));
    let result = inputArray.filter(
        (string) => string.length === greatestLength
    );
    return result;
};
