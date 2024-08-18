const { processText } = require('../utils/textProcessor');

const testFileText = `Hello world! This is a test file. This file includes a variety of symbols: !, @, #, $, %, ^, &, *.`

describe('Text Processing', () => {
    test('should correctly process the text', () => {

        const result = processText(testFileText);

        expect(result.words).toBe(14); // Words count
        expect(result.letters).toBe(58); // Letters count
        expect(result.symbols).toBe(19); // Symbols count
        expect(result.topWords).toEqual(['this', 'a', 'file']); // Top words
        expect(result.topLetters).toEqual(['l', 'i', 's']); // Top letters
    });
});
