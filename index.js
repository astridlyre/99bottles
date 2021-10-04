const MAX_VERSES = 99
const aOrB = (a, b) => fn => num => fn(num) ? a : b
const bottle = aOrB('bottle', 'bottles')(num => num === 1)
const withBottle = num => `${num} ${bottle(num)}`
const withBottle2 = num => `${num === 0 ? 'no more' : num} ${bottle(num)}`
const quantity = aOrB('it', 'one')(num => num === 1)

const firstLine = num =>
  num === 0
    ? 'No more bottles of beer on the wall, no more bottles of beer.\n'
    : `${withBottle(num)} of beer on the wall, ${withBottle(num)} of beer.\n`

const secondLine = num =>
  num === 0
    ? 'Go to the store and buy some more, 99 bottles of beer on the wall.\n'
    : `Take ${quantity(num)} down and pass it around, ` +
      `${withBottle2(num - 1)} of beer on the wall.\n`

const createVerse = num => firstLine(num) + secondLine(num)
const createVerses = nums => nums.map(num => createVerse(num)).join('\n')

function* countDown(start, end) {
  let current = start
  while (current >= end) yield current--
}

export class Bottles {
  verse(num, verse = createVerse) {
    return verse(num)
  }
  verses(start, end, verses = createVerses) {
    return verses([...countDown(start, end)])
  }
  song() {
    return this.verses(MAX_VERSES, 0)
  }
}
