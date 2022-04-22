// object/basic.js

const member = {
  memberId: 'user1',
  memberName: 'Hong',
  getMemberName: function () {
    return `회원이름은: ${this.memberName}`;
  },
  setMemberName: function (name) {
    this.memberName = name;
  }
}

console.log(member.memberId);
member.setMemberName('Hwang');
console.log(member.getMemberName());
member.memberAge = 20;
delete member.memberAge;
member['memberPoint'] = 1000;
member.grade = function () {
  if(this.memberPoint > 500) {
    return 'gold'
  } else if (this.memberPoint > 1000) {
    return 'platinum'
  }
}
console.log(member.grade());

// 클래스, Construct 함수 => object를 생성할 수 있는 방법
class Student {
  constructor(sno, sname) {
    this.sno = sno;
    this.sname = sname;
  }
  // 메소드처럼 보이지만 메소드가 아니기때문에 값을 지정하고 싶으면 s1.mathScore = 90;과 같이 값을 선언해주어야함
  set mathScore(score) {
    this. _mathScore = score;
  }
  // this.mathScore라고 해버리면 set에 값을 담는 게 아니라 다시 mathScore를 호출해버림.
  // 따라서 다른 이름을 지정하여 _mathScore와 같은 식으로 값을 담아줘야함
  get mathScore() { // _mathScore를 호출하기 위한 get (메소드x)
    return this._mathScore; // _mathScore의 속성값을 읽어오겠음
  }
  // ------------------
  getSno() { // get메소드
    return this.sno;
  }
  setSno(sno) {
    this.sno = sno;
  }
}

const s1 = new Student('1111', 'Hong');
const s2 = new Student('2222', 'Hwang');
console.log('학생번호 ' + s1.getSno());
s1.engScore = 80;
s1.mathScore = 90;
console.log('영어점수 ' + s1.engScore);
console.log('수학점수 ' + s1.mathScore); // mathScore라는 get을 호출하겠다

function Person(ssn, sname) { // 따로 생성자x, 이거 자체가 생성자 호출
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function() {
    return `주민번호 ${this.ssn}, 이름 ${this.sname}`;
  }
}
const p1 = new Person('951111-1111111', 'Hong');
const p2 = new Person('971111-2222222', 'Hwang');
const p3 = new Person('111111-3333333', 'park');
console.log(p1.getInfo());
