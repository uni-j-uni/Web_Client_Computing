let score = [ 85, 75, 99, 90, 100 ], min = score[0], n;

for (let i = 1; i <= 5; i++)
{
    if (score[i - 1] < min)
    {
        min = score[i - 1];
        n = i;
    }
}
console.log(`꼴등(${score.length}등)은 ${n}번 학생이며, ${min}점 입니다.`);