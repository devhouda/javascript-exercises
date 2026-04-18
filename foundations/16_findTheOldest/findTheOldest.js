const findTheOldest = function (arr) {
  // const items = [
  //   { name: "Apple", price: 10 },
  //   { name: "Banana", price: 20 },
  //   { name: "Cherry", price: 15 },
  // ];

  const oldest = arr.reduce((prev, curr) => {
    // let age;
    // if (prev.yearOfDeath) {
    //   age = prev.yearOfDeath - prev.yearOfBirth;
    // } else {
    //   age = new Date().getFullYear() - prev.yearOfBirth;
    // }
    if (prev.yearOfDeath) {
      return prev.yearOfDeath - prev.yearOfBirth >
        curr.yearOfDeath - curr.yearOfBirth
        ? prev
        : curr;
    } else {
      let currentYear = new Date().getFullYear();
      return currentYear - prev.yearOfBirth > currentYear - curr.yearOfBirth
        ? prev
        : curr;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
