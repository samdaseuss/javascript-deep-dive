# 에러 핸들링

에러핸들링 부분에서 다룰 주제는 크게 3가지로 나눠볼 수 있습니다.
- Promise에서 발생한 에러 Catch 하기
- Strategy(전략)을 이용한 에러 처리
- 로깅 & 디버깅

Try/Catch/Finally
에러 핸들링에서 해야할 것과 하지 말아야할 것
전역 에러 처리

주의 발생한 에러에 대해 자세한 정보 제공하지 말 것
## 에러 처리 주의 사항

[1] 에러에 대한 자세한 정보 제공하지 말 것
- 자세한 에러 제공은 취약점이 될 가능성이 있다.
- 배포용 코드에서 console.logs()를 모두 지우자.

[2] Try/Catch 구문 많이 사용하지 말 것
- 대신 window.onerror를 사용하자.
