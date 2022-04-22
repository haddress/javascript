const person1 = { 
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

const persons = [person1, person2, person3];

const newPersons = persons.map(function(val, idx) { // map은 어떤 값을 리턴해주느냐에 따라 새로운 배열값을 담아줌

  let newObj = {}; // 아무필드없는 오브젝트{} 선언한 후(오브젝트 타입이라고 선언), 하나씩 값을 추가
  newObj.index = idx + 1; // 오브젝트의 속성(필드)을 추가
  newObj.fName = val.fullName;
  newObj.age = val.age;
  newObj.height = val.height;

  return newObj;
});
console.log(newPersons);

function tableList(personAry) {
  document.write('<table border=1>');
  for (let person of personAry) {
    document.write('<tr>');
    for(let field in person) {
      document.write(`<td>${person[field]}</td>`);
    }
    document.write('</tr>');
  }
  document.write('</tabel>')

}

tableList(newPersons);