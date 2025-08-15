var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const letterToWord = new Map();
    const wordToLetter = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];
        const word = words[i];

        if (letterToWord.has(letter)) {
            if (letterToWord.get(letter) !== word) return false;
        } else {
            if (wordToLetter.has(word)) return false;

            letterToWord.set(letter, word);
            wordToLetter.set(word, letter);
        }
    }
    return true;
};
