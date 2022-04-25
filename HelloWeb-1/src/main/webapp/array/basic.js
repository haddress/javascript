// array/basic.js

// 배열선언 : [], new Array();
let arr = [1, 2];
let newAry = [3, 4, 5, 6];

// 추가
// unshift: 첫번째 위치에 추가, push: 마지막 위치에 추가
arr.push(3);
arr.unshift(0);

// 제거
// shift: 앞에서부터 제거, pop: 마지막위치부터 제거
arr.pop();
arr.shift();

// forEach
newAry.forEach(function (elem) {
  arr.unshift(elem)
});

arr.pop(); // 6, 5, 4, 3, 1
arr.pop(); // 6, 5, 4, 3
arr.shift(); // 5, 4, 3

// splice(위치, 크기, 대체값) : 추가, 수정, 삭제
// arr.splice(1, 1, 8, 9);

newAry.forEach(function (elem) {
  // arr.splice(1, 0, elem); // 현재 5,4,3이 남아있을 때 두번째위치를 0으로 잡고 elem으로 대체 -> 5, 6, 5, 4, 3, 4, 3
  arr.splice(1, 1, elem); // 5, 6, 3
});

let names = [];
let anonym = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nisi eius libero harum exercitationem quam ratione quibusdam molestias pariatur, vero deserunt minima maxime accusantium expedita quasi, quisquam alias cupiditate perspiciatis.';
anonym.split(' ').forEach(function (elem) {
  names.push(elem);
});
console.log(names.toString()); // toString->콤마(,)형태로 보여줌
console.log(names); // 배열, 배열,...

// forEach() : 반환x
// map() : 각 요소 => mapping작업 (다른 형태 반환)
// filter() : return 조건을 만족하는 값만 반환
// let result = names.map(function (elem) {
//   return elem.toUpperCase();
// }); // 새로운 형태의 배열을 만듦
let result = names.map(function (elem) {
  let res = elem.toUpperCase();
  return res;
});

result = result.filter(function (elem) {
  return elem.length >= 10;
});

// result = names //
//   .map(elem => elem.toUpperCase())
//   .filter(elem => elem.length >= 10); // chain rules
// console.log(result);

result = names //
  .map(elem => {
    let res = elem.toUpperCase();
    return res;
  })
  .filter(elem => elem.length >= 10); // chain rules
console.log(result);