//SECTION - ERROR HANDLING - INPUT VALIDATION

// Template
// export const someFn = (...args) => { // the rest function (...args) takes any number of params by accessing an array
//     let result;
//     if (args === false) {
//         throw new Error("Custom Error Message");
//     }
//     return result ;
// };


export const validateInput = (userInput) => {

    let userInputArr;
    
    //split the string into keys in an array - compare with the object? (!!!)
    if (userInput.includes('  ')) {
        userInputArr = userInput.split('  '); //if morse .split('  ');
    } else {
        userInputArr = userInput.split(''); //if words, split by letter
    }

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
    
    return ;
}
