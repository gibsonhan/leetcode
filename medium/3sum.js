//Three Sum implemntation that execeds time limit
var threeSum = function(nums) {
    let cache = { ['return']: []}
    fbor(let i = 0; i< nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k]
                let zeroSum =[nums[i], nums[j], nums[k]].sort()
                let string = JSON.stringify(zeroSum)  
                if(sum === 0 && !cache[string]){
                    cache['return'] = [...cache['return'], zeroSum]
                    cache[string] = true
                }
            }
              
        }
    }
    return cache['return']
};

//3sum
var threeSum = function(nums) {
    let a = nums.sort()
    let triplets = []
    let k = nums.length - 1
    
    for(let i = 0; i < nums.length; i++){
        if(i != 0 && nums[i] === nums[i-1]) continue;
        let j = i + 1
        let k = nums.length -1
        while(j < k){
            if(a[i] + a[j] + a[k] === 0){
                triplets.push([a[i], a[j], a[k]])
                j++
                while(j < k && a[j] === a[j-1]){
                    j++
                }
            }
            else if([i] + a[j] + a[k] < 0){
                j++
            }
            else {
                k--
            }
                
        }
    }
    return triplets
};