// 클래스 선언
class Product2
{
    constructor (name, unit, amount, price)
    {
        this.name = name;
        this.unit = unit;
        this.amount = amount;
        this.price = price;
    }
    // 무게를 기반으로 가격을 계산하는 함수 선언
    calculate(amount)
    {
        console.log(`${this.name}의 ${amount}${this.unit} 가격은 ${(this.price / this.amount * amount).toFixed(1)}원 입니다.`)
    }
}
// 객체 생성
pork = new Product2('돼지삼겹살', 'g', 100, 1690);
banana = new Product2('바나나', '개', 1, 600);
sweetpotato = new Product2('고구마', 'kg', 5, 10500);

pork.calculate(850);
banana.calculate(5);
sweetpotato.calculate(10);