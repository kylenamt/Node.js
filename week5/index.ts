
//Bai 1
function getCurrentDate(separator: string){
    let now = new Date();
    return now.getDate() + separator + now.getMonth()+ separator+ now.getFullYear();
}
//Test 1
console.log(getCurrentDate('?'));

//Bai 2
function getDaysInMonth(date: Date){
    const month = date.getMonth();
    const year = date.getFullYear();

    return new Date(year,month,0).getDate();
}
//Test 2
console.log(getDaysInMonth(new Date(2020,2,1)));

//Bai 3
function isWeekend(date:Date){
    return (date.getDay() == 0)||(date.getDay() == 6);
}

//Test 3
console.log(isWeekend(new Date(2024,5,30)));

//Bai 4
function toMinutes(hour:number, minutes: number){
    return hour* 60 + minutes;
}

//Test 4
console.log(toMinutes(2,5));

//Bai 5
function daysPassedInYear(){
    let now = new Date();
    const millisecondInDay = 86400000;
    const timeDifferece  =(now.getTime() - new Date(now.getFullYear(),0,1).getTime());
    return Math.floor(timeDifferece/millisecondInDay);
}
//Test 5
console.log(daysPassedInYear());

//Bai 6
function getAge(birthDay: Date){
    const millisecondInYear:number = 3.154e+10;
    let now = new Date();
    const years = (now.getTime()-birthDay.getTime())/millisecondInYear;
    return Math.floor(years);
}
//Test 6
console.log(getAge(new Date(2005,0,5)));

//Bai 7
function startOfWeek(date: Date){
    let dayOfWeek = date.getDay();
    let daysBefore = (dayOfWeek >0)?dayOfWeek-1:6;

    let startOfWeek: Date = date;

    startOfWeek.setDate(
        (date.getDate() - daysBefore +1)
    );
    return startOfWeek ;
}
//Test 7
console.log(startOfWeek(new Date(2024,5,0)));
console.log(startOfWeek(new Date(2024,5,9)));
console.log(startOfWeek(new Date(2024,5,3)));

//Bai 8
function endOfMonth(date: Date){
    let dayOfMonth = date.getDate();
    console.log(dayOfMonth);
    const daysInMonth = getDaysInMonth(date);
    console.log(daysInMonth);
    let endOfMonth: Date = new Date();
    endOfMonth.setDate(
        (date.getDate() + (daysInMonth - dayOfMonth))
    );
    return endOfMonth ;
}
//Test 8
console.log(endOfMonth(new Date(2024,5,4)));

//Bai 9
function daysToNewYEar(date:Date){
    const nextYear = new Date(date.getFullYear()+1,0,1);
    const millisecondInDay = 86400000;
    return ((nextYear.getTime() - date.getTime())/millisecondInDay);
}
//Test 9
console.log(daysToNewYEar(new Date()));

//Bai 10
function addTimeSecond(timeStamp:String,interval:number){

    let newTime = timeStamp.split(":").map(Number);
    newTime[2] += interval;

    if(newTime[2]>=60){
        newTime[1] += Math.floor(newTime[2]/60);
        newTime[2]  = newTime[2]%60;
    }

    if (newTime[1]>=60){
        newTime[0] += Math.floor(newTime[1]/60);
        newTime[1]  = newTime[1]%60;
    }
    if (newTime[0]>=24){
        newTime[0] -= 24;
    }
    return (newTime[0] + ':' + newTime[1]+ ':' + newTime[2]);
}
console.log(addTimeSecond('9:20:56',7));

//Bai 11

function resetData(obj:any):any{
    for(const key in obj){
        switch(typeof obj[key]){
            case "string":
                obj[key] = '';
                break;
            case "number":
                obj[key] = 0;
                break;
            case "bigint":
                obj[key] = 0n;
                break;
            case "boolean":
                obj[key] = false;
                break;
            case "object":
                    resetData(obj[key]);
            break;
        }
    }
    return obj;
}
//Test 11
let arrayObj = [34,123,6,42,4,545323,34,24,234,3];
let testObj = {
    name: 'Trung',
    age:18,
    isStatus: true,
    a:{
        a:[1,2,3],
        b:{
            c:2
        }
    },
    c: ['a','b','c']
}
console.log(resetData(arrayObj));
console.log(resetData(testObj));