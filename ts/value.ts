/*
    데이터 타입
        * Boolean
        * Number
        * String
        * Array
        * Tuple
        * Enum
        * Any (지양)
        * Void
        * Null & Undefined
        * Never
        * Object
    추가
        * Type assertions
        * let
*/



/* 튜플 */

let x: [string, number];

x = ["hello", 10];



/* 열거 */

enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;



/* 모든 데이터 타입 */

let notSure: any = 4;

notSure = "this is sentence."

notSure = false;



/* 절때 발생할 수 없는 타입 */

function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // 생략
    }
}