const merge = (ar1, ar2) => {
  const ar3 = ar1.concat(ar2);

  for (let i = 0; i < ar3.length; i++) {
    if (ar3[i] > ar3[i + 1]) {
      let num = ar3[i + 1];
      ar3[i + 1] = ar3[i];
      ar3[i] = num;
      i = -1; 
    }
  }
  return ar3;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
