//1
function reverseNumber(number) {
    const numbersArr = number.toString().split('');
    return Number(numbersArr.reverse().join(''));
}
console.log(reverseNumber(32243));

//2
function checkPalindrome(string) {
    let isFlag = true;

    const array = string.split('');
    const reversedArr = array.reduceRight((acc, item) => {
        acc.push(item);
        return acc;
    }, [])
   
    reversedArr.forEach((item, index) => {
        if(item !== array[index]) isFlag = false;
    });

    return isFlag;
}

console.log(checkPalindrome('топот'));
console.log(checkPalindrome('машина'));

//3

function getString(string) {
    const arr = string.split('');
    let str = '',
    index = 0,
    i = 0

    while(i < arr.length) {
        str += arr[i];
        console.log(str);
        i++;
        if(i === arr.length) {
            index++;
            i = index;
            str = '';
        }
    } 
}

getString('dog');
//4

function sortStr(string) {
    const arr = string.split('');

    return arr.sort().join('');

}

console.log(sortStr('webmaster'));

//5

function changeStr(str) {
    const arr = str.split('');
    arr.forEach((item, i) => {
        arr.splice(0, 1,  arr[0].toUpperCase());
        if(item === " ") {
            arr.splice(i + 1, 1,  arr[i + 1].toUpperCase())
        }
    });
    return arr;
}

console.log(changeStr('brown fox'));

//6

function getLongestWord(string) {
    const arr = string.split(' ');
    let size = '';

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > size.length) {
            size = arr[i];
        }
    }
    return size;
}

console.log(getLongestWord('Web Development Tutorial'));

//7

function countVowels(string) {
    const arr = string.split('');
    let vs = "aeiouAEIOU";

    let result = arr.reduce((acc, item) => {
        if(vs.indexOf(item) !== -1) {
            acc++;
        };

        return acc;
    }, 0);

    return result;
};

console.log(countVowels('The quick brownfox'));

//8
function isPrime(num) {
    if(num === 1) return;

    for(let i = 2; i < num; i++) {
        if(num % i === 0) return prime = false;
    }
    return true;
}

console.log(isPrime(11));
//9

function getType(value) {
    return typeof value;
}

console.log(
    getType(123),
    getType(() => {}),
    getType(undefined),
    getType('something'),
    getType(true),
    getType({})
);

//13
function factorial(n){
    if (n==1) return 1;
    else return n * factorial(n-1);		
}

console.log(factorial(3));


