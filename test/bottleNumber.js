/*eslint func-names: ["error", "never"]*/
import { BottleNumber } from '../bottleNumber.js'
import { describe, it } from 'mocha'
import { expect } from 'chai'

describe('BottleNumber', function () {
  describe('BottleNumber Generic', function () {
    let bottleNumber
    let number
    before(() => {
      number = Math.floor(Math.random() * 49) + 50 // test in range 50 - 99
      bottleNumber = BottleNumber.of(number)
    })

    it('Has a quantity', function () {
      expect(bottleNumber.quantity).to.equal(number.toString())
    })
    it('Has a pronoun', function () {
      expect(bottleNumber.pronoun).to.equal('one')
    })
    it('Has a container', function () {
      expect(bottleNumber.container).to.equal('bottles')
    })
    it('Has an action', function () {
      expect(bottleNumber.action()).to.equal('Take one down and pass it around')
    })
    it('Has a successor', function () {
      const successor = bottleNumber.successor()
      expect(successor.quantity).to.equal((number - 1).toString())
    })
  })

  describe('BottleNumber0', function () {
    let bottleNumber
    before(() => {
      bottleNumber = BottleNumber.of(0)
    })

    it('Has a quantity', function () {
      expect(bottleNumber.quantity).to.equal('no more')
    })
    it('It does not have a pronoun', function () {
      expect(bottleNumber.pronoun).to.equal(null)
    })
    it('Has a container', function () {
      expect(bottleNumber.container).to.equal('bottles')
    })
    it('Has an action', function () {
      expect(bottleNumber.action()).to.equal('Go to the store and buy some more')
    })
    it('Has a successor', function () {
      const successor = bottleNumber.successor()
      expect(successor.quantity).to.equal(BottleNumber.MAX_BOTTLES.toString())
    })
  })

  describe('BottleNumber1', function () {
    let bottleNumber
    before(() => {
      bottleNumber = BottleNumber.of(1)
    })

    it('Has a quantity', function () {
      expect(bottleNumber.quantity).to.equal('1')
    })
    it('Has a pronoun', function () {
      expect(bottleNumber.pronoun).to.equal('it')
    })
    it('Has a container', function () {
      expect(bottleNumber.container).to.equal('bottle')
    })
    it('Has an action', function () {
      expect(bottleNumber.action()).to.equal('Take it down and pass it around')
    })
    it('Has a successor', function () {
      const successor = bottleNumber.successor()
      expect(successor.quantity).to.equal('no more')
    })
  })

  describe('BottleNumber6', function () {
    let bottleNumber
    before(() => {
      bottleNumber = BottleNumber.of(6)
    })

    it('Has a quantity', function () {
      expect(bottleNumber.quantity).to.equal('1')
    })
    it('Has a pronoun', function () {
      expect(bottleNumber.pronoun).to.equal('it')
    })
    it('Has a container', function () {
      expect(bottleNumber.container).to.equal('six-pack')
    })
    it('Has an action', function () {
      expect(bottleNumber.action()).to.equal('Take it down and pass it around')
    })
    it('Has a successor', function () {
      const successor = bottleNumber.successor()
      expect(successor.quantity).to.equal('5')
    })
  })
})
