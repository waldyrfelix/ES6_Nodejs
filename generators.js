function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

function* fibonacci(){
  let pre = 0, cur = 1
  while (true) {
    [ pre, cur ] = [ cur, pre + cur ]
    yield cur
  }
}

let fib = fibonacci()
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

// for(let i of range(0, 100, 5)){
//   console.log(i);
// }
