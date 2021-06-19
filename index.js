export const mult = (a) => (b) => a * b;

export const twice = mult(2);
const result = twice(5)

export const triple = mult(3);
const result2 = triple(5)

console.log(result)
console.log(result2)
