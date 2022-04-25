// dom/basic.js

let h3Tag = document.getElementsByTagName('h3');
console.log(h3Tag); // HTMLCollection[] 이라고 뜨면서 값을 가져오지 못함.
// document영역의 h3태그를 가져오겠다고 하였으나, 태그를 위에서부터 차례대로 읽어오므로 h3의 태그정보를 가져오지 못함
// document -> body영역

console.log('1');


// DOM : 생성, 속성, 삭제, 부모-자식 관계
// addEcentListener('이벤트이름', '실행할 이벤트 핸들러->실행코드')
document.addEventListener('DOMContentLoaded', function () { // DOMContentLoaded -> 페이지의 코드를 다 읽어들인 이후에 실행하도록
  console.log('2');
  // getElements 메소드가 요소를 가져옴
  let h3Tag = document.getElementsByTagName('h3');
  console.log(h3Tag);
  h3Tag[1].innerHTML = 'content changed.'; // 복수값이므로 인덱스로 값을 가져와야 함

  let first = document.getElementById('first'); // element.
  console.log(first);
  first.innerHTML = 'Git Changed';

  let second = document.getElementsByClassName('first');
  second[0].innerHTML = '사과';

  // CSS의 선택자 h3 > div
  let list = document.querySelectorAll('ul>li');
  console.log(list);
  list[1].style.backgroundColor = 'yellow';

  // DOM 생성
  let newList = document.createElement('li'); // <li>Mango</li>
  newList.innerHTML = 'Mango';

  console.log(newList);

  // ul 하위요소 <li>Mango</li>
  let ulTag = document.querySelector('ul');
  ulTag.appendChild(newList);

}); // 마우스 클릭, 입력 등의 것들이 event에 해당. 어떤 이벤트가 발생하는지 듣고 있는 메소드를 실행

console.log('3'); // 원래면 1,2,3순서로 출력되어야하나 DOMContentLoaded 때문에 1,3,2 순서로 출력됨