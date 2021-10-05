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
      if (!(verse.prototype instanceof IterativeSongVerse)) {
        throw new TypeError('verse is not an instance of IterativeSongVerse')
      }
      this[verseKey] = verse
    }

    song() {
      return this.verses(this[verseKey].MAX_VERSES, 0)
    }

    verses(start, end) {
      return [...countDown(start, end)].map(number => this.verse(number)).join('\n')
    }

    verse(number) {
      return this[verseKey].lyrics(number)
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
      if (!Number.isInteger(number) || number < 0) {
        throw new Error(`Attempted to construct verse with invalid number ${number}`)
      }
      this[verseNumber] = number
    }

    toString() {
      if (typeof this.prototype.constructor.lyrics !== 'function') {
        throw new TypeError('Subclass must implement lyrics()')
      }
      return this.prototype.constructor.lyrics(this.number)
    }

    get number() {
      return this[verseNumber]
    }

    static of(number) {
      return new this.prototype.constructor(number)
    }

    static get MAX_VERSES() {
      throw new Error('MAX_VERSES is subclass responsibility')
    }

    static lyrics(number) {
      return this.prototype.constructor.of(number).lyrics()
    }
  }
})()
