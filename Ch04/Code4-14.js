let i = 0;
let array = [1, 31, 273, 57, 8, 11, 32];
let output;

while (true)
{
    if (array[i] % 2 == 0)   // 배열의 요소가 짝수일 경우
    {
        output = array[i];   // output에 요소값 저장 후 반복문 종료
        break;
    }
    i += 1;
}
console.log(`처음 발견한 짝수는 ${output}입니다.`);
