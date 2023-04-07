let score = [ 85, 75, 99, 90, 100 ];

for (let i = 1; i <= 5; i++)
{
    switch (Math.floor(score[i - 1] / 10))
    {
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        default:
            grade = 'F';
    }
    console.log(`${i}번 학생의 점수 : ${score[i - 1]}, 성적 : ${grade}` );
}