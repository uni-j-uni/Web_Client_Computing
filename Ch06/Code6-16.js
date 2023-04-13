// 클래스 선언
class Product
{
    constructor (name, price)
    {
        this.name = name;
        this.price = price;
    }
    // 멤버 함수 선언
    print()
    {
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
    }
}

// 객체 배열 선언
let products = [
    new Product('바나나', 1200),
    new Product('사과', 2000),
    new Product('배', 3000),
    new Product('고구마', 700),
    new Product('감자', 600),
    new Product('수박', 500),
];

console.log(products);   // 확인용 객체 배열 출력
// 함수를 반복 호출하여 출력
for (let product of products)
{
    console.log('반복 ' + products.indexOf(product));
    product.print();   // 객체가 가진 속성값을 출력하므로 함수 매개변수 필요없음
}