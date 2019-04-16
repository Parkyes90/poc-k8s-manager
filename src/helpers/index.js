/**
 *
 * @param guessedWords
 * @param secretWord
 */
export function getLetterMatchCount(guessedWords, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessLetterSet = new Set(guessedWords.split(''));
  return [...secretLetterSet].filter(letter => guessLetterSet.has(letter)).length;
}
