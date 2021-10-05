import { countDown } from './utils.js'

/* IterativeSong
 *
 * @params verse: IterativeSongVerse
 *
 * @method song() -> string
 * @method verses(start: number, end: number) -> string
 * @method verse(number: number) -> string
 */
export const IterativeSong = (function init() {
  const verseKey = Symbol('verse')

  class IterativeSong {
    constructor(verse) {
      this[verseKey] = verse
    }

    song() {
      return this.verses(this[verseKey].MAX_VERSES, 0)
    }

    verses(start, end) {
      return [...countDown(start, end)].map(number => this.verse(number)).join('\n')
    }

    verse(number) {
      return this[verseKey].of(number).lyrics()
    }
  }

  return IterativeSong
})()

/* IterativeSongVerse
 *
 * @params number: verseNumber (of Verses)
 *
 * @method toString() -> lyrics() -> string
 * @getter number() -> verseNumber
 *
 * @static of(number: number) -> IterativeSongVerse
 *
 * Expects subclasses to implement their own lyrics() method that returns
 * a verse string.
 */
export const IterativeSongVerse = (function init() {
  const verseNumber = Symbol('verseNumber')
  return class IterativeSongVerse {
    constructor(number) {
      this[verseNumber] = number
    }

    toString() {
      return this.lyrics()
    }

    get number() {
      return this[verseNumber]
    }

    static of(number) {
      return new IterativeSongVerse(number)
    }
  }
})()
