// 배열 선언
let array = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 1500
}];

let popped = array.pop();   // 배열의 마지막 요소 삭제
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array);

array.push(popped);   // 배열의 마지막에 요소 삽입 1
array.push({          // 배열의 마지막에 요소 삽입 2
    name : '사과',
    price : 2000
});
console.log('- push() 메소드를 호출한 이후의 배열');
console.log(array);