// 함수 선언
function print(name, count)
{
    if (typeof(count) == "undefined")
        count = 1;
    if (!name)
        name = "한라봉";
    // 함수 본문
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
// 함수 호출
print();
print("사과");
print(99);
print("사과", 99);