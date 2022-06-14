window.addEventListener("load", function() { // script를 head에 둘 경우, 페이지가 먼저 로드되어야 스크립트파일을 가져올 수 있음
  var txt = $("h1").text(); // 모든 태그의 내용을 조회 가능. val()는 첫번째 태그만 조회
  $("h1").text('변경됨').css('backgroundColor', 'yellow') // 묵시적 반복. 모든 태그에 적용
})
//$("h1").text('변경됨')

