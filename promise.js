//1
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
});
  
// promise.then(alert);// 1

//2
function delay(ms) {
    return new Promise(res => setTimeout(()=> res(), ms));
}

delay(3000).then(() => console.log('ok'));