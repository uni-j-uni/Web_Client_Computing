try {
    // 예외 객체 생성
    const error = new Error('메시지');
    error.name = '내 마음대로 오류';
    error.message = '오류의 메시지';
    // 예외 발생
    throw error;
} catch(exception) {
    console.log(`${exception.name} 예외가 발생했습니다.`);
    console.log(exception.message);
}