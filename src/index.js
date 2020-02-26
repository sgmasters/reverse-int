module.exports = function reverse(n) {
    let string = n + '';
    let array = string.split("");
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    let reversedString = "";
    reversedArray.forEach((item) => {
       reversedString+=item;
    });
    return parseInt(reversedString);
}
