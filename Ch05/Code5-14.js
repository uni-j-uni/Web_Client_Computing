function callTenTimes(callback)
{
    for (let i = 0; i < 10; i++)   // 10회 반복
        callback();   // 매개 변수로 전달된 함수 호출
}
// 함수 호출
callTenTimes(function()
{
    console.log('함수 호출');
})