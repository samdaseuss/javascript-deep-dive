/**
 * [ Variable ]
 * 
 * - let : 키워드 혹은 명령어
 * - name : 식별자
 * - samdaseuss : 데이터
 */
let name = "samdaseuss";

/**
 * [ Function ]
 * 
 * - setName : 식별자
 */
function setName() {

}

/**
 * [ Object ]
 * 
 * - name : 객체의 속성
 * - ['lastName'] : 'Oh'
 *      - 생김새 : ['속성명']
 *      - 데이터의 식별자화 혹은 코드화
 *      - 데이터명을 통한 속성 접근
 * - ['changed lastName']: 'Lee'
 *      - 브랫킷을 이용한 속성 접근
 */
const o = {
    name : 'yunji',
    ['lastName'] : 'Oh',
    ['changed lastName']: 'Lee',
}

o.lastName;
o['changed lastName'];