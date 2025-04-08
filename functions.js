import { morseKeys } from "./assets/keys.js";
import { userInput } from "./script.js";


// for (const [key, value] of Object.entries(morseKeys)) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }


export const inputTranslator = Object.keys(morseKeys).forEach(key => {
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const value = morseKeys[key];
    console.log(`Key: ${key}, Value: ${value}`); //key //value
    if (userInput  )
});

// const morseKeysArr = Object.values(morseKeys);



// export const  translateInput = (morseInput, morseKeys) =>  {

//     //test later
//     if (morseInput.includes("number" || false)) {
//         throw new Error("Invalid Input - no numbers allowed");
//     } 
//     if (morseInput.map((l) => l.toLowerCase().includes());
// }




// const letterKeysArr = Object.keys(morseKeys).map((l) => l.toLowerCase());
// console.log(letterKeysArr);

// console.log(morseKeysArr);

