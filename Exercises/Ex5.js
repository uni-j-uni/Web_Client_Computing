let score = [ 85, 75, 99, 90, 100 ], max = score[0], n;

for (let i = 1; i <= 5; i++)
{
    if (score[i - 1] > max)
    {
        max = score[i - 1];
        n = i;
    }
}
console.log(`1등은 ${n}번 학생이며, ${max}점 입니다.`);