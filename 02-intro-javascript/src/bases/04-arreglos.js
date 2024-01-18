const vector = [1, 2, 3, 4];

const vector2 = [...vector, 5];

const vector3 = vector2.map(function (numero) {
  return numero * 2;
});

console.log(vector);
console.log(vector2);
console.log(vector3);
