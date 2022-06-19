
function numbers(arr) {
  var summed = 0;
  for (num of arr) {
    if (num > 0) {
      summed = summed + num;
    }
  }
  return summed;
}

console.log(numbers([1, 2, 0, -1, -2, 3, 4]));