/* 
** 에러 처리 1
** [1] try-catch 구문
** [2] try-catch-finally 구문
*/

try {
    // 에러가 발생 코드
    var myFunc = {};
    myFunc();
} 
catch(err) {
    // catch에서 에러 잡음
    console.log("error");
}
finally {
    // 에러 유무 상관 없이 항상 실행되는 코드
    console.log("It runs everytime");
}

/* 
** 에러 처리 2
*/
// window.onerror = function(message, source, lineNumber, colNumber, errorObject) {
//     console.log("Error Details");
//     console.log(`Message: ${message}`);
//     console.log(`Source: ${source}`);
//     console.log(`Line number: ${lineNumber}`);
//     console.log(`Col number: ${colNumber}`);
//     console.log(`Error Object: `, errorObject );
// }
// var func = {};
// func();

/*
** Promise 예외 처리하기
** [1] 함수 안에서 에러가 발생했을 때
** [2] 함수  
*/
function getProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ firstName: 'yunji', lastName: 'oh', age: 43 }), 3000);
    })
}

getProfile().then(profile => {
    var myFunc = {};
    myFunc();
    console.log("Profile fetched: ", profile);
}, (err) => {
    console.log("An error has occured: ", err);
})

try {
    var myFunc = {};
    myFunc();
} catch(err) {
    console.log(err)
}