// export function exercise01(args) {
//   const input = args
//   const result = []

//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]
//     if (currentElement === "e" || currentElement === "E") {
//       result.push("")
//     } else {
//       result.push(currentElement)
//     }
//   }

//   return result.join("")
// }

export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E") {
      result.push(currentElement)
    }
  }

  return result.join("")
}

export function exercise02(args) {
  return args.toUpperCase()
}

export function exercise03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result++
    }
  }

  return result
}
