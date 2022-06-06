// Write your tests here!
const squareArray = [
    ['a', 'f', 'l', 'q', 'v'],
    ['b', 'g', 'm', 'r', 'w'],
    ['c', 'h', 'n', 's', 'x'],
    ['d', 'i', 'o', 't', 'y'],
    ['e', 'k', 'p', 'u', 'z'],
];

let result = "";
const space = " ";
let currentChar = " ";
let rowId = 0;


function polybius(input, encode = true) {
    result = "";
    if (encode) {
        for (let char = 0; char < input.length; char++) {
            if (input[char].toLowerCase() === "j") {
                currentChar = "i"
            } else {
                currentChar = input[char].toLowerCase();
            }
            for (rowId = 0; rowId < squareArray.length; rowId++) {
                squareArray[rowId].forEach(getCodedValue);
            }
        }
    } else { ///Decode
        for (let i = 0; i < input.length; i++) {
            if (input[i] === space) {
                result += space;
            } else {
                if (input[i + 1] > space) {
                    let encodedChar = input[i].toString() + input[i + 1];
                    getDecodedValue(encodedChar);
                    i++;
                    // let encodedChar = input[char-1].toString() + input[char-1];
                    // getDecodedValue(encodedChar);
                }
                //  let encodedChar = input[char].toString() + input[char];
                // getDecodedValue(encodedChar);
            }
        }
    }
    return result;
}


function getDecodedValue(encodedChar) {
    if (encodedChar === "42") {
        result += "(i/j)";
        encodedChar = null;
        return (result);
    }
    // if(encodedChar[0] === space && encodedChar[1] === space){
    //    result += encodedChar;
    //    return result;
    // }
    // if(encodedChar[0] === space){
    //   result += encodedChar;
    //   return result;
    // }
    let row = encodedChar[0];
    let col = encodedChar[1];
    result += squareArray[row - 1][col - 1];
    return result;
}


function getCodedValue(arrayChar, index) {
    if (currentChar === space) {
        result += space;
        currentChar = null;
    } else {
        if (arrayChar === currentChar) {
            result += (rowId + 1).toString() + [index + 1].toString();
        }
    }
    return result;
}