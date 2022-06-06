// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function() {
    // you can add any code you want within this function scope
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

    let myName = "Gene Watkins";

    function polybius(input, encode = true) {
        result = "";
        let numberCount = 0;
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
            return result;
        } else { ///Decode
            for (let i = 0; i < input.length; i++) {
                if (input[i] > space) {
                    numberCount += 1;
                }
            }
            if (numberCount % 2 !== 0) return false;

            for (let i = 0; i < input.length; i++) {
                if (input[i] === space) {
                    result += space;
                } else {
                    if (input[i + 1] > space) {
                        let encodedChar = input[i].toString() + input[i + 1];
                        getDecodedValue(encodedChar);
                        i++;
                    }
                }
            }
            return result;
        }


        return result;

        function getDecodedValue(encodedChar) {
            if (encodedChar === "42") {
                result += "(i/j)";
                encodedChar = null;
                return (result);
            }

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



    }

    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };