const removeFromArray = function (arr, ...arg) {
  let newArray = arr.filter((el) => !arg.includes(el));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
