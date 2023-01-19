const winningNumbers = [32,9,14,33,48,5];
function logWinningNumbers(numbers){
  console.log("winningNumbers:", numbers);
}
logWinningNumbers(winningNumbers);

const egregiouslyNestedArray = [
  "How",
  ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
  "seems.",
];
console.log(egregiouslyNestedArray[1][1]);




const cities = ["New York", "San Francisco"];
console.log(cities);

cities.unshift("Boston", "Chicago");
// => 4

console.log(cities);
const allCities = ["Texas", ...cities, "Washington"];
console.log(allCities);
let temp = allCities[2];
console.log(temp);
allCities[2]= allCities[allCities.length - 1];
console.log(allCities[2]);
allCities[allCities.length - 1] = temp;
console.log(allCities[allCities.length - 1]);
allCities.pop();
console.log(allCities);
console.log(cities);
console.log(cities.indexOf("Chicago"))
console.log([...allCities.slice(0,2),...allCities.slice(3,allCities.length-1)])