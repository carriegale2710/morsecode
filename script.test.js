
//SECTION - real
import { morseTranslator, morseKeys, invalidParamType} from "./script.js";


describe("Test cases for a morseTranslator", () => {
    
    test("Translates English text into Morse Code", () => {
        expect(morseTranslator("hello",morseKeys)).toBe(`.... . .-.. .-.. ---`); 
        expect(morseTranslator("Everybody",morseKeys)).toBe(`.-... ... -.-- -... --- -.. -.--`); 
        expect(morseTranslator("atlantis",morseKeys)).toBe(`.- .-.. .- - -. - .. ...`); 
    });
    
    test("Translates Morse Code into English text", () => {
        expect(morseTranslator(`.... . .-.. .-.. ---`,morseKeys)).toBe("hello"); 
        expect(morseTranslator(`.-... ... -.-- -... --- -.. -.--`,morseKeys)).toBe("Everybody"); 
        expect(morseTranslator(`.- .-.. .- - -. - .. ...`, morseKeys)).toBe("atlantis");  
    });
    
    test("Handles spaces properly", () => {
        //(ie. there is 1 space between English words, but one space between Morse Code characters, two spaces or / between words)
        expect(morseTranslator("Hello how are you",morseKeys)).toBe(`.... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-`);
        expect(morseTranslator("I love learning Morse Code",morseKeys)).toBe(`.. / .-.. --- ...- . / .-.. . .- .-. -. .. -. --. / -- --- .-. ... . / -.-. --- -.. .`); 
        expect(morseTranslator(`.--. .-. --- --. .-. .- -- -- .. -. --. / .. ... / ..-. ..- -.`,morseKeys)).toBe("Programming is fun"); 
        expect(morseTranslator(`. .- .. / .. ... / .- -- .- --.. .. -. --.`,morseKeys)).toBe("AI is amazing"); 
    });
    
    test("Edge: Invalid inputs produce an error", () => {
        expect(morseTranslator("",morseKeys)).toThrow(invalidParamType); 
        expect(morseTranslator(" ",morseKeys)).toThrow(invalidParamType); 
        expect(morseTranslator("1234",morseKeys)).toThrow(invalidParamType); 
        expect(morseTranslator("  ",morseKeys)).toThrow(invalidParamType); 
    });
    
    test("Bonus: handles special characters", () => {
        expect(morseTranslator("Hello, how are you?",morseKeys)).toBe(`.... . .-.. .-.. --- / .... --- .-- / .- .-. . / -.-- --- ..-`);  
    });
    
});


