//1
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
//   let counter = makeCounter();
//   let counter2 = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   alert( counter2() ); // ? 0
//   alert( counter2() ); // ? 1

//2
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
//   let counter = new Counter();
  
//   alert( counter.up() ); // ? 1
//   alert( counter.up() ); // ? 2
//   alert( counter.down() ); // ? 1

//3

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

// sayHi(); ошибка

//4

function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(2)(2));

//5

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function(item) {
        return item >= a && item <= b;
    };
}

function inArray(arr) {
    let i = 0;
    return function(item) {
        if(item === arr[i]) {
            i++;
            return true;
        }
    }
}

console.log(arr.filter(inArray([1, 2, 10])));

console.log(arr.filter(inBetween(3, 6)));
//6

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(target) {
    return function(a, b) {
        return a[target] > b[target] ? 1 : -1;
    }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

//7


function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 4) {
        let localI = i;
        let shooter = function() {
            console.log( localI ); 
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();
  
console.log(army[1]());