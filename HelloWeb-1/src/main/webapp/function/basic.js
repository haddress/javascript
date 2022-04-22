// function/basic.js
// (1) 함수선언식으로 정의
function sum(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}
// => let sum = function(num1, num2) { ... }
//    따라서 밑에 sum 변수를 선언할 경우, 똑같은 변수가 두 번 선언된 것이므로 에러가 뜰 수 있음

let result = sum(10, 20, 30);
console.log('결과는 ' + result);

// (2) 함수표현식으로 정의
let myfnc = (val1, val2) => { // function은 object 타입이므로 myfnc가 갖고있음
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc)
result = myfnc(10, 20);
console.log(result);

let mysum = myfnc; // myfnc를 mysum이 참조할 경우, 결국 mysum=function
result = mysum(20, 30);
console.log(result);

const person = { // object 타입
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person1 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person2 = {
  fullName: 'Park',
  age: 25,
  height: 165.3
}
// 함수표현식 myinfo. 만들기
let myinfo = function (obj) { // return구문을 가진 함수
  var info = `${obj.fullName}이고 ${obj.age}살이고 키는 ${obj.height}입니다.`; // 함수 안에서 변수선언은 var
  return info;
}

result = myinfo(person);
console.log(result);

// 배열을 활용, 출력
const persons = [person, person1, person2];
for(let person of persons){ // 여기에 있는 person은 persons의 각각의 값을 받아오기 위한 별개의 변수 
  let result = myinfo(person); // myinfo라는 함수를 이용하여 결과값을 info형식으로 결과값을 받아올 수 있도록
  console.log(result);
}

console.clear(); // 콘솔에 있는 내용 지우기
// 자바스크립트에서 문자열, 숫자, boolean타입, 배열 등도 매개값으로 사용 가능
// 함수 또한 매개변수로 사용할 수 있음
persons.forEach(function(val, ind, ary) { // forEach는 배열에 들어있는 갯수만큼 여기에 정의된 함수(=function())의 기능을 실행하십시오
  // console.log(val, ind, ary);
  console.log(myinfo(val));
});

console.log('----------------')

// let funcParam = function(val, ind, ary) { // 메소드의 매개값으로 활용되는 함수 => 콜백함수
//   console.log(myinfo(val));
// };
// persons.forEach(funcParam);

// console.log('----------------')

let funcParam = (val, ind, ary) => { // 화살표 함수
  console.log(myinfo(val));
};
persons.forEach(funcParam);



