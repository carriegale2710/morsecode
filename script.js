
// import { morseTranslator } from "./functions.js";
import { morseKeys } from "./assets/keys.js";
// import {} from "./dom.js";



//SECTION - functional logic goes here

//INPUT
// if the input string has ANY alpha-numeric characters, assume that it should be converted into morse code
// if none, assume it must be translated into words

//OUTPUT
// 1 space between letters
// 2 spaces or "/" between words 


//NOTE - stuck on how loops again...

const morseTranslator = (userInput, morseKeys) =>  {
    console.log(userInput);

    let userInputArr;
    
    //split the string into keys in an array - compare with the object? (!!!)
    if (userInput.includes('  ')) {
        userInputArr = userInput.split('  '); //if morse .split('  ');
    } else {
        userInputArr = userInput.split(''); //if words, split by letter
    }

    console.log(userInputArr);

    
    //set up collection array
    const translation = [];

    // forEach letter / key the alphabet
    // Object.keys(morseKeys)
    
    //define key:value variables
    // const value = morseKeys[key];
    const keyArr = Object.keys(morseKeys);
    // console.log(keyArr)
    const entriesArr = Object.entries(morseKeys);
    // console.log(keyArr); //every letter in lowercase
    
    for (let currentKey of userInputArr) { //for each char/morse in user input array
        // const currentKey = userInputDataArr[i];
        //if the current key is a letter...
        if (currentKey === '  '){
            translation.push(' / ');
        } else if (keyArr.includes(currentKey.toUpperCase())){ 
            const keyValue = morseKeys[currentKey.toUpperCase()];
            console.log(keyValue); //morse code of key
            translation.push(keyValue +'  '); 
            //if the current key is a morse code ie. the value of a letter key...
        } else if (Object.values(morseKeys).includes(currentKey)){
            const keysOnly = entriesArr.filter(([key, value]) => value === currentKey? key : '');
            console.log(keysOnly[0][0]);
            translation.push(keysOnly[0][0]);
        };

    };
    return translation.join('')/*.replaceAll("/", " ")*/; 
};  




//NOTE - ERROR HANDLING - INPUT VALIDATION

// Template
// export const someFn = (...args) => { // the rest function (...args) takes any number of params by accessing an array
//     let result;
//     if (args === false) {
//         throw new Error("Custom Error Message");
//     }
//     return result ;
// };


const invalidParamType = new Error("Enter valid input");


const validateInput = (userInput) => {

    let userInputArr;
    
    //split the string into keys in an array - compare with the object? (!!!)
    if (userInput.includes('  ')) {
        userInputArr = userInput.split('  '); //if morse .split('  ');
    } else {
        userInputArr = userInput.split(''); //if words, split by letter
    }
    
    if (userInputDataArr == []) {
        throw {invalidParamType};
    };

    if (userInputDataArr.includes("number" || false)) {
        throw {invalidParamType};
    };
    
    if (userInputDataArr.includes(false || '' || undefined)) {
        throw {invalidParamType};
    };
    
    if (userInputDataArr.includes('number')) {
        throw {invalidParamType};
    };

    console.log("form submitted"); 
}


 

//SECTION - event listeners go here


// const userInput = ".... . .-.. .-.. ---".split(" ");
// export const userInput = rawInput.value.map((char) => char.toLowerCase());

//need to split morse code between two spaces?
// console.log(userInput);

const submitButton = document.querySelector("button");
const form = document.querySelector("#userSubmissionForm");
const textAreaInput = document.querySelector("#textAreaInput");
const textAreaOutput = document.querySelector("#textAreaOutput");


const rawMessage =  form.addEventListener("submit", (e) => { // how to read values from inputs
    e.preventDefault();
    const userInput = textAreaInput.value;
    console.log(userInput);

    
    // console.log(userInputDataArr);
    
    //validateInput()

    const translatedMessage = morseTranslator(userInput, morseKeys);
    console.log(translatedMessage);

    textAreaOutput.value = translatedMessage;

});






//SECTION - DOM - rendering things goes here

