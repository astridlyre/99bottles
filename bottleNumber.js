/* BottleNumber
 *
 * @params number: number (of Bottles)
 *
 * @method successor() -> BottleNumber
 * @method action() -> string
 *
 * @getter quantity() -> string
 *
 * @static of(number: number) -> BottleNumber
 *
 * Expects subclasses to implement static method canHandle(number: number) to
 * determine if subclass should be returned from of() factory function.
 */
export const BottleNumber = (function init() {
  const MAX_BOTTLES = 99
  const numberOfBottles = Symbol('numberOfBottles')
  const registry = Symbol('registry')

  class BottleNumber {
    constructor(number) {
      if (!Number.isInteger(number) || number < 0) {
        throw new TypeError(`Invalid number ${number} (must be integer greater than 0)`)
      }
      this[numberOfBottles] = number
      this.container = 'bottles'
      this.pronoun = 'one'
    }

    successor() {
      const nextNumber =
        this[numberOfBottles] - 1 < 0 ? MAX_BOTTLES : this[numberOfBottles] - 1
      return BottleNumber.of(nextNumber)
    }

    action() {
      return `Take ${this.pronoun} down and pass it around`
    }

    toString() {
      return `${this.quantity} ${this.container}`
    }

    get quantity() {
      return this[numberOfBottles].toString()
    }

    static of(number) {
      for (const candidate of BottleNumber[registry]) {
        if (candidate.canHandle(number)) return new candidate(number)
      }
      return new BottleNumber(number)
    }

    static register(candidate) {
      if (!(candidate.prototype instanceof BottleNumber)) {
        throw new TypeError('candidate must be instance of BottleNumber')
      }
      BottleNumber[registry].add(candidate)
      return candidate
    }

    static unregister(candidate) {
      BottleNumber[registry].delete(candidate)
    }
  }

  Object.defineProperty(BottleNumber, registry, {
    value: new Set(),
  })
  return BottleNumber
})()

BottleNumber.register(
  class BottleNumber6 extends BottleNumber {
    constructor() {
      super(6)
      this.container = 'six-pack'
      this.pronoun = 'it'
    }

    get quantity() {
      return '1'
    }

    static canHandle(number) {
      return number === 6
    }
  }
)

BottleNumber.register(
  class BottleNumber1 extends BottleNumber {
    constructor() {
      super(1)
      this.container = 'bottle'
      this.pronoun = 'it'
    }

    static canHandle(number) {
      return number === 1
    }
  }
)

BottleNumber.register(
  class BottleNumber0 extends BottleNumber {
    constructor() {
      super(0)
      this.container = 'bottles'
    }

    action() {
      return 'Go to the store and buy some more'
    }

    get quantity() {
      return 'no more'
    }

    static canHandle(number) {
      return number === 0
    }
  }
)
