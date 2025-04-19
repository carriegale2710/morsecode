
export const renderFromDOM = (morseKeys, morseTranslator) => {
    
    // Access interactive elements on the DOM:

    const submitButton = document.querySelector("button");
    const form = document.querySelector("#userSubmissionForm");
    const textAreaInput = document.querySelector("#textAreaInput");
    const textAreaOutput = document.querySelector("#textAreaOutput");

    // Translate user input and display result when they click the submit button (+ or hit 'enter' key?):

    form.addEventListener("submit", (e) => { 

        //1. prevent refresh on submit
        e.preventDefault(); 
        
        //2. read values from inputs
        const userInput = textAreaInput.value; 
        console.log(userInput);

        // //3. handle user input errors (num, empty)
        //// validateInput(userInput);

        //4. detect request (morse or words?) and translate input
        const translatedMessage = morseTranslator(userInput, morseKeys);
        console.log(translatedMessage);

        //5. render translation on screen/DOM
        textAreaOutput.value = translatedMessage;

    });
};
