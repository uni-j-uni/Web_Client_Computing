let output = '';   // output의 초기화

for (let i = 0; i < 10; i++)
{
    for (let j = 0; j < 10 - i; j++)   // 10 - i만큼 공백 출력
        output += ' ';
    for (let j = 0; j < i + 1; j++)   // i + 1만큼 별 출력
        output += '*';
    output += '\n';
}
console.log(output);