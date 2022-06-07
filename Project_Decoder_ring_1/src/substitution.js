// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {

    const stdAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const space = " ";
    let outputData = "";

    let duplicateFound = false;
    let encodedData = "";

    function substitution(input, alphabet, encode = true) {
        // your solution code here
        if (alphabet === undefined) return false;
        if (alphabet.length !== 26) return false;

        duplicateFound = checkDuplicate(alphabet);

        if (duplicateFound) {
            return false;
        }

        if (encode) {
            outputData = "";
            for (let i = 0; i < input.length; i++) {
                if (input[i] === space || ((input[i].toLowerCase() < "a") || (input[i].toLowerCase() > "z"))) {
                    outputData += input[i];
                } else {
                    outputData += alphabet[stdAlphabet.indexOf(input[i].toLowerCase())];
                }
            }
        } else {
            outputData = "";
            console.log(alphabet);
            for (let i = 0; i < input.length; i++) {
                if (input[i] === space) {
                    console.log(input[i].toLowerCase);
                    outputData += input[i];
                } else {
                    outputData += stdAlphabet[alphabet.indexOf(input[i].toLowerCase())];
                }
            }
        }
        return outputData;


        function checkDuplicate(arr) {
            let map = {};
            let result = false;
            for (let i = 0; i < arr.length; i++) {
                // check if object contains entry with this element as key
                if (map[arr[i]]) {
                    result = true;
                    // terminate the loop
                    break;
                }
                // add entry in object with the element as key
                map[arr[i]] = true;
            }
            return result;
        }

    } //End of main function

    return {
        substitution,
    };
})();

module.exports = {
    substitution: substitutionModule.substitution
};