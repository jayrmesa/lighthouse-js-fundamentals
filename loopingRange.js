function range (start,end,step) {
  var array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    array = [];
  } else {
    var counter = start;
    while (counter <= end) {
      array.push(counter);
      counter += step;
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));