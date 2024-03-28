// console.log("Code execution started");
// const fetchWeather = new Promise((resolve, reject)=>{
//     let weather = 'sunny';
//     setTimeout(()=>{
//         if(weather){
//             resolve(`Todays weather is : ${weather}`);
//         }else{
//             reject("Unable to fetch weather");
//         }
//     },2000);
// });

// fetchWeather.then((weather)=>{
//     console.log(weather);
// }).catch((error)=>{
//     console.log(error);
// })


// console.log("Code execution started..........")
// const sum = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(10+20)
//     },2000)
// });

// sum.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// })




// console.log("Code execution started...")
// let a=10;
// let b=10;
// const waitingTime = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         b=20;
//         resolve(a+b);
//     },2000)
// });

// console.log(b);
// waitingTime.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });

// console.log("Code execution started...")
// const APIResult = new Promise((resolve, reject)=>{
    
//     const random = Math.random()

//     if(random>0.8){
//         resolve("Data fetched successfullyy...")
//     }else{
//         reject("API failed to fetch the data...");
//     }
// });

// for(let i=0;i<5;i++){
    
//     APIResult.then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     });
    
// }




const table = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        const tableOfThree = [];
        for (let i = 1; i <= 10; i++) {
            tableOfThree.push(`3 * ${i} = ${3 * i}`);
        }
        resolve(tableOfThree);
    }, 1000); 
    

    // setTimeout(()=>{
    //     for(let i=1;i<=10;i++){
    //         resolve();
    //     }
       
    // },2000);
});



for(let i=1;i<=10;i++){
    console.log(`2 * ${i} = ${2*i}`);
} 



table.then((data)=>{
    data.forEach((entry) => {
        console.log(entry);
    });
}).catch((error)=>{
    console.log(error);
})






















