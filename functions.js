//SECTION - translator logic goes here

// for (const [key, value] of Object.entries(morseKeys)) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }




//NOTE - stuck on how loops again...

export const morseTranslator = (userInputDataArr, morseKeys) =>  {
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
    console.log(entriesArr);
    
    for (let currentKey of userInputDataArr) { //for each char/morse in user input array
        // const currentKey = userInputDataArr[i];
        //if the current key is a letter...
        if (currentKey === '  '){
            translation.push(' <> ');
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
    
    

    return translation.join('').replaceAll("<>", " "); 
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

