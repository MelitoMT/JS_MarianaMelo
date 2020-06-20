let width = 4;
let height = 7;
let num1 = 1;
let num2 = 0;
let num3 = 0;
let countNum = 0;
let suc = [];
let fibo = [];
for (let j=0; j < width*height; j++) {
  suc.push(num3);
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
}
for (let i = 0; i < height; i++) {
  fibo.push([]);
}
while (suc.length != 0) {
  for (let x = countNum; x < width - countNum; x++) {
    let y = countNum;
    fibo[y][x] = suc.shift();
  }
  if (suc.length != 0) {
    for (y = countNum + 1; y < height - countNum; y++) {
      x = width - countNum - 1;
      fibo[y][x] = suc.shift();
    }
    if (suc.length != 0) {
      for (x = width - countNum - 2; x >= countNum; x--) {
        y = height - countNum - 1;
        fibo[y][x] = suc.shift();
      }
      if (suc.length != 0) {
        for (y = height - countNum - 2; y > countNum ; y--) {
          x = countNum;
          fibo[y][x] = suc.shift();
        }
      }
    }
  }
  countNum++;
}
console.table(fibo);