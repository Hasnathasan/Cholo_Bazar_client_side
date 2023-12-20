function memoize(fn) {
    let functionsWithArgs = {};
    let ans = {};
    return function(...args) {
        if(functionsWithArgs[`"${fn}"`] !== `"${args}"`){
            console.log(functionsWithArgs[`"${fn}"`], args);
            const number = fn(...args);
            functionsWithArgs[`"${fn}"`] = `"${args}"`;
            ans[fn] = number;
            return number;
        }
        else {
            return ans[fn];
        }
    }
}



let callCount = 0;
const memoizedFn = memoize(function (a, b) {
callCount += 1;
  return a + b;
 })
 // 5
 console.log(memoizedFn(2, 3))
 console.log(memoizedFn(2, 3))
 console.log(callCount) // 1 


 console.log([2, 3] == [2, 3])
