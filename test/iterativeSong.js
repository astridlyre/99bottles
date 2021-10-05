/*eslint func-names: ["error", "never"]*/
import { IterativeSong, IterativeSongVerse } from '../iterativeSong.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'

class TestVerse extends IterativeSongVerse {
  lyrics() {
    return `Verse number: ${this.number}; This is a test: 1, 2, 3.\n`
  }
  static get MAX_VERSES() {
    return 69 // nice
  }
}

describe('IterativeSong', function () {
  let song
  before(() => {
    song = new IterativeSong(TestVerse)
  })

  it('Produces one set of lyrics', function () {
    const expected = 'Verse number: 1; This is a test: 1, 2, 3.\n'
    expect(song.verse(1)).to.equal(expected)
  })

  it('Produces multiple sets of lyrics', function () {
    const expected =
      'Verse number: 3; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 2; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 1; This is a test: 1, 2, 3.\n'
    expect(song.verses(3, 1)).to.equal(expected)
  })

  it('Produces the full lyrics of a song', function () {
    const expected =
      'Verse number: 69; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 68; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 67; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 66; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 65; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 64; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 63; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 62; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 61; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 60; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 59; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 58; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 57; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 56; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 55; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 54; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 53; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 52; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 51; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 50; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 49; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 48; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 47; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 46; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 45; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 44; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 43; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 42; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 41; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 40; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 39; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 38; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 37; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 36; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 35; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 34; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 33; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 32; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 31; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 30; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 29; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 28; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 27; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 26; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 25; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 24; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 23; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 22; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 21; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 20; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 19; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 18; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 17; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 16; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 15; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 14; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 13; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 12; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 11; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 10; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 9; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 8; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 7; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 6; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 5; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 4; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 3; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 2; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 1; This is a test: 1, 2, 3.\n' +
      '\n' +
      'Verse number: 0; This is a test: 1, 2, 3.\n'
    expect(song.song()).to.equal(expected)
  })
})
