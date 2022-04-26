// dom/practice3.js

let data = [{
  id: 101,
  name: '홍길동',
  age: 20
}, {
  id: 102,
  name: '김길동',
  age: 22
}];

document.addEventListener('DOMContentLoaded', callbackFnc);

function callbackFnc() {
  console.log(window);
  window.document.children[0]/*html*/.children[1]/*body*/.children[0]/*<h3>*/.innerHTML = '요기요';
  let h3 = window.document.children[0].children[1].children[0];
  let newH3 = document.createElement('h3');
  newH3.innerHTML = '여기요';
  h3.parentElement.appendChild(newH3);
  
  // table 생성
  let table = document.createElement('table');
  table.setAttribute('border', 1);

  // makeHead() 함수 호출
  let thead = makeHead(); // 만들어놓은 function makeHead() 사용
  table.appendChild(thead); // <table><thead>

  // makeBody() 함수 호출
  let tbody = makeBody(data); // object의 배열[{}, {}, ..]이 매개값으로 들어옴
  table.appendChild(tbody); // <table><tbody>

  // 출력
  document.getElementById('show').appendChild(table);

  // 추가 버튼을 누르면 행이 생성되도록 하는 이벤트
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    let obj = {};
    let userName = document.getElementById('userName').value;
    obj.name = userName;
    let userAge = document.getElementById('userAge').value;
    obj.age = userAge;
    let userId = document.getElementById('userId').value;
    obj.id = userId;

    document.querySelector('table>tbody').appendChild(makeTr(obj));
  })
  // {김민수, 25}라는 새 행(tr) 추가
  let newObj = {id:103, name:'김민수', age:'25'};
  document.querySelector('table>tbody').appendChild(makeTr(newObj));
}

function makeHead() {
  // thead
  let thead = document.createElement('thead');
  
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  let text = document.createTextNode('이름');
  tr.appendChild(th);
  th.appendChild(text);
  
  th = document.createElement('th')
  text = document.createTextNode('나이');
  tr.appendChild(th);
  th.appendChild(text);

  th = document.createElement('th')
  text = document.createTextNode('기능');
  tr.appendChild(th);
  th.appendChild(text);
  
  thead.appendChild(tr);

  return thead;
}

function makeTr(obj) { // tr기능

  let fields = ['name', 'age'];

  // 첫번째 라인
  tr = document.createElement('tr');
  tr.setAttribute('id', obj.id);

  // name, age 필드 => 필드의 갯수만큼 td 생성해주기 위함
  fields.forEach(function(field) { // 적절한 function의 매개변수값 가져오기(임의로)
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field] + `${field=='age'?'살':''}`);
    td.appendChild(text);
    tr.appendChild(td);
  });
  let btn = document.createElement('button'); // <button>삭제</button>
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (evnt) {
    // evnt.target.parentElement.parentElement.remove(); // 이벤트evnt가 발생하는 대상=target, 이 기능의 부모기능을 삭제
    console.log(this); // event.target
    this.parentElement.parentElement.remove(); // 
  });
  let td = document.createElement('td');
  td.appendChild(btn);
  tr.appendChild(td);

  // td = document.createElement('td');
  // text = document.createTextNode(obj.age + '살');
  // td.appendChild(text);
  // tr.appendChild(td);
  return tr;
}

function deleteCallBack() {
  // evnt.target.parentElement.parentElement.remove(); // 이벤트evnt가 발생하는 대상=target, 이 기능의 부모기능을 삭제
  console.log(this); // event.target
   // this.parentElement.parentElement.remove(); // 
}

function makeBody(objAry) {
  // [{name, age}, {}, {}, {} ...]
  // tbody
  let tbody = document.createElement('tbody');

  objAry.forEach(function (obj) { // 배열에 forEach사용해서 배열에 정의된 값이 배열에 들어있는 갯수만큼 출력될 수 있도록
    // obj => {name:'', age: }의 형식
    tbody.appendChild(makeTr(obj)); // 만들어놓은 tr기능이 tbody의 자식으로 오도록
  });

  return tbody;

  // // 첫번째 라인
  // tr = document.createElement('tr');
  // tr.setAttribute('id', 101);
  // let td = document.createElement('td');
  // text = document.createTextNode('홍길동')
  // td.appendChild(text);
  // tr.appendChild(td);

  // td = document.createElement('td');
  // text = document.createTextNode('20살');
  // td.appendChild(text);
  // tr.appendChild(td);

  // tbody.appendChild(tr);

  // // 두번째 라인
  // tr = document.createElement('tr');
  // tr.setAttribute('id', 102);
  // td = document.createElement('td');
  // text = document.createTextNode('김길동')
  // td.appendChild(text);
  // tr.appendChild(td);

  // td = document.createElement('td');
  // text = document.createTextNode('22살');
  // td.appendChild(text);
  // tr.appendChild(td);

  // tbody.appendChild(tr);

  // return tbody;
}