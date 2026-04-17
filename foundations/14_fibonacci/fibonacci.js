const fibonacci = function (num) {
  // let sequence = [1, 1, 2, 3, 5, 8];
  num = Number(num);
  if (num === 0) return 0;
  if (num < 0) return "OOPS";
  let sequence = Array(num).fill(1);
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i - 1] && sequence[i - 2]) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  }
  return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
