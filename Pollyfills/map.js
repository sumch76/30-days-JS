//pollyfill for map()
//Array.map((num,i,arr)=>{ })

// Array.prototype.myMap=function (cb) 
// {
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i]));
        
//     }
//     return temp;
    
// };
// const nums=[1,2,4,5];
// const multiply=nums.myMap((nums)=>nums*3)
// console.log(multiply);

Array.prototype.myMap=function(cb){
    let temp=[];
     for(let i=0;i<this.length;i++)
     {
        temp.push(cb(this[i]));
     }
     return temp;
}