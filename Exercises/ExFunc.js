function arrSum(score)
{
    let sum = 0;
    for (let i in score)
        sum += score[i];

    return sum;
}
function arrAvg(score)
{
    let sum = 0;
    for (let i in score)
        sum += score[i];

    return sum / 5;
}
function arrGrade(score)
{
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
}
function arrMin(score)
{
    let min = score[0];
    for (let i = 1; i <= 5; i++)
    {
        if (score[i - 1] < min)
        {
            min = score[i - 1];
            n = i;
        }
    }
    return n;
}
function arrMax(score)
{
    let max = score[0];
    for (let i = 1; i <= 5; i++)
    {
        if (score[i - 1] > max)
        {
            max = score[i - 1];
            n = i;
        }
    }
    return n;
}
function arrGraph(score)
{
    for (let i = 0; i < 5; i++)
        console.log(`${score[i]}점 : ${"■".repeat(score[i])}`);
}

let score = [85, 75, 99, 90, 100];
console.log("문제 1 - 배열 원소의 합 : " + arrSum(score));
console.log("문제 2 - 배열 원소의 평균 : " + arrAvg(score));
console.log("문제 3 - 학생들의 성적 : ");   arrGrade(score);
console.log(`문제 4 - 꼴등(${score.length}등)은 ${Number(arrMin(score))}번 학생이며, ${score[(arrMin(score)) - 1]}점 입니다.`);
let min = arrMin(score);
console.log(`문제 4 - 꼴등(${score.length}등)은 ${Number(min)}번 학생이며, ${score[min - 1]}점 입니다.`);
console.log(`문제 5 - 1등은 ${Number(arrMax(score))}번 학생이며, ${score[(arrMax(score)) - 1]}점 입니다.`);
let max = arrMax(score);
console.log(`문제 5 - 1등은 ${Number(max)}번 학생이며, ${score[max - 1]}점 입니다.`);
console.log("문제 6 - 점수 그래프 : ");   arrGraph(score);