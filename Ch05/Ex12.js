function power(x, n = 2)
{
    let output = 1;
    for (let i = 0; i < n; i++)
        output *= x;
    return output;
}
function multiply()
{
    // 시스템 매개변수 arguments 배열 사용
    let output = 1;
    for (let i = 0; i < arguments.length; i++)
        output *= arguments[i];
    return output;
}
// 함수 호출
console.log(power(2));
console.log(power(2, 3));
console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));d