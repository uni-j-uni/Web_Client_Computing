// 1초마다 함수 실행
let id = setInterval(function()
{
    console.log("출력합니다.");
}, 1000);

// 3초 후에 함수 실행
setTimeout(function()
{
    clearInterval(id);   // 타이머를 제거합니다.
}, 3000);