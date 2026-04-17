const palindromes = function (str) {
  let cleanStr = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  cleanStr = cleanStr.replaceAll(" ", "");
  cleanStr = cleanStr.toLowerCase();
  let reversed = cleanStr.split("").reverse().join("");
  if (cleanStr === reversed) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
