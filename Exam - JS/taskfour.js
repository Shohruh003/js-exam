function maxPrice(obj) {
  var max = 0;
  var maxN;
  for (var item of obj) {
    if (max < item.price) {
      max = item.price;
      maxN = item.name;
    } else {
      maxN = maxN;
    }
  }

  return maxN;
}

var items = [
  { name: 'Ali', price: 200},
  { name: 'Umid', price: 800},
  { name: 'Sardor', price: 400},
];

console.log(maxPrice(items));