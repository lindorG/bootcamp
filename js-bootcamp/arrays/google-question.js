const google1 = [1, 2, 3, 9];
const google2 = [1, 2, 4, 4];

const index1 = google1.findIndex(function (num) {
  return num === 8;
});

const index2 = google2.findIndex(function (num) {
  return num === 8;
});

console.log(google1)
google1.pop()
console.log(google1)

console.log(index1);
console.log(index2);
