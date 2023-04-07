let score = [ 85, 75, 99, 90, 100 ];

for (let i = 1; i <= 5; i++)
{
    if (score[i - 1] >= 90)
        grade = 'A';
    else if (score[i - 1] >= 80)
        grade = 'B';
    else if (score[i - 1] >= 70)
        grade = 'C';
    else
        grade = 'F';
    
    console.log(`${i}번 학생의 점수 : ${score[i - 1]}, 성적 : ${grade}`);
}