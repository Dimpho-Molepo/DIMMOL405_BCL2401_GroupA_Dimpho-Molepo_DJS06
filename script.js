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