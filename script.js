
import { morseTranslator } from "./functions.js";
import { morseKeys } from "./assets/keys.js";


const userInput = ".... . .-.. .-.. ---".split(" ");
//need to split morse code between two spaces?
// console.log(userInput);

const invalidParamType = "Enter a valid number";

form.addEventListener("submit", (e) => { // how to read values from inputs
    e.preventDefault()
    console.log("form submitted"); 
    const formData = new FormData(form);
    return formData;
};


for (const [key, value] of formData) {
    console.log(key, value, " Form data");
};
const rawInput = +formData.get("#userInput");

export const userInput = rawInput.value.map((char) => char.toLowerCase());
console.log(userInput);





//NOTE - Template

// export const someFn = (...args) => { // the rest function (...args) takes any number of params by accessing an array
//     let result;
//     if (args === false) {
//         throw new Error("Custom Error Message");
//     }
//     return result ;
// };
    



