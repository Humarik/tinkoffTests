//variables
// 1
{
    let admin,
    name

    name = 'Джон';
    admin = name;
    alert(admin);
}

//2
    let Earth;
    let currentUser;

//typyof
{
    let name = "Ilya";

    alert( `hello ${1}` ); // 1

    alert( `hello ${"name"}` ); // name

    alert( `hello ${name}` ); // Ilya
}

//operators
//1
{
    let a = 1, b = 1;

    let c = ++a; // 2
    let d = b++; // 1
}
//2
{
    let a = 2;

    let x = 1 + (a *= 2); //a = 4, x = 5
}
//3
{
    5 > 4 // true
    "ананас" > "яблоко" // false
    "2" > "12" // true
    undefined == null // true
    undefined === null //false
    null == "\n0\n" //false
    null === +"\n0\n" //false
}

//ifelse

//1
if ("0") {
    alert( 'Привет' );
}

//выведется

//2
{
    let value = prompt('Какое "официальное" название JavaScript?', '');

    if (value == 'ECMAScript') {
        alert('Правильно!');
    } else {
        alert('you do not know ECMAScript!');
    }
}

//3
{
    let value = prompt('enter any number', '');

    if(+value > 0) console.log(1);
    else if(+value < 0) console.log(-1)
    else console.log(0);
}

//4
let result = a + b < 4 ?  'мало' : 'много';

//5

{
    let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';
}

//switch
//1
{
    if(browser == 'Edge') {
        alert("You've got the Edge!");
      } else if (browser == 'Chrome'
       || browser == 'Firefox'
       || browser == 'Safari'
       || browser == 'Opera') {
        alert( 'Okay we support these browsers too' );
      } else {
        alert( 'We hope that this page looks ok!' );
      }
}
//2

{
    const number = +prompt('Введите число между 0 и 3', 0)
    
    switch(number) {
        case 0:
            alert('Вы ввели число 0');
            break;

        case 1:
            alert('Вы ввели число 1');
            break;

        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
            break;
    }
}

//array
//1
{
    let fruits = ["Яблоки", "Груша", "Апельсин"];

    // добавляем новое значение в "копию"
    let shoppingCart = fruits;
    shoppingCart.push("Банан");

    // что в fruits?
    alert( fruits.length ); // 4
}

//2
{
    const styles = ['Джаз', 'Блюз'];

    styles.push('Рок-н-ролл');
    styles.splice(1,1,'Классика');
    styles.shift();
    styles.unshift('Рэп','Регги');
}
//3
{
    let arr = ["a", "b"];

    arr.push(function() {
        alert( this );
    })

    arr[2](); // function(){alert(this)};
}
//4 
{
    function sumInput() {
        let numbers = [];

        while (true) {

        let number = prompt("Введите число", 0);

        if (number === '' || number === null || isNaN(number)) break;

        numbers.push(+number);
        }

        let sum;

        numbers.forEach(number => {
            number += sum;
        });

        return sum;
    }
    alert( sumInput() );
}
//5
{
    function getMaxSubSum(arr) {
        let maxSum = 0;
        
        for (let i = 0; i < arr.length; i++) {
            let sumFixedStart = 0;
            for (let j = i; j < arr.length; j++) {
                sumFixedStart += arr[j];
                maxSum = Math.max(maxSum, sumFixedStart);
            }
        }
        
        return maxSum;
    }
    getMaxSubSum([1, -2, 3, 4, -9, 6]);
}

//array-methods
//1
{
    function camelize(str) {
        const arr = str.split('');
        return arr.filter(item => item !== '-').join('');
    }
    camelize('list-style-image');
}
//2
{   
    const arr = [5, 3, 8, 1];

    function filterRange(arr, a, b) {
       return arr.filter(number => (number >= a && number <= b)); 
    }

    console.log(filterRange(arr, 1, 4));
    console.log(arr);
}
//3
{
    const arr = [5, 3, 8, 1];

    function filterRangeInPlace(arr, a, b) {
        arr.forEach((number, index )=> {
            if(!(number >= a && number <= b)) arr.splice(index, 1);
        });
        return arr;
    }

    console.log(filterRangeInPlace(arr, 1, 4));
    console.log(arr);
}
//4

{
    function copySorted(arr) {
        const array = [...arr];

        return array.sort();
    }
    console.log(copySorted(["HTML", "JavaScript", "CSS"]));
}

//5

{
    function Calculator() {
        this.listners = [];
    }

    Calculator.prototype.calculate = function(str) {
        const arr = str.split(' ');
        let result;

        if(arr[1] === '+') return Number(arr[0]) + Number(arr[2]);
        else if(arr[1] === '-') return Number(arr[0]) - Number(arr[2]);

        this.listners.forEach(obj => {
            if(obj.eventname === arr[1]) {
                result = obj.f( Number(arr[0]), Number(arr[2]));
            };
        })
        return result;
    }
    
    Calculator.prototype.addMethod = function(name, func) {
        this.listners.push({eventname: name, f: func});
    }

    const obj = new Calculator;

    obj.addMethod("*", (a, b) => a * b);
    console.log(obj.calculate("3 + 7"));
    console.log(obj.calculate("2 * 2"));
}
//6
{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

   let names = users.map(user => user.name);
   console.log(names);
}

//7 
{
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map(user => {
        return {
            id: user.id,
            fullName: `${user.name} ${user.surname}`
        }
    });

    console.log(usersMapped);
}

//8

{
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

    function sortByAge(users) {
        users.sort((a, b) => a.age > b.age ? 1 : -1);
    };

    sortByAge(arr);
}
//9
{
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    } 

    console.log(shuffle([1, 2, 3]));
}
//10
{   
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [ vasya, petya, masha ];

    function getAverageAge(users) {
        // (25 + 30 + 29) / 3 = 28

        let sum = 0;

        users.forEach(user => sum += user.age);

       return sum / users.length;
    }

    console.log(getAverageAge(arr));    
}
//11
{   
    let strings = ["кришна", "кришна", "харе", "харе", ":-O"];

    function unique(arr) {
        const sortedArray = [];
        let sameElement;

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === arr[i + 1]) {
                sameElement = arr[i];
            }
            if(sameElement !== arr[i]) {
                sortedArray.push(arr[i]);
            }
        }

        return sortedArray;
    }

    console.log(unique(strings));
}

//while-for

//1
{ 
    // 3, 2, 1
}

//2
{
    // разные знчения
}

//3 
{
    //одинаковые значения
}
//4

{
    for(let i = 0; i < 10; i++) {
        if(i % 2 === 0) console.log(i);
    }
}
//5
{
    let i = 3;

    while(i) {
        i--;
        console.log( `number ${i}!` );
    }
}
//6
{
    let number;

    do {
        number = prompt("enter number < 100", 0);
    } 
    while (number <= 100 && number);
}
//7
{
    function isPrime(num) {
        let prime = num != 1;

        for(let i = 2; i < num; i++) {
            if(num % i == 0) {
                return prime = false;
            }
        }
        return prime;
    }
    
    for(i = 0; i < 10; i++) {
        if(isPrime(i)) console.log(i);
    }
}