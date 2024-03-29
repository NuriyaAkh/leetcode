var groupAnagrams = function (strs) {
  const groups = {};
  for (let str of strs) {
    sortedStr = str.split('').sort().join('');

    if (groups[sortedStr]) {
      groups[sortedStr].push(str);
    } else {
      groups[sortedStr] = [str];
    }
  }
  return Object.values(groups)
};

console.log(groupAnagrams((strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));
