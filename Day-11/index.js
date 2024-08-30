// //task 1-Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promise=new Promise(()=>
// {
//     setTimeout(()=>
//     {
//         console.log("after 5 second");
//     },5000)
// });


// const promise2=new Promise((reslove)=>
// {
//     setTimeout(()=>
//     {
//         reslove("after 10 second");
//     },10000)
// });

// promise2.then((message)=>console.log(message));


// // Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

// const rejectPromise=new Promise((_,reject)=>
// {
//     setTimeout(()=>
//     {
//         reject(new Error("after 5 second"));
//     },1000);
// });

// rejectPromise.catch((error)=>console.log(error));

// Task 3: Create a sequence of promises that simulate fetching data from a server. 
// Chain the promises to log messages in a specific order.

// function fetchData(message,delay){
//     return new Promise((res,rej)=>
//     {
//         setTimeout(()=>
//         {
//             console.log(message);
//             res(message);
            
            
//         },delay)
//     });

// }

// fetchData('fetching data from the server....',5000).then(()=>
// fetchData("fetching data from server 2...",5000))
// .then(()=>fetchData("all data fetched successfully",500))
 

//other wayy

// const fetchData1=new Promise((res)=>
// {
//     setTimeout(()=>
//     {
//         res("fetchdata1 resolved");
//     },5000)
// })


// const fetchData2= new Promise((res)=>
// {
//     setTimeout(()=>
//     {
//         res("fetchdata2 resolved");
//     },10000)
// })

// fetchData1.then((msg)=>{
//     console.log(msg);
//     return fetchData2
// }).then((msg)=>{
//     console.log(msg);
    
// });

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
//   const promise=new Promise((resolve)=>
// {
//     setTimeout(()=>
//     {
//          resolve("async function solved!!!");//then this lastt
//     },5000)
// })

// async function handlePromise()
// {
//     console.log("hiiiii");//it will print instantly
//     const result= await promise;
//     console.log("under async functionn");//then aftr 5 second this
    
//     console.log(result);
    
// }
// handlePromise();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// function someAsyncFunction()
// {
//   return new Promise((_,reject)=>
//   {
//     setTimeout(()=>
//     {
//        reject(new Error("something went wromg"))
//       },5000)
   
//   });
// }
// async function rejectHandlePromise()
// {
//   try{
//     const result=await someAsyncFunction();
//     console.log(result);
    
//   }
//   catch(error)
// {
//   console.error("error:",error.message);
// }};

// rejectHandlePromise();


// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>response.json())
// .then(data=>console.log("data:", data))
// .catch(error=>console.error("error:",error.message));


//other method and we are fetching only first 10 data from api server using slice

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// fetch(apiUrl)
// .then(response=>
// {
//   if(!response.ok)
//   {
//     throw new Error(response.message);
//   }
//   return response.json();
// }
// ).then(data=>{
//   console.log("data:",data.slice(0,10).map(items=>({
//     id:items.id,
//     title:items.title
//   })));
  
// }).catch(error=>{
//   console.error("error:",error.message);
// });

// Task 7: Use the fetch API to get data from a public API and 
// log the response data to the console using async/await
// const fetchData=async()=>
// {
//   try{
//     const response=await fetch("http://fakestoreapi.com/products");
//     const data= await response.json();
//     console.log("data:",data.slice(0,10));
//   }
//   catch(error){
//     console.error("error:",error);
//   }
// };
// fetchData();

// ****************OTHER WAY*******************
// async function fetchasyncfunction()
// {
//   try{
//     const response=await fetch("http://fakestoreapi.com/products");
//     const data= await response.json();
//     console.log("data:",data.slice(0,5));

//   }
//   catch(error){
//     console.error("error:",error);
//   }
// }
// fetchasyncfunction();


// Task 8: Use Promise.all to wait for multiple promises to resolve and 
// then log all their values.
