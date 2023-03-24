let test;

test = typeof(test) == 'undefined' ? "초기화_1" : test ;   // 조건식이 참일 경우 두번째 항이 저장
console.log(test);

test = 617;
console.log(typeof(test) == 'undefined' ? "초기화_2" : test);   // 조건식이 거짓일 경우 세번째 항이 저장