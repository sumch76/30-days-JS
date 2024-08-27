//create a promise that will be resolved when the user clicks on the button and then reject when the user clicks on the cancel button
const promise = new Promise((resolve, reject) => {
    
    
    // Add an event listener to the button
    document.getElementById("myButton")
    .addEventListener("click", () => {
        resolve("Promise Resolved!") 
    });
    document.getElementById("myButton2")
    .addEventListener("click", () => {
        reject("Promise Reject!") 
    });

});

promise.then(resolve=>console.log(resolve)).catch(err=>{console.log(err)});
console.log(promise);


// promise.then((message) => {
//     console.log(message).catch(err=>{console.log(err);
//     });
//     console.log(promise);
    

// });