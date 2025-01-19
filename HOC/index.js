//higher order function are those functions which take another function as a argument
const radius=[1,2,5,6];

const calculateArea=(radius)=>
{
    const output=[];
    for(let i=0;i<radius.length;i++)
    {
   output.push(Math.PI* radius[i]*radius[i]);
    }

    return output;

}
console.log(calculateArea(radius));

//but suppose if we have to find another circumference then we have to write whole code
//it will not follow DRY principle.

//better approach
const Radius=[1,3,4];

const area=(Radius)=>
{
    return Math.PI* Radius* Radius;
}

const circumference=(Radius)=>
{
    return 2*Math.PI *Radius;

}
const calculate=(Radius,operation)=>
{
    const output=[];
    for(let i=0;i<Radius.length;i++)
    {
      output.push(operation(Radius[i]));
    }
    return output;
}

console.log(calculate(Radius,area));
console.log(calculate(Radius,circumference));