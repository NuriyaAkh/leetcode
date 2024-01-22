/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
let nums = [2,5,9,8];
let n = 2;
var shuffle = function(nums, n) {
    console.log("nums",nums,"n",n)
    if (!n==0){
        let res = []
        for(let i = 0; i < n; i++){
            res.push(nums[i], nums[i+n])
        }
       // return res
        console.log(res);
    }
    return;
    // console.log("n=0")
        
    };
shuffle(nums,n);
