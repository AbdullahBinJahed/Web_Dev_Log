var names = ["ABJ", "JMS", "Sakura"];
console.log(names[2]);

//push() => add a new element at the end of array
names.push("Adachi");
console.log(names[3]);
names.push("Shimamura");
names.push("Sayu");

//pop() => remove the last element from array
names.pop();
console.log(names);

//shift() => remove the first element from array
names.shift();
console.log(names);

//unshift() => add a new element at the beginning of array
names.unshift("ABJ");
console.log(names);

//splice(param, removeNumber, elem[]...) => remove or add new elements starting with param+1 index
names.splice(4, 0, "Hougetsu");
console.log(names);
names.splice(4, 1, "to");
console.log(names);

//slice(starting index, ending index+1) => returns a section of an array
var newArray = names.slice(3, 6);
console.log(newArray);

//sort() => sorts an array
var sortedNames = names.sort();
console.log(sortedNames);

//reverse() => sorts array in opposite order
names.reverse();
console.log(sortedNames);

var numbers = [2, 25, 5, 3, 25, 10];
//if returns positive then elements will be exchanged
numbers.sort(function(a, b)
{
  return a - b;
});
console.log(numbers);
numbers.sort(function(a, b)
{
  return b - a;
});
console.log(numbers);