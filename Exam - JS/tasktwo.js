
var array = [false,true, false, true, true];

function countTrue(arr) {
  var count = 0;
  for (num of arr) {
    if (num) {
      count++;
    }
  }
  return count;
}
console.log(countTrue(array));


