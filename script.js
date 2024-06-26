// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// Exercises

// 1: ForEach Basics
names.forEach((name) => console.log(name));
provinces.forEach((province) => console.log(province));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2: Uppercase Transformation
console.log(provinces.map((province) => province.toUpperCase()));

// 3: Name Lengths
console.log(names.map((name) => name.length));

// 4: Sorting
console.log(provinces.sort());

// 5: Filtering Cape
console.log(provinces.filter((province) => !province.includes("Cape")).length);

// 6: Finding 'S'
console.log(names.map((name) => name.split("").some((s) => s.includes("S"))));

// 7: Creating Object Mapping
console.log(
  names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {})
);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Advanced Exercises (Single `console.log` Execution)

// 1: Log Products
products.forEach((products) => console.log(products.product));

// 2: Filter by Name Length
console.log(products.filter((products) => products.product.length <= 5));

// 3: Price Manipulation
console.log(
  products
    .filter((products) => products.price !== " " && products.price !== "")
    .map((product) => Number(product.price))
    .reduce((sum, a) => (sum = sum + a), 0)
);

// 4: Concatenate Product Names
console.log(products.reduce((sum, a) => (sum = sum + a.product), ""));

// 5: Find Extremes in Prices
const sortedProducts = products
  .filter((products) => products.price !== " " && products.price !== "")
  .sort((a, b) => Number(a.price) - Number(b.price));
const highestPriceItem = sortedProducts[sortedProducts.length - 1];
const lowestPriceItem = sortedProducts[0];

const result = `Highest: ${highestPriceItem.product} (R${highestPriceItem.price}). Lowest: ${lowestPriceItem.product} (R${lowestPriceItem.price}).`;
console.log(result);

// 6: Object Transformation
console.log(
  products.reduce((acc, product) => {
    const entries = Object.entries(product);
    entries[0][0] = "name";
    entries[1][0] = "cost";
    acc.push(Object.fromEntries(entries));
    return acc;
  }, [])
);

