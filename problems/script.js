for (var i = 0; i < 6; i++) {
    //console.log(i);
  }
  
  //function returns thr reversed version string
  
  let str="sumit";
  let string=str.split("").reverse().join("");
  //console.log(string);
  
  //other way using loop
  function reverseString(str)
  {
    newString=""
    for(var i=str.length-1;i>=0;i--)
    {
      newString=newString+str[i];
    }
    return newString;
  }
  //console.log(reverseString('sumit'));
  
  
  //again doing practice
  
  const reversedFunction=(str)=>
  {
  let StringNew="";
  
  for(let i=str.length-1;i>=0;i--)
  {
    StringNew=StringNew+str[i];
  }
  return StringNew
  }
  //console.log(reverseString('hello world'));
  
  //calucltte the factorail of a  numberr.
  5
  
  function factorial(num)
  {
    if(num===0 || num===1)
    {
      return 1;
    }
    else
    fact=1;
    for(var i=num;i>=1;i--)
    {
      fact=fact*i;
    }
    return fact;
  }
  //console.log(factorial(5));
  
  //create a function that generates a ramdom number between a givn range
  
  
  function randomNumber(min,max)
  {
     return Math.floor(Math.random()*100);
  }
  //console.log(randomNumber(1,100));
  
  function randomFunction(min,max)
  {
    return Math.floor(Math.random()*(max-min+1))+min;
  }
  
  //console.log(randomFunction(50,100));
  
  
  //returns  a  new array of even no (hihger order function)
  
  let array=[10,15,20,35,77];
  function filterEvenNo(array)
  {
    return array.filter(num=>num%2==0);
  
  }
  //console.log(filterEvenNo(array));
  
  //use map() to double all the elements in an array
  
  const maparray=[3,5,7,8,9];
  
  function mapFunction(maparray)
  {
    return maparray.map((arr)=>arr*2);
  
  }
  
  //console.log(mapFunction(maparray));
  
  //using reduce find the largest element
  const arr=[35,67,89,10,10,45,76];
  function reduceArray(max,current)
  {
     return arr.reduce((max,current)=>
    current>max?current:max)
  }
  
  //console.log(reduceArray(arr));
  
  
  //remove all occurence of the specific element from an array
  
  let arr2=[10,35,10,56,78];
  target=10;
  
  function removeArray(arr2,target)
  {
  return arr2.filter(num=>num!=target);
  
  }
  //console.log(removeArray(arr2,target));
  
  
  //create a function that displays the  current date and time  in a specific format
  
  let date=new Date().toDateString();
  let fulltime=new Date().toLocaleString();
  
  // console.log(date);
  // console.log(fulltime);
  
  //try-catch block to handle an error of API fetch
  async function  fetchData()
  {
    try{
     let response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
     let data=await response.json();
     console.log(data);
  
  }
  catch(err)
  {
     console.log(err.message);
  }
  }
  //fetchData();
  
  //implement a  function that makes multiple api calls and process the data using callbacks
  
  // function makeApicall(url,callback)
  // {
  //   fetch(url)
  //   .then(response=>response.json())
  //   .then(data=>callback(data))
  //   .catch(err=>console.error("error during api call:",err.message))
  // }
  // function handleData(data)
  // {
  //   console.log("processed data:",data);
  
  // }
  
  // function main()
  // {
  //   const apiUrl1='https://jsonplaceholder.typicode.com/todos/1';
  //   const apiUrl2="https://jsonplaceholder.typicode.com/todos/2";
  //   makeApicall(apiUrl1,handleData);
  //   makeApicall(apiUrl2,handleData);
  // }
  // main();
  
  
  function makeAPIcall(url)
  {
    return fetch(url)
    .then(response=>response.json())
  }
  function handleData(data)
  {
    console.log("processed data:",data);
  
  }

  function main()
  {
    const apiUrl1='https://jsonplaceholder.typicode.com/todos/3';
    const apiUrl2="https://jsonplaceholder.typicode.com/todos/2";
    makeAPIcall(apiUrl1).then(handleData)
    .catch(err=>console.log(err));
    makeAPIcall(apiUrl2).
    then(handleData).
    catch(err=>console.log(err));
  }
  main();
  
  //image gallley dynamically
  
  //html code
  {/* <div id="gallery"></div> */}
  
  function createImageElement(src){
    let img=document.createElement("img");
    img.src=src;
    return img;
  }
  
  let gallery=document.getElementById("gallery");
  let imageURLs=['./image1.jpeg',"./image.jpg","./image.png"];
  imageURLs.forEach(url=>gallery.appendChild(createImageElement(url)));
  

  //form validation

  //html code
  <body>
    <form id="myForm">
        <input type="text" name="name" required/>
         <input type="email" name="email" required/>
         <input type="submit" value="Submit"/>
         </form>
  </body>

  function validateForm()
  {
    let form=document.getElementById("myForm");
    if(form.checkValidity())
    {
        alert("Form submitted successfully");
    }
    else
    {
        alert("Form is not valid");
    }
  }
  let form=document.getElementById("myForm");
  form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    validateForm();
 });