

Array.prototype.myFilter=function(cb)
{
    let temp=[];
    for (let i = 0; i < this.length; i++) {
    if(cb(this[i],i,this))
      temp.push(this[i]);
        
    }
    return temp;
};

const nums=[2,4,5,6,8];
const check=nums.myFilter((item)=>item>4);
console.log(check);