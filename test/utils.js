/* eslint func-names: 0 */
/* eslint no-magic-numbers: 0 */
import { countDown, capitalize } from '../utils.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'

describe('Utils', function () {
  describe('countDown', function () {
    it('Should return an array of descending numbers', function () {
      const expected = [5, 4, 3, 2, 1]
      expect([...countDown(5, 1)]).to.deep.equal(expected)
    })
    it('Should return 0 if start is less than end', function () {
      const expected = [0]
      expect([...countDown(5, 6)]).to.deep.equal(expected)
    })
  })

  describe('capitalize', function () {
    it('Should capitalize a string', function () {
      const expected = 'Hello'
      expect(capitalize('hello')).to.equal(expected)
    })
    it('Should attempt to convert a non-string', function () {
      const expected = 'Hello,world'
      expect(capitalize(['hello', 'world'])).to.equal(expected)
    })
    it('Should do nothing with a number other than convert it to string', function () {
      const expected = '420' // sick
      expect(capitalize(420)).to.equal(expected)
    })
  })
})
