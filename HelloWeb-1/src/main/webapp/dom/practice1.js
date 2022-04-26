// dom/practice1.js

document.addEventListener('DOMContentLoaded', function() {
  // let list1 = document.createElement('li');
  // list1.innerHTML = '아메리카노';

  // let list2 = document.createElement('li');
  // list2.innerHTML = '카페라떼';

  // let list3 = document.createElement('li');
  // list3.innerHTML = '레몬에이드';


  // let ulTag = document.createElement('ul');
  // ulTag.appendChild(list1);
  // ulTag.appendChild(list2);
  // ulTag.appendChild(list3);

  // document.getElementById('show').appendChild(ulTag);

  // <교수님 태그1>
  // let ulTag = document.createElement('ul'); // element node
  // // 아메리카노
  // let liTag = document.createElement('li');
  // liTag.innerHTML = '아이스아메리카노';
  // ulTag.appendChild(liTag);
  
  // liTag = document.createElement('li');
  // liTag.innerHTML = '카페라떼';
  // // 하위요소로 추가
  // ulTag.appendChild(liTag);
  
  // liTag = document.createElement('li');
  // liTag.innerHTML = '카페라떼';
  // ulTag.appendChild(liTag)
  
  // console.log(ulTag);
  
  // let divShow = document.getElementById('show')
  // divShow.appendChild(ulTag);

  // <교수님 태그2> -> 배열+for문으로 만들기
  let menus = ['아이스아메리카노', '카페라떼', '레몬에이드'];
  let ulTag = document.createElement('ul');
  // for (let i = 0; i<menus.length; i++) {
  //   // 배열 안에 있는 요소들 반복해서 li태그 차례대로 생성
  //   let liTag = document.createElement('li');
  //   liTag.innerHTML = menus[i];
  //   // 하위요소로 추가
  //   ulTag.appendChild(liTag);
  // }

  let divShow = document.getElementById('show');
  divShow.appendChild(ulTag); // 화면출력

  menus.forEach(function(val) {
    let liTag = document.createElement('li');
    liTag.innerHTML = val;
    ulTag.appendChild(liTag);
    
  })

})

