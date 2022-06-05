// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {

    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newAlphabet = "";
    let encodedMessage = "";
    let decodedMessage = "";
    let output = "";

    //let shiftAmt = 0;

    //output = caesar("This#)*&^% is a test message", 23, true);

    function caesar(input, shift, encode = true) {
        if (shift === 0 || shift < 25 || shift > 25) {
            return false;
        }
        createNewAlphabet(shift);
        if (encode) {
            encodedMessage = encode(input);
            return encodedMessage;;
        } else {
            decodedMessage = decode(input);
            return decodedMessage;
        }


        //console.log(encodedMessage);

        function createNewAlphabet(shift) {
            for (let i = 0; i < baseAlphabet.length; i++) {
                let offset = (i + shift) % baseAlphabet.length;
                newAlphabet += baseAlphabet[offset];
            }
        }

        function encode(message) {
            let result = "";
            message = message.toLowerCase();
            for (let i = 0; i < message.length; i++) {
                let index = baseAlphabet.indexOf(message[i]);
                //console.log(index);
                if (index === -1) {
                    // console.log(message[i]);
                    result += message[i];
                } else {
                    result += newAlphabet[index];
                }
            }
            console.log(result);
            return result;
        }

        function decode(message) {
            let result = "";
            message = message.toLowerCase();
            for (let i = 0; i < message.length; i++) {
                let index = newAlphabet.indexOf(message[i]);
                if (index === -1) {
                    // console.log(message[i]);
                    result += message[i];
                } else {
                    result += baseAlphabet[index];
                }
            }
            return result;
        }
    }

    return {
        caesar,
    };
})();

module.exports = {
    caesar: caesarModule.caesar
};