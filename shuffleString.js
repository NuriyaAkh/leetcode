/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
let s = 'codeleet';
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
var restoreString = function (s, indices) {
  let res = [];
  for (let i = 0; i < indices.length; i++) {
    res[indices[i]] = s[i];

    console.log(res.join(''));
  }
  return res.join('');
};
restoreString(s, indices);
