function isValidPassword(password, username) {
    let passWord = password;
    if (passWord.length >= 8 && passWord.indexOf(" ") === -1) {
        if (!passWord.includes(username)){
            return true;

        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

isValidPassword("12tobi23", "tobi");

let averageNumber;
let numArrays = [1,2,3,3,4,5,5,6,3,3,2,1,2,];
for (let num of numArrays) {
    let sum = + num;
   
    averageNumber = sum / numArrays.length;
}
console.log(` average is ${averageNumber}`);


// pangram
function isPangram(sentence) {
    let lowerecased = sentence.toLowerCase(); 
    
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowercased.includes(char)) {
            return false;
        }
    }
    return true;
} 