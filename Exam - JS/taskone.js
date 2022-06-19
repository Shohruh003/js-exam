var numbers = [1, 3, 0, 5, 0, 7, 0];

function zeroEnd(array) {
  var collection1 = '';
  var collection2 = '';

  for (var num of array) {
    if (num !== 0) {
      collection1 += num.toString();
    } else {
      collection2 += num.toString();
    }
  }

  var collection = collection1 + collection2;

  return collection;
}

console.log(zeroEnd(numbers));