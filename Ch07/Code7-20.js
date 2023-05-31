// 변수 선언
let now = new Date();
let before = new Date('January 9, 2002');

// 시간 간격
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

// 출력
console.log(`태어나고 ${interval}일 지났습니다.`);