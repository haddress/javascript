// string/practice2.js
let sso = ['970101-1234567', '970101 2234565', '9701013234567', '970101/423456'];

function checkGender(sso) {
  let gender = sso.replace(/\D/g, '').charAt(6);
  if (gender == 1 || gender == 3) {
    return '남자';
  } else if (gender == 2 || gender == 4) {
    return '여자';
  }
}

sso.forEach(function (s1) {
  let result = checkGender(s1);
  console.log(result);
})