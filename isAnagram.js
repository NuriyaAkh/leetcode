var isAnagram = function(s, t) {
  lettersInS=s.split('').sort().join('');
  lettersInT=t.split('').sort().join('')
  console.log("s",lettersInS)
  console.log("t",lettersInT)
if (lettersInS.length !== lettersInT.length){
    return false;
}
if (lettersInS===lettersInT){
  return true
} else return false;

};
const a=isAnagram("cut i","utc i");
console.log(a)//true