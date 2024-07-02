//Bai 1
function minNum(list){
    let sorted = list.sort()
    console.log(sorted);
    return sorted[0];
}
let testArray = [34,123,6,42,4,545323,34,24,234,3];
console.log(minNum(testArray));