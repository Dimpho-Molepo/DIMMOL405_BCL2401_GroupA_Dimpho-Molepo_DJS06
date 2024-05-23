// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Exercises

// 1: ForEach Basics
names.forEach((name) => console.log(name))
provinces.forEach((province) => console.log(province))

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`))

// 2: Uppercase Transformation
console.log(provinces.map((province) => province.toUpperCase()))

// 3: Name Lengths
console.log(names.map((name) => name.length))

// 4: Sorting
console.log(provinces.sort())

// 5: Filtering Cape
console.log(provinces.filter((province) => !province.includes('Cape')))

// 6: Finding 'S'
console.log(names.map((name) => name.split('').some((s) => s.includes('S'))))

// 7: Creating Object Mapping
console.log(names.reduce((acc, name, index) => {
    acc[name] = provinces[index]
    return acc
  }, {}))