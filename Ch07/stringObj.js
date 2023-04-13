let str = String("안녕하세요? Hi? ㅋㅋ");   // string 객체 생성
console.log(str.charAt(2));                 // str 객체의 2번에 위치하는 문자 return
console.log(str.charCodeAt(2));             // str 객체의 2번에 위치하는 문자의 unicode 번호를 return
console.log(str.concat("하세요!"));         // 매개 변수 "하세요!"문자열을 str 객체 뒤에 이어서 return
console.log(str.indexOf("Hi"));             // str 객체의 가장 앞에서부터 "Hi"문자열과 일치하는 위치를 return
console.log(str.indexOf("Hi", 8));          // str 객체의 8번에서부터 "Hi"문자열과 일치하는 위치를 return
console.log(str.lastIndexOf("Hi"));         // str 객체의 가장 뒤에서부터 "Hi"문자열과 일치하는 위치를 return
console.log(str.replace("?", "!"));         // "?"를 "!"로 바꾼 후 return
console.log(str.search("ㅋ"));              // "ㅋ"문자열과 일치하는 문자열의 위치를 return
console.log(str.slice(0, 2));               // str 객체의 0번부터 2번 전 까지의 문자열을 추출해 return
console.log(str.split("?"));                // str 객체에서 "?"를 기준으로 문자열을 잘라 배열로 return
console.log(str.toLowerCase());             // str 객체에서의 문자열을 소문자로 바꾸어 return
console.log(str.toUpperCase());             // str 객체에서의 문자열을 대문자로 바꾸어 return

console.log(str.concat("하세요!").replace("?", "!").toLowerCase());
// str 객체의 문자열 뒤에 "하세요!"를 이어 붙이고, "?"를 "!"로 바꾸고, 대문자를 소문자로 바꾸어 return