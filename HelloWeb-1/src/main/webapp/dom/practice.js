// dom/practice.js

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('button'); // button태그 찾아오기
  btn.addEventListener('click', function () { // event와 event를 실행하면 발생할 코드(이벤트핸들러)를 입력
    // 입력값1, 입력값2
    let name = document.getElementById('userName').value;
    let age = document.getElementById('userAge').value;

    if(!name) {
      alert('이름을 입력하세요..');
      return;
    }
    if(!age) {
      alert('나이를 입력하세요..');
      return;
    }

    let span1 = document.createElement('span'); // <span>${name}</span>
    span1.innerHTML = name;
    let span2 = document.createElement('span'); // <span>${age}</span>
    span2.innerHTML = age;
    let div1 = document.createElement('div');
    div1.appendChild(span1); // <div>태그 하위에 <span></span> </div>
    div1.appendChild(span2); // <div><span></span><span></span></div>

    document.getElementById('show').appendChild(div1); // appendChild->하위에생성 / 화면출력
  });
})