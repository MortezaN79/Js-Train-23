function max(prevVal,currentVal){
    if (currentVal>prevVal) {
        return currentVal;
    } else
        return prevVal;
}
function min(prevVal,currentVal){
    if (currentVal< prevVal) {
        return currentVal;
    } else
        return prevVal;
}
function minMaxArr(arr){
    const minResult = arr.reduce(min);
    const maxResult = arr.reduce(max);
    return  {min: minResult, max: maxResult};
}
const arr = [6,9, 7, -8, 1, -5];
console.log(minMaxArr(arr))
