// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает дату в 
// виде целого количества миллисекунд, 
// прошедших с 01.01.1970 UTC)


let d = new Date(2012, 1, 20, 3, 12)

console.log(d);

//2

let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    return date.toLocaleString('ru', {weekday: 'short'});
}

console.log(getWeekDay(date));

//3
function getLocalDay(date) {
    return date.getDay();
}
console.log(getLocalDay(date));

//4
d = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();

}

console.log(getDateAgo(d, 2));
//5

function getLastDayOfMonth(year, month) {
    let data = new Date();

    date.setFullYear(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
//6

function getSecondsToday() {
    let date = new Date();

    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());
//7

function getSecondsToTomorrow() {
    let d = new Date();
    
    let toDay = (d.getHours() * 60 + d.getMinutes()) * 60 + d.getSeconds();
    let day = 86400;
  
    return day - toDay 
}

console.log(getSecondsToTomorrow());