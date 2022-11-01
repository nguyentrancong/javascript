function* generateId() {
  yield 1;

  console.log("Continue to run");
  yield 2;

  console.log("Resume");
  yield 3;
}

const newId = generateId();

console.log("next: ", newId.next());

console.log("return: ", newId.return());

// console.log("throw: ", newId.throw());

function* generateFibonaci() {
  let prev = 0;
  let curr = 1;

  while (true) {
    yield curr;

    const next = prev + curr;
    prev = curr;
    curr = next;
  }
}

const fibo = generateFibonaci();
console.log("generateFibonaci ", fibo.next());
console.log("generateFibonaci ", fibo.next());
console.log("generateFibonaci ", fibo.next());
console.log("generateFibonaci ", fibo.next());
console.log("generateFibonaci ", fibo.next());

// tao bien
function* loopRange(from, to) {
  for (let i = from; i <= to; i++) {
    yield i + 100;
  }

  return to + 10;
}

const range = loopRange(0, 10);
console.log("=> Range: ", range);
for (const i of range) {
  console.log("range: ", i);
}
