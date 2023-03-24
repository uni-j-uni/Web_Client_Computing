const repl = require('repl');   // 모듈 추출

repl.start(   // 입력 시작
    {
        prompt: "숫자 입력> ",
        eval: (command, context, filename, callback) =>
        {
            // 입력(command)을 받았을 때 처리 수행
            let number = Number(command);

            // 입력이 숫자인지 확인
            if(isNaN(number))
                console.log("숫자가 아닙니다.");
            else
                console.log("숫자입니다.");

            callback();   // 처리 완료
        }
    }
)