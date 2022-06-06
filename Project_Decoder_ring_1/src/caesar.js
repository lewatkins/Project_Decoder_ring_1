// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {

    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newAlphabet = "";
    let outPutMsg = "";
    let encodedMsg = "";
    let decodedMsg = "";

    //caesar("zebra magazine", -3);
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

        return outPutMsg;


        function createNewAlphabet(shift) {
            //console.log(shift);
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
            encodedMsg = "";
            message = message.toLowerCase();
            console.log(message, "Original Msg");
            for (let i = 0; i < message.length; i++) {
                let index = baseAlphabet.indexOf(message[i]);
                if (index === -1) {
                    encodedMsg += message[i];
                } else {
                    encodedMsg += newAlphabet[index];
                }
            }
            console.log(encodedMsg, "Encoded Msg");
            return encodedMsg;
        }

        function decodeMsg(message) {
            decodedMsg = "";
            message = message.toLowerCase();
            for (let i = 0; i < message.length; i++) {
                let index = newAlphabet.indexOf(message[i]);
                if (index === -1) {
                    decodedMsg += message[i];
                } else {
                    decodedMsg += baseAlphabet[index];
                }
            }
            return decodedMsg;
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