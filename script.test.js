
//SECTION - unit testing the translation logic only, not DOM
import { morseKeys } from "./assets/keys.js";
import { morseTranslator } from "./js/logic.js";
const invalidParamType = new Error("Enter valid input");

describe("Test cases for a morseTranslator", () => {
    
    test("Translates English letters into Morse Code", () => {
        expect(morseTranslator("h",morseKeys)).toBe(`....`); 
        expect(morseTranslator("E",morseKeys)).toBe(`.`); 
        expect(morseTranslator("a",morseKeys)).toBe(`.-`); 
    });
    
    test("Translates Morse into letters", () => {
        expect(morseTranslator(`....`,morseKeys)).toBe("H"); 
        expect(morseTranslator(`.`,morseKeys)).toBe("E"); 
        expect(morseTranslator(`.-`, morseKeys)).toBe("A");  
    });
    
    test("Handles spaces properly", () => {
        //(ie. there is 1 space between English words, but one space between Morse Code characters, two spaces or / between words)
        expect(morseTranslator("Hello how are you",morseKeys)).toBe(`.... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-`);
        expect(morseTranslator("I love learning Morse Code",morseKeys)).toBe(`.. / .-.. --- ...- . / .-.. . .- .-. -. .. -. --. / -- --- .-. ... . / -.-. --- -.. .`); 
        expect(morseTranslator(`.--. .-. --- --. .-. .- -- -- .. -. --. / .. ... / ..-. ..- -.`,morseKeys)).toBe("Programming is fun"); 
        expect(morseTranslator(`. .- .. / .. ... / .- -- .- --.. .. -. --.`,morseKeys)).toBe("AI is amazing"); 
    });
    
    test("Edge: Invalid inputs produce an error", () => {
        //Always wrap the code that throws in a function when using expect().toThrow() -> The function is created but NOT executed -> error is properly caught and tested
        expect(() => morseTranslator("",morseKeys)).toThrow(); 
        expect(() => morseTranslator(" ",morseKeys)).toThrow(); 
        expect(() => morseTranslator("1234",morseKeys)).toThrow(); 
        expect(() => morseTranslator("  ",morseKeys)).toThrow(); 
    });
    
    test("Bonus: handles special characters", () => {
        expect(morseTranslator("Hello, how are you?",morseKeys)).toBe(`.... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-`);  
    });
    
});


