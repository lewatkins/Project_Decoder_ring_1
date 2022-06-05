// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {

    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newAlphabet = "";
    let outPutMsg = "";

    //caesar("thinkful", -3);
    //console.log(caesar);

    function caesar(input, shift, encode = true) {
        if (shift === 0 || shift < -25 || shift > 25) {
            return false;
        }

        createNewAlphabet(shift);

        if (encode) {
            outPutMsg = encodeMsg(input);
        } else {
            outPutMsg = decodeMsg(input);
        }


        function createNewAlphabet(shift) {
            console.log(shift);
            if (shift < 0) { shift = 26 + (shift % 26); };
            for (let i = 0; i < baseAlphabet.length; i++) {
                let offset = (i + shift) % baseAlphabet.length;
                newAlphabet += baseAlphabet[offset];
            }
            console.log(shift);
            console.log(input);
            console.log(newAlphabet);
        }

        function encodeMsg(message) {
            let result = "";
            message = message.toLowerCase();
            for (let i = 0; i < message.length; i++) {
                let index = baseAlphabet.indexOf(message[i]);
                if (index === -1) {
                    result += message[i];
                } else {
                    result += newAlphabet[index];
                }
            }
            return result;
        }

        function decodeMsg(message) {
            let result = "";
            message = message.toLowerCase();
            for (let i = 0; i < message.length; i++) {
                let index = newAlphabet.indexOf(message[i]);
                if (index === -1) {
                    result += message[i];
                } else {
                    result += baseAlphabet[index];
                }
            }
            return result;
        }
        console.log(outPutMsg);
        return outPutMsg;
    }
    return {
        caesar,
    };
})();

module.exports = {
    caesar: caesarModule.caesar
};