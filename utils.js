export function withRegister(superclass) {
  return clazz => {
    superclass.register(clazz)
    return clazz
  }
}

export function capitalize(input) {
  return input[0].toUpperCase() + input.substring(1)
}

export function* countDown(start, end) {
  let currentCount = start
  while (currentCount >= end) yield currentCount--
}
