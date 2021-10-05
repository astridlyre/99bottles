export function capitalize(input) {
  const converted = String(input)
  return converted[0].toUpperCase() + converted.substring(1)
}

export function* countDown(start, end) {
  if (start < end) {
    yield 0
  } else {
    let currentCount = start
    while (currentCount >= end) yield currentCount--
  }
}
