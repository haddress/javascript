let data = [{
  studNo: 101,
  studName: '조수연',
  engScore: 90,
  korScore: 80
}, {
  studNo: 102,
  studName: '황진주',
  engScore: 88,
  korScore: 91
}, {
  studNo: 103,
  studName: '권가희',
  engScore: 92,
  korScore: 89
}, {
  studNo: 104,
  studName: '유해정',
  engScore: 92,
  korScore: 83
}];

// 초기화를 위한 작업
let list = document.getElementById('list'); // tbody에 있는 id값 list 가져오기
data.forEach(function (elem, idx, ary) { // elem -> 배열에 들어있는 각각의 값 element / idx ->  인덱스값 / ary -> 배열
  list.appendChild(makeTr(elem));
});


// 변경버튼 이벤트
let changeBtn = document.querySelector('input[type="button"]');
changeBtn.addEventListener('click', function (e) {
  // changeCallBack1(e);

  // 대상 찾아오도록
  let targetTr = document.querySelectorAll('#list>tr'); // querySelectorAll -> 해당하는 요소 다 선택
  console.log(targetTr);
  let sno = document.getElementById('sno').value;
  // let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  // let kor = document.getElementById('kor').value;

  targetTr.forEach(function(tr) {
    console.log(tr);
    if (tr.children[0].innerHTML == sno) {
      // tr.children[1].innerHTML = sname;
      tr.children[2].innerHTML = eng; // 영어점수 변경
      // tr.children[3].innerHTML = kor;
    }
  })
});

function changeCallBack1(e) {
  e.preventDefault(); // 기본기능 차단
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let eng = document.getElementById('eng').value;
  let kor = document.getElementById('kor').value;
  // console.log(sno);
  if (!(sno && sname && eng && kor)) { // 하나의 값이라도 없으면 alert가 뜨게 (||는 or)
    alert('필수값을 입력하세요');
    return;
  }

  let searchTr = document.getElementById(`s_${sno}`);
  searchTr.children[1].innerHTML = sname;
  searchTr.children[2].innerHTML = eng;
  searchTr.children[3].innerHTML = kor;

  // if(!sno) {
  //   alert('변경할 아이디를 입력하세요.');
  //   return;
  // } else if(!sname) {
  //   alert('변경할 이름을 입력하세요.');
  //   return;
  // } else if(!eng) {
  //   alert('변경할 영어점수를 입력하세요.');
  //   return;
  // } else if(!kor) {
  //   alert('변경할 국어점수를 입력하세요.');
  //   return;
  // }
}



// student 한 건 -> <tr><td>학번</td><td>학생이름</td><td>영어</td>.. 형식으로
function makeTr(student) { // student 필드가 갖고있는 값들을 반복해서 tr을 만들어줄 수 있도록 tr을 만드는 함수 형성
  let tr = document.createElement('tr'); // document로 만든 'tr'을 계속 쓰기위해 주소값을 주고싶어서 변수 tr지정
  tr.setAttribute('id', 's_' + student.studNo);
  tr.addEventListener('click', function (e) {
    // console.log(e.target); // 가장 하위요소 -> btn이 td, tr 하위에 있으므로 여러번 작용
    e.stopPropagation(); // 이벤트가 전파되는 것을 차단
    // console.log(this.children[1].innerHTML); // this만 있을 땐 btn, tr의 클릭 이벤트가 동시에 실행됨(tr자체를 의미). 하위요소부터 상위로
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('eng').value = this.children[2].innerHTML;
    document.getElementById('kor').value = this.children[3].innerHTML;
  }, false) // true -> 이벤트요소를 상위요소부터 하위요소로 가면서 찾아오겠다는 옵션 / false -> 디폴트값. 하위요소부터 상위요소로
  for (let field in student) { // student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field]; //
    tr.appendChild(td);
  }
  // 버튼 : 삭제
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (e) { // click을 하면 e값(event)이 매개값으로 처리
    e.stopPropagation();
    console.log(this);
    // e.target.parentElement.parentElement.remove();
  }, true)
  let td = document.createElement('td');
  tr.appendChild(td);
  td.appendChild(btn);

  return tr;
};