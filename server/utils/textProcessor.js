const processText = (text) => {
    // Normalize and clean text
    const cleanedText = text.toLowerCase().replace(/[^a-z\s]/g, '');

    // Split text into words and filter out numbers
    const words = cleanedText.split(/\s+/).filter(Boolean).filter(word => isNaN(word));
    const wordCounts = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    // Count letters
    const letters = cleanedText.replace(/[^a-z]/g, '').split('');
    const letterCounts = letters.reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {});

    // Count symbols
    const symbols = text.replace(/[a-zA-Z0-9\s]/g, '').split('');
    const symbolCount = symbols.length;

    // Get top three most common words
    const sortedWords = Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([word]) => word);

    // Get top three most common letters
    const sortedLetters = Object.entries(letterCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([letter]) => letter);

    return {
        words: words.length,
        letters: letters.length,
        symbols: symbolCount,
        topWords: sortedWords,
        topLetters: sortedLetters,
    };
};

module.exports = { processText };
