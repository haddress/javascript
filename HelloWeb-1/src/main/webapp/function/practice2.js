// practice2.js

const num1 = 10; // 기본타입
// person1와 같은 참조타입 형태의 변수를 자바에서는 인스턴스로 불렀었음..
const person1 = { // {}를 object 타입이라고 부름, 자바에서 말하는 class 역할. 기능을 더 넣을 수 있음. Showinfo로 함수(fucntion)도 볼 수 있음
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Park',
  age: 25,
  height: 165.3
}

// const person4 = person1;
// person1.fullName = 'Hwang';
// console.log(person1.fullName)
// console.log(person4.fullName)

const persons = [person1, person2, person3]; // 자바에서는 배열을 {}로 담았지만 js에서 {}는 오브젝트

let avgAge = 0;
let sum = 0;
for (let person of persons) {
  sum += person.age;
}
avgAge = sum / persons.length;
console.log(`평균나이: ${avgAge}`);
console.clear();

let avgAgeFnc = function (val) {
  sum += val.age;
};
let avgHeightFnc = function (val) {
  sum += val.height;
}
sum = 0;
persons.forEach(avgHeightFnc); // forEach는 ()에 들어있는 변수를 반복, 변수에 들어있는 함수의 갯수에 따라 변화
avgAge = sum / persons.length;
console.log(`평균키: ${avgAge}`);
console.clear();

let tag = "";
// 이름, 나이, 키
// 이름, 나이, 키
// 이름, 나이, 키
let allPerson = function (val, idx) {
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if (idx == persons.length - 1) {
    tag += '</ul>';
  }
};
let over170 = function (val, idx) { // 
  if (idx == 0) {
    tag += '<ul>';
  }
  if (val.height >= 170)
    tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if (idx == persons.length - 1) {
    tag += '</ul>';
  }
}
persons.forEach(function (val, idx) { // forEach 함수에는 매개값이 콜백함수가 오는데, 콜백함수에는 매개값을 3개를 가지도록 이미 정해져있음.
  // 첫번째는 배열에 담겨져있는 값, 두번째는 인덱스 값(배열 몇번째 칸인지), 세번째는 배열 그 자체
  if (idx == 0) {
    tag += '<ul>';
  }
  if (val.height >= 170)
    tag += `<li> ${val.fullName}, ${val.age}, ${val.height} </li>`;
  if (idx == persons.length - 1) {
    tag += '</ul>';
  }
});
console.log(tag);
document.write(tag);