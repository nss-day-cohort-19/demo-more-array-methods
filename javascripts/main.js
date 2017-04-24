console.log("hello main.js");

var colors = ["red", "blue", "green", "orange", "teal"];

// colors.forEach(function(item){
// 	var newColorString = "I like this color:" + item;
// 	console.log(newColorString);
// });


for (var i = 0; i < colors.length; i++){
	var newColorString = "I like this color:" + colors[i];
	console.log(newColorString);
};

console.log("what is the colorString", newColorString);
// colors.reverse();


var reversedColors = colors.map(function(color){

	return color.split("").reverse().join("");
});

console.log("reversedColors", reversedColors);

var backwardColorList = colors.reverse();
console.log("backwardColorList", backwardColorList);


var fourLetters = colors.filter(function(color){
	return color.length === 4;
});

console.log("fourLetters", fourLetters);



var numbers = [51, 40, 4, 98, 3];
console.log("numbers", numbers);

var sum = colors.reduce(function(prev, curr){

	console.log(prev, curr);
	return prev + curr;
});

console.log("sum", sum);

console.log("colors", colors);


var intergers = [13, 25, 4, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12,8];

/*
	sort numbers DECENDING order
	Remove any greater than 19
	multiply each remaining number by 1.5 and then subtract 1
	Output (console) the sum of all resulting numbers.
*/

var chainingResult = intergers
.sort(function(a,b){
	console.log("sort val a:", a, "b:", b);
	return a-b})
.reverse()
.filter(function(num){
	return num <= 19})
.map(function(num){
	return (num * 1.5) - 1})
.reduce(function(prev, curr){
	return prev + curr;
});

console.log("chainingResult", chainingResult);





















