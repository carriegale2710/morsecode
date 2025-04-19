//SECTION - functional logic goes here

//INPUT
// if the input string has ANY alpha-numeric characters, assume that it should be converted into morse code
// if none, assume it must be translated into words

//OUTPUT
// 1 space between letters
// 2 spaces or "/" between words 


export const morseTranslator = (userInput, morseKeys) =>  {
    
    //NOTE - Step 1: split the string into keys in an array 
    
    console.log(userInput);
    //arrow fn ver
    // const splitInput = (userInput) => userInput.includes('  ') ? userInput.split('  ') : userInputArr = userInput.split('');

    let userInputArr;
    if (userInput.includes('  ')) {
        userInputArr = userInput.split('  '); //if morse .split('  ');
    } else {
        userInputArr = userInput.split(''); //if words, split by letter
    }
    console.log(userInputArr);

    //NOTE - Step 2: Validate the input array

    const invalidParamType = new Error("Enter valid input");
    
    if (userInputArr == []) {
        throw {invalidParamType};
    };

    if (userInputArr.map((n)=>parseInt(n)).includes(/[0-9]/)) {
        throw {invalidParamType};
    };
    
    if (userInputArr.includes(false || '' || undefined)) {
        throw {invalidParamType};
    };
    
    if (userInputArr.includes('number')) {
        throw {invalidParamType};
    };

    console.log("form submitted");
    

    //NOTE - Step 3: Translate each character of input using provided morseKeys Object as param
    
    //define key:value variables
    const keyArr = Object.keys(morseKeys);
    // console.log(keyArr)
    const entriesArr = Object.entries(morseKeys);
    // console.log(keyArr); //every letter in lowercase
    
    //set up collection array
    const translation = [];
    
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

