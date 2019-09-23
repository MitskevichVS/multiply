module.exports = function multiply(first, second) {
  let mul1 = first.split('').reverse();
  let mul2 = second.split('').reverse();
  let ansArray = [];

  mul1.forEach((item1, index1) => {
    mul2.forEach((item2, index2) => {
      let ans = item1 * item2;
      if (ansArray[index1 + index2]) {
        ansArray[index1 + index2] += ans;
      } else ansArray[index1 + index2] = ans;
    })
  });

  ansArray.forEach((item, index) => {
    let digit = item % 10;
    carryOver = Math.floor(item / 10);
    ansArray[index] = digit;

    if (ansArray[index + 1]) {
      ansArray[index + 1] += carryOver;
    } else if (carryOver !== 0) {
      ansArray[index + 1] = carryOver;
    }
  });

  return ansArray.reverse().join('');
}
