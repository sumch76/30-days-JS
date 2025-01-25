
Array.prototype.myReduce=function(cb,initialValue)
{
var accumulator=initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator? cb(accumulator,this[i],i,this):this[i];
    
  }
    return accumulator;
};

const nums=[2,4,5,6,8];
const check=nums.myReduce((acc,curr,i,arr)=>{
   return acc+curr},0);
console.log(check);