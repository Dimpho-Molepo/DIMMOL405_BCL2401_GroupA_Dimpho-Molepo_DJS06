# DJS06: Higher Order Functions

## Project Objective
This project is designed to challenge and deepen your understanding of JavaScript's powerful array methods. You'll manipulate data using `forEach`, `map`, `filter`, `reduce`, and more, to perform a variety of tasks. This exercise will test your ability to apply these methods in combination to solve complex problems and achieve desired outcomes.

The essence of using these higher-order functions is to encourage a declarative approach to programming: you define what you want to achieve (e.g., filter a list, transform data) without having to specify how to perform the operations step-by-step (as you would with imperative loops like for or while). This leads to more readable, concise, and often more maintainable code. Additionally, these functions can help avoid side effects and create pure functions, both key aspects of functional programming.

## Project Exercises

### Exercises

1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

### Advanced Exercises (Single `console.log` Execution)
For these exercises, wrap your logic in a single `console.log` statement:

1. **Log Products**: Iterate over the products array, logging each product name.
2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.

## Discussion and Reflection

### Project Analysis
This project is designed to enhance our understanding with higher-order functions and how they compare to traditiional loop-based approaches. The question this project poses to us is what are the advantages and disadvantages of each? How they impact they code readability, maintainability, and performance? 
- Higher order funcitons removes/abstracts complex logic and therefore reducing the amount of code
- Higher order functions are more readable and maintainable
- So far I haven't discovered the disadvantages of using high-order functions but I think they're a bit harder to understand and grasp the logic.
- In this project I used various methods to attain the final desired product.
- For the first exercise, no:1 I used a forEach to iterate over the array and log out the desired result.
- For no:2 I map and toUpperCase to transfrom the province array to upper case.
- For no:3 I used map and length to return an array of the length of the names
- For no:4 I sort to sort the provinces in an alphabetical order.
- For no:5 I used filter and include to check if the array contains the word 'Cape' and return an length of the array.
- For no:6 I used map and some to check if the name contains the letter 'S' and return an array of boolean values. I used split inside map function to turn the name into an array in order to be able to use the some function
- For no:7 I used reduce to transform the names array into an object mapping names to their respective provinces. I used the key 'name'  and value 'provinces' at some index to create the key-value pair that gets added to the empty object.
- For the advanced exercises I used a single console.log statement to log out the desired result. I used various methods to attain the final desired product.
- For no:1 I used a forEach to iterate over the array and log out the desired result.
- For no:2 I used filter and length to filter out the products with names longer than 5 characters.
- For no:3 I used filter and map to filter out the products without prices, convert string prices to numbers, and calculate the total price using reduce.
- For no:4 I used reduce to concatenate all product names into a single string.
- For no:5 I used filter to remove the empty and whitespace, then used sort to sort the prices from lowest to highest price values to identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y
- For no:6 I used Object.entries and reduce to recreate the products object with keys 'name' and 'cost', maintaining their original values.

### Challenges
- I had a hard time understanding the logic behind the advanced exercises particulaly no: 6. I had to read the instructions multiple times to fully grasp the desired result.
- Also I could not understand what the instructions meant when they said we must "wrap your logic in a single `console.log` statement:". I felt like this is such an ambigous statement because the question that came to my mind was are we supposed to wrap every task from no:1 to no:6 inside one console log or each and every task show be wrapped in its individual console log?

## Author
Dimpho Molepo