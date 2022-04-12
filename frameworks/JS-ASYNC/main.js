document.write('gasd');

function eat(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function makeError() {
//     console.log('hi');
//     await eat(1000);
//     const error = new Error();
//     throw error;
// }

// async function process() {
//     try {
//         await makeError();
//     } catch(e) {
//         console.error(e);
//     }
// }

// process();
//-----------------------------------------------
// function increaseAndPrint(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const value = n + 1;
//             if (value === 5) {
//                 const error = new Error();
//                 error.name = 'ValueIsFiveError'
//                 reject(error);
//                 return;
//             }

//             console.log(value);
//             resolve(value);
//         }, 1000);
//     })
// }

// increaseAndPrint(0).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// })

// increaseAndPrint(3).then(n => {
//     console.log('success : ', n);
// })

// increaseAndPrint(5).then(n => {
//     console.log('success : ', n);
// })
// -----------------------------------------------
// function work() {
//     setTimeout(() => {
//         const start = Date.now();
//         for (let i = 0; i < 10000000; i++) {

//         }
//         const end = Date.now();
//         console.log(end - start + 'ms');

//         callback(end - start);
//     }, 0);
// }

// console.log('start');
// work((ms) => {
//     console.log('work end!');
//     console.log(ms);
// });
// console.log('next work');
// ---------------------------------------------
// console.log(1);

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }, 1000);