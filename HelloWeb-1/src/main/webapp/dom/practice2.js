// dom/practice2.js

document.addEventListener('DOMContentLoaded', function () {
  let div = document.createElement('div');
  let spanName = document.createElement('span');
  spanName.setAttribute('id', 'name'); // attribute노드는 id, value값은 name
  // span.innerHTML = '홍길동'; 
  let name = document.createTextNode('홍길동');
  spanName.appendChild(name); // <span>홍길동</span> -> span태그의 자식인 텍스트노드 '홍길동'

  let spanAge = document.createElement('span');
  spanAge.setAttribute('class', 'age'); // attribute노드는 class
  // spanAge.innerHTML = '20살';
  let age = document.createTextNode('20살');
  spanAge.appendChild(age);

  let hypen = document.createTextNode(' - '); // textnode 사용해서 문자 입력 가능

  div.appendChild(spanName);
  div.appendChild(hypen);
  div.appendChild(spanAge);

  let divShow = document.getElementById('show').appendChild(div);
});
