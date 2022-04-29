/**
 * ajax.js 
 */

// 비동기

let val = 10;

setTimeout(function() { // 1초 이후에 function에 정의된 코드를 읽겠다
	val += 5;
	console.log('hello -> ' + val);

	setTimeout(function() {
		val += 3;
		console.log('hello2 -> ' + val);

		setTimeout(function() {
			val += 4;
			console.log('hello3 -> ' + val);
		}, 1000);

	}, 1000);

}, 2000);

let sussess = false;
let promise = new Promise(function(resolve, reject) {
	if (success) {
		resolve('success'); // 정상적으로 실행되면 첫번째 매개값의 함수 실행문 resolve 실행
	} else {
		reject('error'); // 비정상적일경우 두번째 매개값의 함수 실행문 reject 실행
	}
});

promise.then(function(result) {
	console.log(result);
}) // 네트워크나 서버 요청이 정상적으로 실행되면 promise.then 객체 실행
	.then(function(result) {
		console.log(result);
	})
	.then(function(result) {
		console.log(result);
	})
	.catch(function(err) { // 그렇지 않을 경우(에러 날 경우)]) .catch
		console.log(err);
	});









