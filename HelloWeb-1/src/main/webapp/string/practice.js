// string/practice.js

let str1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi perspiciatis, suscipit et unde repudiandae atque dignissimos voluptate impedit dicta tempora facere reprehenderit nemo dolor aliquid culpa deserunt enim adipisci! Harum!';
// 단어의 길이가 10개 이상인 값을 골라내서 console에 출력할 수 있는 코드 만들기

console.log('hello'.length);

result = str1.split(' ').filter(el => el.length >= 10).join('/');
console.log(result);

// for(i=0; i<result.length; i++) {
//   if(result[i].length>9) {
//     console.log(result[i]);
//   }
// }
