class StdObj
{
    constructor(name, birth = "2000.01.01")
    {
        this.name = name;
        this.birth = birth;
    }
    print()
    {
        let age = new Date().getFullYear() - (this.birth).slice(0, 4) - 1;
        let star = "";

        if ((this.birth).slice(5, 10) == "01.01")
            age++;

        if (Number((this.birth).slice(5, 10)) >= 3.21 && Number((this.birth).slice(5, 10)) <= 4.19)
            star = "양";
        if (Number((this.birth).slice(5, 10)) >= 9.24 && Number((this.birth).slice(5, 10)) <= 10.22)
            star = "천칭";
        if (Number((this.birth).slice(5, 10)) >= 4.20 && Number((this.birth).slice(5, 10)) <= 5.20)
            star = "황소";
        if (Number((this.birth).slice(5, 10)) >= 12.25 || Number((this.birth).slice(5, 10)) <= 1.19)
            star = "염소";
                
        console.log(`이름 : ${this.name}, 생년월일 : ${this.birth}, 나이 : ${age}, 별자리 : ${star}자리`);
    }
}
Hong = new StdObj("홍길동", "2000.04.19");
Lee = new StdObj("이서경", "1999.09.28");
Ko = new StdObj("고소웨", "2001.04.20");
Park = new StdObj("박찬호", "2000.05.05");
Kim = new StdObj("김연아");

Hong.print();
Lee.print();
Ko.print();
Park.print();
Kim.print();