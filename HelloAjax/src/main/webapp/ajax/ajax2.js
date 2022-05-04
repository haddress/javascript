/**
 * ajax2.js 
 */

let val = 6;
let promise = new Promise((resolve, reject) => {
	val -= 1;
	if (val > 0) {
		resolve('success, ' + val); // 성공했을때 실행하는 함수
	} else {
		reject('errer');
	}
});

//promise.then('resolve'' => {
//	return new Promise((resolve, reject) {
//		val -= 2;
//		if(val > 0) {
//		resolve('succes, ' + val);
//	} else {
//		reject('error');
//	}
//});
//	});
//	.then()
//	.catch ();