let age = 50;
age = 22;
// console.log(age);

const result = 4.92;
// console.log(result);

// practice: 2
const user = {
    name: 'Al Amin Miah',
    location: 'Uttara'
};

const templateString = `My current age is ${age}
My HSC result is ${result}
User name is ${user.name}
User location is ${user.location}`;

// console.log(templateString);

// practice: 3.1
const multiply = (number) => number * 5;
// console.log(multiply(5));

// practice: 3.2
const add = (n1, n2) => n1 + 2 + n2 + 2;
// console.log(add(1, 1));

// practice: 3.3
const threeParameters = (num1, num2, num3) => num1 * num2 * num3;
// console.log(threeParameters(4, 2, 3));

// practice: 3.4
const sumMultiply = (num1, num2) => {
    const sum1 = num1 + 2;
    const sum2 = num2 + 2;
    const add = sum1 + sum2;
    const total = add * add;
    return total;
}
// console.log(sumMultiply(3, 3));

// practice: 5
const friendsAge = [19, 20, 21, 22, 23, 24, 25];
const finalResult = friendsAge.map(number => number * 5);
// console.log(finalResult);

// practice: 6
const manyNumbers = [40, 15, 24, 9, 12, 11, 45, 80, 25];
const filterNumber = manyNumbers.filter(number => number % 2 === 1);
// console.log(filterNumber);

// practice: 7
const data = [
    { id: 1, name: 'airbud', price: 25000 },
    { id: 2, name: 'phone', price: 80000 },
    { id: 3, name: 'watch', price: 40000 },
    { id: 4, name: 'cover', price: 5000 }
];
const dataResult = data.find(x => x.price < 10000);
// console.log(dataResult);

// practice: 7.5
// what does map(), forEach(), filter() and find()

// practice: 4
// function declaration vs arrow function (google search)

// practice: 4.5
// difference between var, let and const

// practice: 8
const info = {
    name: 'Al Amin Miah',
    age: 22,
    phone: '01314993374',
    class: 'BBA first year',
    institute: 'North South University',
    location: 'Uttara'
};
const { name, phone } = info;
// console.log(phone);

// practice: 9
const [, , three] = data;
// console.log(three);

// practice: 10
function multiParameters(a, b, c = 7) {
    return a + b + c;
}
// console.log(multiParameters(0, 0));

// practice: 10
const nestedObject = {
    name: 'Al Amin Miah',
    age: 22,
    address: {
        house: 45,
        road: 15,
        sector: 12,
        area: 'uttara'
    },
    class: 'BBA first year',
    institute: [
        { name: 'North South University' },
        { address: '57/A, Isa Kha road' },
        { area: 'Bashundhara' }
    ]
};
const address = nestedObject.addres?.sector;
// console.log(address);