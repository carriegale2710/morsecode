

// for (const [key, value] of Object.entries(morseKeys)) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }




//NOTE - stuck on how loops again...

export const morseTranslator (userInput, morseKeys) =>  {
    Object.keys(morseKeys, userInput).forEach(key => {
    if (userInput.includes("number" || false)) {
        throw new Error("Invalid Input - no numbers allowed");
    } 
    // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const value = morseKeys[key];
    // console.log(`Key: ${key}, Value: ${value}`); //key //value
    let translation = [];
    for (let i=0; i<=26; i++){
        if (userInput[i] === key){
            translation.push(value);
        } else if (userInput[i] === value){
            translation.push(key);
        }
    }
     console.log(translation.join("")) ; 
})};













// const morseKeysArr = Object.values(morseKeys);



// export const  translateInput = (morseInput, morseKeys) =>  {

//     //test later
//     
//     if (morseInput.map((l) => l.toLowerCase().includes());
// }




// const letterKeysArr = Object.keys(morseKeys).map((l) => l.toLowerCase());
// console.log(letterKeysArr);

// console.log(morseKeysArr);

