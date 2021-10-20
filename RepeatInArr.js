function count(prev,current){
    prev[current] = (prev[current] || 0) + 1;
    return prev;
}
const arr = [1,1,1,5,5,5,5,5,5,5,9,9,9,7,7,3,3,7,9,9,11,11];

console.log(arr.reduce(count,{}))