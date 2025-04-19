//SECTION - event listeners go here

// import { morseTranslator } from "./functions.js";
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
    
    //validateInput()

    const translatedMessage = morseTranslator(userInputDataArr, morseKeys);
    console.log(translatedMessage);

    textAreaOutput.value = translatedMessage;

});


//SECTION - User Input Validation Fn

//NOTE - Template
// export const someFn = (...args) => { // the rest function (...args) takes any number of params by accessing an array
//     let result;
//     if (args === false) {
//         throw new Error("Custom Error Message");
//     }
//     return result ;
// };

const validateInput = (userInputDataArr) => {


    
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




// for (const [key, value] of formData) {
//     console.log(key, value, " Form data");
// };
// const rawInput = +formData.get("#userInput");










//SECTION - translator logic goes here

//INPUT
// if the input string has ANY alpha-numeric characters, assume that it should be converted into morse code
// if none, assume it must be translated into words

//OUTPUT
// 1 space between letters
// 2 spaces or "/" between words 


//NOTE - stuck on how loops again...

const morseTranslator = (userInputDataArr, morseKeys) =>  {
    console.log(userInputDataArr);
    
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
    
    for (let currentKey of userInputDataArr) { //for each char/morse in user input array
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













// const morseKeysArr = Object.values(morseKeys);



// export const  translateInput = (morseInput, morseKeys) =>  {

//     //test later
//     
//     if (morseInput.map((l) => l.toLowerCase().includes());
// }




// const letterKeysArr = Object.keys(morseKeys).map((l) => l.toLowerCase());
// console.log(letterKeysArr);

// console.log(morseKeysArr);



//SECTION - rendering things on DOM goes here

