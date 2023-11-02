function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  var sequence = [];
  if (n === 1) {
    sequence = [0];
  } else if (n === 2) {
    sequence = [0, 1];
  } else {
    sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        var element =sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(element);
    }
  }
  return sequence;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}
