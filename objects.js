//1
const user = {};

user.name = 'Jhon';
user.surName = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

//2

function isEmpty(obj) {
    for(key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(user));
//3

const users = {
    name: "John"
};
  
// это будет работать?
users.name = "Pete"; // да

//4

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function countSalaries(obj) {
    let sum = 0;

    for(key in obj) {
        sum += obj[key];
    }

    return sum;
}

console.log(countSalaries(salaries));

//5

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  

function multiplyNumeric(obj) {
    for(key in obj) {
        if(typeof obj[key] === "number") obj[key] *= 2;
    }
}
multiplyNumeric(menu);

console.log(menu);