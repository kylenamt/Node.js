// Bai 1
function checkStringExist1(String1, String2){
    let result = false;
    for(let i = 0; i< String1.length - String2.length +1;i++){
        if (String1.substr(i,String2.length) === String2 ){
            result = true;
            break;
        }
    }
    return result;
}
function checkStringExist2(String1, String2){
    const word = String1.split(" ");
    for(let i = 0; i< word.length;i++){
        if (word[i] === String2){
            return true;
        }
    }
    return false;
}
//Test 1   
console.log( checkStringExist2("Amela A Beta", "Beta"));
console.log( checkStringExist2("Amela A Beta", "B"));

//Bai 2
function shortenString(String){
    return String.substr(0,8) + "...";
}

//Test 2
console.log(shortenString("xin chao the gioi"));

//Bai 3
function repeatString10(String){
    let result = String;
    const repeatTimes = 9 // 10-1
    for (let i = 0; i<repeatTimes; i++){
        result +=String;
    }
    return result;
}
//Test 3
console.log(repeatString10("hi"));

//Bai 4
function repeatString10Dash(String){
    let result = String;
    const repeatTimes = 9 // 10-1
    for (let i = 0; i<repeatTimes; i++){
        result += "-" + String;
    }
    return result;
}
//Test 4
console.log(repeatString10Dash("a"));

//Bai 5
function repeatStringNDash(String,n){
    let result = String;
    const repeatTimes = n-1; // 10-1
    for (let i = 0; i<repeatTimes; i++){
        result += "-" + String;
    }
    return result;
}
//Test 5
console.log(repeatStringNDash('a',5));

//Bai 6
function reverseString(String){
    let result = "";
    for(let i = 0; i< String.length;i++){
        result += String[String.length-1-i];
    }
    return result;
}
//Test 6
console.log(reverseString("hello"));

//Bai 7
function palindromeCheck(String){
    const checkString = String.trim().toLowerCase();
    const checkLength = checkString.length;
    let result = true;
    for(let i = 0; i<(checkLength/2);i++){
        if (checkString[i] != checkString[checkLength-1-i]){
            result = false;
            break;
        }
    }
    return result;
}
//Test 7
console.log(palindromeCheck('Race car'));
console.log(palindromeCheck('hello'));

//Bai 8
function checkUpperCase(String){
    return (String.toUpperCase() === String);
}
//Test 8
console.log(checkUpperCase('YES'));
console.log(checkUpperCase('No'));

//NUMBER

//Bai 1
function sphereVolume(radius){
    return (4/3)*Math.PI*(radius**3);
}
//Test 1
console.log("R=1, should be 4.188. Got: " + sphereVolume(1))
console.log("R=3, should be 113.09734. Got: " + sphereVolume(3))

//Bai 2
function sumRange(start,end){
    let result = 0;
    for(let i = start+1;i<end;i++){
        result += i;
    }
    return result;
}
// Can be done faster using formula

//Test 2
console.log(sumRange(3,9));

//Bai 3
function checkPrime(number){
    if(number ==2||number ==3){
        return true;
    }
    if (number%2==0||number%3 ==0){
        return false;
    }
    if(number==0||number ==1){
        return false;
    }

    for(let i = 5; i< (number**0.5)+1;i+=2){
        if (number%i ==0){
            return false;
        }
    }
    return true;
}

//Test 3
console.log(checkPrime(1));
console.log(checkPrime(2));
console.log(checkPrime(31));
console.log(checkPrime(2000000011));

//Bai 4
function sumPrime(number){
    let sum = 0;
    for(let i = 2; i<= number;i++){
        if (checkPrime(i)){
            sum += i;
        }
    }
    return sum;
}
//Test 4
console.log(sumPrime(7))

//Bai 5
function sumDivisor(number){
    let a = number;
    let result = 0;
    for(let i = 1; i<=number; i++){
        if(number%i ==0){
            result +=i;
        }
    }
    return result;
}

//Bai 6
function smallestOrder(number){
    let digits = number.toString().split('');
    let realDigits = digits.map(digit => Number(digit)).sort().reverse();
    let result = 0
    for (i = 0; i<realDigits.length;i++){
        result += realDigits[i]*(10**i);
    }
    return result;
}

//Test 6
console.log(smallestOrder(53751));