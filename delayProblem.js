// Delay Problem

const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 800));
const promise4 = () => new Promise(resolve => setTimeout(() => resolve(4), 300));
const promiseFunctions = [promise1, promise2, promise3, promise4];
const delay = 1000;

// Solution
function resolveAfterDelay(delay) {
    return new Promise(resolve => setTimeout(() => resolve(), delay));
}

async function delayedPromiseChain(promiseFunctions, delay) {
    let result;
    for (let i = 0; i < promiseFunctions.length; i++) {
        await resolveAfterDelay(delay);
        result = await promiseFunctions[i]();
        console.log(result);
    }
    return result;
}

// Testing the promise
const result = delayedPromiseChain(promiseFunctions, delay);
console.log(result);

