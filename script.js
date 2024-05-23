// Exercises

// 1: ForEach Basics
names.forEach((name) => console.log(name))
province.forEach((province) => console.log(province))

let index = 0
names.forEach((name) => {
  console.log(`${name} (${provinces[index]})`)
  index = index + 1
})

