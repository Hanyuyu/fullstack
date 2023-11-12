// Variables
console.log('-----------Variables------------')
const x = 1;
let y = 5;

console.log(x, y);
y += 10;
y = 'sometext';
console.log(x, y);
// console.log('--------------------------------')

// Arrays
console.log('-------------Arrays-------------')
const t = [1, -1, 3];
t.push(5); // 会改变数组
console.log(t);
t.forEach(value => {
    console.log(value);
})
// 使用 contact 不会改变原数组
const t2 = t.concat(6);
console.log(`t = ${t}`);
console.log(`t2 = ${t2}`);

const m1 = t2.map(value => value * 2);
console.log(m1);
const m2 = t2.map(value => '<li>' + value + '</li>');
console.log(m2);

// 解构赋值 这个感觉很牛逼
const tt = [1,2,3,4,5];
const [first, second, ...rest] = t;
const [aa,bb] = t;
console.log(first, second);
console.log(rest);
console.log(aa, bb);

// Objects
console.log('-------------Objects-------------')
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}
const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}
const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

object1['secret number'] = 12341;
console.log(object1['secret number']);
console.log(`object1 = ${object1}`);

console.log('-------------Functions-------------')
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}
const result = sum(1, 5)
console.log(result)
// const square = p => {
//     console.log(p)
//     return p * p
// }
const square = p => p * p
const ttt = [1, 2, 3]
const tSquared = t.map(p => square(p))
// tSquared is now [1, 4, 9]
console.log('--------------------------------')
