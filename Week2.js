//Bai 1
function minNum(arr){
    let min = arr[0];
    for(let i = 0;i<arr.length;i++){
        if (arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
let testArray = [34,123,6,42,4,545323,34,24,234,3];
console.log(minNum(testArray));

//Bai 2
function secondLargest(arr){
    //subArr to contain the largest and 2nd largest. Initialize with the first two element of arr
    let subArr = new Map([
            ['1st', arr[0]],
            ['2nd',arr[1]]
        ]);
    //swap if necessary
    if(arr[1]>arr[0]){
        subArr.set('1st',arr[1]);
        subArr.set('2nd',arr[0]);
    }
    // loop and compare with the elements of subArr
    for(let i = 2; i< arr.length;i++){
        if (arr[i]>subArr.get('1st')){
            subArr.set('2nd',subArr.get('1st'));
            subArr.set('1st',arr[i]);
        }
        else if (arr[i]>subArr.get('2nd')){
            subArr.set('2nd',arr[i]);
            
        }
    }
    return subArr.get('2nd');
}

//Test 2
console.log(secondLargest(testArray));

//Bai 3
function sortStudent(arr){
    return arr.toSorted().toReversed();
}

// Test 3
console.log(sortStudent(['Nam', 'Hoa', 'Tuan']));

//Bai 4
function sum5(){
    let result = 0;
    for(let i = 0; i<=100;i+=5){
        result +=i;
    }
    //return ((100+0)/2)* ( 1+ (100-0)/5)
    return result;
}

//Test 4
console.log(sum5());

//Bai 5
function mapRemainder(arr){
    return arr.map(x => x%2);
}

//Test 5
console.log(mapRemainder(testArray));

//Bai 6
function longestString(arr){
    let result = [];
    let maxLength = 0;

    for(let i = 0; i<arr.length;i++){
        if (arr[i].length>maxLength){
            result = [arr[i]];
            maxLength = arr[i].length;
        }
        else if (arr[i].length == maxLength){
            result.push(arr[i]);
        }
    }
    return result;
}

//Test 6
console.log(longestString(['aba','aa','aaa','q']));

//Bai 7
function getRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

//Test 7
console.log(getRandomElement(testArray));

//Bai 8
function randomSwap(arr){
    let index1 = Math.floor(Math.random() * arr.length)
    let index2  =Math.floor(Math.random() * arr.length)
    while (index2 == index1 ){
        index2 = Math.floor(Math.random() * arr.length);
    }
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp; 
}
//Test 8
console.log(testArray);
randomSwap(testArray);
console.log(testArray);

//Bai 9
function similarity(arr1, arr2){
    let result = []
    let longerArr = (arr1.length >= arr2.length)?[...arr1]:[...arr2];
    let shorterArr = (arr1.length >= arr2.length)?[...arr2]:[...arr1];
    for(let i = 0; i< shorterArr.length;i++){
        if(longerArr.includes(shorterArr[i])){
            result.push(shorterArr[i]);
        }
    }
    return result;
}

//Test 9
console.log(similarity([1,2,3],[2,4,5,1]));

//Bai 10
function symmetricDifference(arr1, arr2){
    let result = []
    const concatArr = arr1.concat(arr2);
    const commonElem = similarity(arr1,arr2);
    for (let i = 0; i< concatArr.length;i++){
        let element = concatArr[i]
        if (!(result.includes(element)||commonElem.includes(element))){
            result.push(element);
        }
    }
    return result;
}

//Test 10
console.log(symmetricDifference([1,2,3],[2,4,5,1]));

//Bai 11
function sub_String(word){
    let result = [];
    for (let i = 1; i<= word.length;i++){
        for(let j = 0; j<= word.length-i;j++ ){
            result.push(word.substr(j,i));
        }
    }
    return result.sort();
}

//Test 11
console.log(sub_String("dog"));

//Bai 12
function isIncreasing(arr){
    let result = true;
     for(let i = 1; i< arr.length;i++){
        if (arr[i]<arr[i-1]){
            result = false;
        }
    }
    return result;
}

//Test 12
console.log(isIncreasing([1,2,3,4,5,6,6,7]));
console.log(isIncreasing([1,2,3,4,5,6,7,6]));

//Bai 13
function isDecreasingOdd(arr){
    let result = true;
    for(let i = 0; i< arr.length-1;i++){
        if(arr[i]%2==0 || arr[i]< arr[i+1]){
            result = false;
        }
    }
    return result;
}
//Test 13
console.log(isDecreasingOdd([7,5,3,2,1]));
console.log(isDecreasingOdd([7,5,3,1]));
console.log(isDecreasingOdd([7,5,9,1]));

//OBJECT


const sampleObj = {
    name: "Amela",
    Age: Number,
    Location: 'Ha Noi'
}

//Bai 1
function getKeys(obj){
    return Object.keys(obj);
}

//Test 1
console.log(getKeys(sampleObj));

//Bai 2
function getValues(obj){
    return Object.values(obj);
}

//Test 2
console.log(getValues(sampleObj));

//Bai 3
function checkKey(obj, key){
    return getKeys(obj).includes(key);
}
//is case sensitive
//Test 3
console.log(checkKey(sampleObj,'name'));
console.log(checkKey(sampleObj,'Name'));
console.log(checkKey(sampleObj,'email'));

//Bai 4
function getLengthObject(obj){
    return getKeys(obj).length;
}
//Test 4
console.log(getLengthObject(sampleObj));

//Bai 5
function ageFilter(arr){
    const filtered =  arr.filter(obj => (obj.age < 25 && obj.isStatus));
    return filtered;
}

//Test 5
const testData = [
    { name: 'd', age: 22, isStatus: false },
    { name: 'e', age: 32, isStatus: true },
    { name: 'f', age: 40, isStatus: false },
    { name: 'g', age: 19, isStatus: true },
    { name: 'h', age: 28, isStatus: false }
  ];
console.log(ageFilter(testData));