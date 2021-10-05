import { IterativeSong, IterativeSongVerse } from './iterativeSong.js'
import { BottleNumber } from './bottleNumber.js'
import { capitalize } from './utils.js'

const MAX_BOTTLE_VERSES = 99

/* Bottles
 *
 * Encapsulates the logics for the song '99 bottles of beer on the wall'
 *
 * @method song() -> string (full song lyrics)
 * @method verses(start: number, end: number) -> string (lyrics of verses
 *   descending from start to end)
 * @method verse(number: number) -> string (lyrics for a single version number)
 */
export class Bottles extends IterativeSong {
  constructor() {
    super(BottleVerse)
  }
}

class BottleVerse extends IterativeSongVerse {
  static of(number) {
    return new BottleVerse(number)
  }

  static lyrics(number) {
    return BottleVerse.of(number).lyrics()
  }

  static get MAX_VERSES() {
    return MAX_BOTTLE_VERSES
  }

  constructor(number) {
    super(number)
    this.bottleNumber = BottleNumber.of(number)
  }

  lyrics() {
    return (
      capitalize(`${this.bottleNumber} of beer on the wall, `) +
      `${this.bottleNumber} of beer.\n` +
      `${this.bottleNumber.action()}, ` +
      `${this.bottleNumber.successor()} of beer on the wall.\n`
    )
  }
}
