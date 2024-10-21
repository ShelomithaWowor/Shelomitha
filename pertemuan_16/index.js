// Asynchronous JS

// Synchronous -> single thread
console.log("proses 1")
console.log("proses 2")
console.log("proses yang memakan waktu lama")
console.log("proses 4")
// Asynchronous --> multi thread --> non-blocking
// 1. parallel
setTimeout(() => {
    console.log("proses 1");
}, 3000);
console.log("proses 2")
setTimeout(() => {
    console.log("proses 3")
}, 5000)
console.log("proses 4")
// 2. concuren
setTimeout(() => {
    console.log("proses 1")
    setTimeout(() => {
    console.log("proses 2")
    setTimeout(() => {
        console.log("proses 3")
        setTimeout(() => {
            console.log("proses 4")
        }, 3000);
    }, 3000);
    }, 3000);
}, 3000);
// promise
const newpromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("berhasil")
    } else {
        reject("gagal")
    }
})
// cara pakai promise
// 1. then = catch 
newpromise
.then((result) => console.log(result)
.catch((error) => console.log(error)))
// 2. asyn = await
// harus dibuat dalam fungsi
const consumepromise = async() => {
    try{
    let result = await newpromise
    console.log(result)
    }catch (erro) {
    console.log(error)
    }
}
consumepromise()
// promise yang sudah ada
// 1. fatch
fatch();


const fatch  = async () => {
    let response = await fatch("")
    let json = await response.json()
    console.log(json)
    json.forEach(({name}) => console.log(name));
}
// 2. axios
