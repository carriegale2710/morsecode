//SECTION - event listeners go here

import { morseTranslator } from "./functions.js";
import { morseKeys } from "./assets/keys.js";
// import {} from "./dom.js";



export const invalidParamType = new Error("Enter valid input");

// const userInput = ".... . .-.. .-.. ---".split(" ");
// export const userInput = rawInput.value.map((char) => char.toLowerCase());

//need to split morse code between two spaces?
// console.log(userInput);

const submitButton = document.querySelector("button");
const form = document.querySelector("#userSubmissionForm");
const textAreaInput = document.querySelector("#textAreaInput");
const textAreaOutput = document.querySelector("#textAreaOutput");

export const rawMessage =  form.addEventListener("submit", (e) => { // how to read values from inputs
    e.preventDefault();
    const userInputData = textAreaInput.value;
    console.log(userInputData);
    let userInputDataArr;
    
    //split the string into keys in an array - compare with the object? (!!!)
    if (userInputData.includes('  ')) {
        userInputDataArr = userInputData.split('  '); //if morse .split('  ');
    } else {
        userInputDataArr = userInputData.split(''); //if words, split by letter
    }
    
    // console.log(userInputDataArr);
    
    //input validation
    
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

    const translatedMessage = morseTranslator(userInputDataArr, morseKeys);
    console.log(translatedMessage);

    textAreaOutput.value = translatedMessage;

});







// for (const [key, value] of formData) {
//     console.log(key, value, " Form data");
// };
// const rawInput = +formData.get("#userInput");







//NOTE - Template

// export const someFn = (...args) => { // the rest function (...args) takes any number of params by accessing an array
//     let result;
//     if (args === false) {
//         throw new Error("Custom Error Message");
//     }
//     return result ;
// };
    



