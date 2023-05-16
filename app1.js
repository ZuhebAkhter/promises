// console.log('person1:shows ticket');
// console.log('person2:shows ticket');

// const promisemyFriendbringTicker = new Promise((resolve,rejec)=>{
//     setTimeout(()=>{
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn=promisemyFriendbringTicker.then((t)=>{
//     console.log('w:here is ticket');
//     console.log('h:we should go in');
//     console.log('w:I need popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`)
//     })

// })

// const getButter=getPopcorn.then((t)=>{
//     console.log('h:we shuld go in');
//     console.log('w:i need butter')
//     return new Promise((resolve, reject) => {
//         resolve(`${t} and here is your butter`)
//     })
// })
// getButter.then((t)=>{
//     console.log(t)
// })

// console.log('person3:shows ticket');
// console.log('person4:shows ticket');





//using async 
console.log('person1:shows ticket');
console.log('person2:shows ticket');

const premovie=async()=>{
    const promisemyFriendbringTicker = new Promise((resolve,rejec)=>{
            setTimeout(()=>{
                resolve('ticket')
            },3000)
        })
    const getPopcorn=new Promise((resolve, reject) => {
        resolve('popcorn')
    })    

    const getButter=new Promise((resolve, reject) => {
        resolve('butter')
    })
    const getColddrink=new Promise((resolve, reject) => {
        resolve('colddrinks')
    })

    

let tickets = await promisemyFriendbringTicker;

console.log(`w:i have ${tickets}`);
    console.log('h:we should go in');
    console.log('w:I need popcorn');

    let popcorn =await getPopcorn;
    console.log(`here is your ${popcorn}`);
    console.log('h:we shuld go in');
        console.log('w:i need butter')

        let butter=await getButter;
        console.log(`here is your ${butter}`)

console.log("w:i need cold drink")
let colddrinks=await getColddrink;
console.log(`here is your ${colddrinks}`)

return tickets;
}
premovie().then((m)=>console.log(`person3:shows ${m}`))



console.log('person4:shows ticket');
console.log('person5:shows ticket');
