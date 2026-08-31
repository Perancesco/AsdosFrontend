//ForEach()
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
  // Output: 1, 2, 3, 4, 5
});

//map()
let squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers); 
// Output: [1, 4, 9, 16, 25]

//filter()
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); 
// Output: [2, 4]

//find()
let foundNumber = numbers.find(function(number) {
  return number > 3;
});

console.log(foundNumber); 
// Output: 4

//indexof(0)
let index = numbers.indexOf(4);

console.log(index); 
// Output: 3 (karena indeks mulai dari 0)

//includes()
let includesNumber = numbers.includes(5);

console.log(includesNumber); 
// Output: true (karena angka 5 ada di dalam array)