// 객체 배열 선언
let products = [
    {name : '바나나', price : 1200},
    {name : '사과', price : 2000},
    {name : '배', price : 3000},
    {name : '고구마', price : 700},
    {name : '감자', price : 600},
    {name : '수박', price : 5000},
];

// 함수 선언
function printProduct(product)
{
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
}

console.log(products);   // 확인용 객체배열 출력
// 함수를 반복 호출하여 출력
for (let product of products)
{
    console.log('반복 ' + products.indexOf(product));
    printProduct(product);
}