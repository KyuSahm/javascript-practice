# JavaScript
## Browser의 종류
- Apple Safari: http://apple.com/safari
- Google Chrome: http://google.com/chrome
- Mozilla Firefox: http://getfirefox.com
- Microsoft Internet Explorer: http://windows.microsoft.com/en-US/windows/products/internet-explorer
- 여러 브라우저에서 테스트를 진행해 보는 것이 중요
- 크롬의 사용자가 많고, 개발자 도구가 제일 강력하다.

## 개발 도구
- Visual Studio Code
  - 편집기지만, 다양한 플러그인들이 제공된다.

## DOM 
- 문서 상의 모든 Element를 트리상의 노드로 표현할 수 있음
  - HTML, XML
- Document Objects(객체 트리 in Memory)

## Typescript
- Typescript는 Javascript의 모든 기능을 포함하면서 정적타입을 지원하는 언어
- 가장 중요한 차이인 Javascript는 동적타입언어 이며 Typescript는 정적타입언어
- 동적타입언어는 런타임시 변수의 타입이 결정되고, 정적타입언어는 컴파일시 변수의 타입이 결정
- Javascript는 타입을 지정하지 않기 때문에 중간 마다 다양한 타입의 값들을 변수에 할당할 수 있음
  - 이러한 자유로움 덕분에 진입장벽이 낮고, 적은 코드에서의 생산성이 높음
- 하지만, Typescript는 변수를 선언할 때마다 타입을 고민해야지만, 많은 코드에서의 생산성이 높음 
- 생산성의 차이는 변수와 같은 것들을 다양한 곳에서 사용하고 코드의 잠재적 오류의 발생, 등의 요소들이 있음
- Javascipt의 새로운 기능들이 추가되면 TypeScript에도 꾸준히 업데이트가 진행
- 리액트 개발자들이 Typscript를 사용할 수 있도록 반영을 잘해주며, 큰 생태계를 갖는 장점들도 있음
  
#### Typescript type
###### number 과 string
- 매우 자주 쓰이는 type
- 숫자형과 문자형의 종류이며 선언과 함께 타입을 결정
```typescript
let variable1 : number = 100;  // (type) = (할당 값)
let variable2 : string = '백';
variable1 = '백';  // Type 'string' is not assignable to type 'number'.
variable2 = 100;  // Type 'number' is not assignable to type 'string'.
```
###### null 과 undefined
- Javascript에서는 null과 undefined가 값으로 존재
- 하지만, Typescript에서는 각각 type으로 존재
```typescript
let variable1 : undefined = undefined;
let variable2 : null = null;
variable = 100; // 타입 에러
``` 
###### 문자열 리터럴과 숫자 리터럴 타입
- 주어진 리터럴의 값들 중 값을 가질 수 있는 타입
  - 값이 주어진 것들 중 정해져야 할 때 사용하면 편리
```typescript
let variable1 : 1 | 2 | 3;
variable1 = 1;
variable1 = 2;
variable1 = 3;
variable1 = 4; // 타입 에러

let variable2 : 'a' | 'b' | 'c';
variable2 = 'a';
variable2 = 'b';
variable2 = 'c';
variable2 = 'd'; // 타입 에러
```
###### any
- any타입은 모든 종류의 type을 허용하는 type
- javascript 처럼 다양한 type의 값들을 넣을 수 있음
  - 그렇게 사용하면 Typescript을 사용하는 의미가 사라질 수 있기에 사용을 자제
```typescript
let variable : any;
variable = 1;
variable = 'a';
variable = {name : 'pyo'};
variable = () => {};
```
###### void와 never
- void
  - 아무 값도 반환하지 않는 함수의 반환 type으로 정의 가능
- never
  - 비정상적인 종료와 무한루프로 인한 종료되지 않을 상황에 정의 가능
```typescript
function print() : void {
	console.log("HELLO");
}

function Oops() : never {
	throw new Error('error');
}

function loop() : never {
	while(1){
    	...
    }
}
```
###### 객체(Object) type
```typescript
let obj : object;
obj = {
    name : 'pyo',
    age : 27,
}
```
###### 열거형(enum) type
- enum을 이용하여 열거형으로 정의
```typescript
enum Language{
    Korean,
    English,
    Spanish
}
console.log(Language['Korean']); // 0
console.log(Language['English']); // 1
console.log(Language['Spanish']); // 2
``` 
- 이렇게 원소들의 값을 정해주지 않는다면 0 부터 차례대로 값이 할당
- 하지만,  중간에 임의의 숫자로 지정을 해준다면 그 아래부턴 +1씩 증가된 숫자로 할당
- 문자열로 주고 싶다면, 모든 원소들의 값을 정해주면 됨
```typescript
enum Language {
    Korean, //0
    English = 10, //10
    Spanish, //11
}

enum Language {
    Korean = 'ko',
    English = 'en', // 하나라도 값이 없다면
    Spanish = 'sp', // Enum member must have initializer. 에러가 뜬다.
}
```
- 열거형 type은 다른 type과는 달리 컴파일 후에도 객체로 남아있음
  - 따라서 런타임 중 값을 가져다 쓸 수 있음
  - 그렇다는 것은 불필요한 크기를 사용할 수도 있다는 의미
  - 이를 해결할 수 있는 방법은 아래의 코드처럼 상수 열거형 type을 사용

```typescript  
const enum Language {  // const를 사용하여 상수로 정의
    Korean = 'ko',
    English = 'en',
    Spanish = 'sp',
}
```
###### 함수 type
- 함수 type을 정의하기 위핸 매개변수의 type과 반환 type을 필요
```typescript
// 함수 선언
function PrintSum(v1:number, v2:number, s1:string) : void
{
    console.log(s1 + (v1+v2));
}

PrintSum(10, 20, '정답은...!'); // 정답은...!30

// 변수를 함수 타입으로 선언
let PrintSum2 : (v1:number, v2:number, s1:string) => void = function(v1,v2,s1) {
	console.log(s1 + (v1+v2));
}

PrintSum2(10, 20, '정답은...!'); // 정답은...!30
```
- 매개변수 중 선택매개변수를 정의할 수도 있음
  - 선택 매개변수란 값을 줘도 되고 안줘도 되는 매개변수를 뜻함
  - 끝쪽의 매개변수를 선택매개변수로 사용할 때는 ? 기호
  - 중간의 매개변수를 선택매개변수로 사용할 때는 유니온 타입은( | )과 undefined를 이용
```typescript
// 끝쪽에 사용할 경우
function PrintSum(v1:number, v2:number, s1?:string){
    s1 ? console.log(s1 + (v1+v2)) : console.log('답은 ' + (v1+v2));
}
PrintSum(10,20);				//답은 30
PrintSum(10,20, '정답은!!!');	 //정답은!!!30

// 중간에 사용할 경우
function PrintSum(v1:number, v2:number | undefined, s1:string)
{
    v2 ? console.log(s1 + (v1+v2)) : console.log(s1 + v1);
}
PrintSum(10,undefined,'답은!!'); //답은 10
PrintSum(10,20, '정답은!!!');	  //정답은!!!30
``` 
- 참고서적: 실전 리액트 프로그래밍 (이재승)

## 자바스크립트 기반 웹 프론트엔드 프레임워크
#### Vue.js, React, Angular
###### 특징 
- 운영하는 사람이나 업체는 어떤 곳인지
- Virtual Dom 지원 유무 (Virtual Dom에 관한 적절한 예시 영상)
- SSR(Server Side Rendering) (SSR 설명 추천 링크)
- 기타 특징
###### React
- 라이브러리이며 페이스북의 개발자 Jordan Walke가 처음 만듬
- 페이스북에서 지원하며 공동체의 의해 유지보수
- Virtual Dom 지원
- SSR : Next.js
- JSX(JavaScritp + XML)
- React Native (앱 개발까지 가능하게 해준다)
- 라이브러리이지만 컴포넌트를 사용한다면, 프레임워크처럼 규칙을 지켜야 함
- 장점은 Virtual Dom임
  - Dom 트리를 추상화하여 자바스크립트 객체로 만들어 두고, 변경되는 부분은 virtual dom에서 처리하여 성능을 높혔음
- SPA(Single Page Application) 방식으로 진행한다면 검색엔진 노출(SEO : Search Engine Optimization)에 관련된 문제를 생각 했을 때 SSR을 염두해 둘 수 밖에 없었는데 Next.js를 사용하여 해결 할 수 있음
- UI를 구성하는 개별적인 뷰 단위인 컴포넌트 단위로 작성하여 생산성과 유지보수에 도움이 됨
- JSX(자바스크립트 확장 문법)을 사용하여 컴포넌트를 생성 가능
- React Native를 이용해서 앱 개발까지 가능
###### Angular
- 타입스크립트 기반 오픈소스 프레임워크
- 구글 앵귤러팀이 만들고, 구글에서 지원하며 공동체에 의해 유지보수 중에 있음
- 양방향 바인딩 지원
- TypeScript 기반
- RxJs(Reactive Extensions For JavaScript)
  - 스트림을 통한 비동기 처리 방식 지원
- 가장 체계적이고 잘 정리되어있는 문서와 튜토리얼
- 큰 러닝커브 (배울 것이 많고 어렵다)
- 라우팅, 상태관리, 폼 유효성 등 필요한 도구를 모아놓은 All In One 프레임워크인 것이 큰 장점
  - 그렇기 때문인지 React와 Vue.js와 비교했을 때 가장 배울 것이 많고 어려운 편
  - 가볍고 빠르게 작업을 해야하는 프로젝트 보다는 큰 프로젝트에 사용하기 적합
- TypeScript를 기반으로 하기 때문에 엄격하지만 그만큼 직관적이고 오류를 줄일 수 있음
- 웹사이트가 빠르고 효율적으로 렌더링 되게 설계되어 있음
  - MPA를 구성하기에는 복잡하고, SPA에서는 매우 빠르게 작동
  - 애초에 구글이 SPA를 위해 만든 것이라고 함
###### Vue.js
- 오픈소스 자바스크립트 프레임워크
- Google의 전 개발자 Even You가 만듬
- Virtual Dom 지원
- SSR: Nuxt.js
- 양방향과 단방향의 바인딩 지원
- TypeScript 지원
- NativeScript
- Single File Component
- 작은 러닝커브(학습 및 적응이 빠름)
- React의 장점인 Virtual Dom과 Angular의 양방향 바인딩을 가져왔다는 점에서 볼 때 앞으로도 발전을 기대해 볼 만한 프레임워크
- 자바스크립트의 기본 스타일을 적극적으로 적용하고 있어서 학습하고 적응하기 쉬움
- Single File Component는 .vue 파일에 HTML과 CSS 그리고 Script까지 하나로 묶어서 컴포넌트 단위로 직관적인 구성이 가능
  - 개인적으로는 파일 분리를 선호하지만 디자이너나 퍼블리셔와 협업하는 과정에서는 생산성이나 유지보수에 큰 도움이 될 것임

## JavaScript
- 전송하는 데이터에 대한 유효성 검사의 필요성에 의해 탄생: 폼 객체에 대한 유효성 검사를 하지 않으면, 불필요한 데이터가 서버로 너무 많이 전송됨 
- Java Script를 이용하면 DOM의 특정 Element 및 Browser Window를 객체로 접근해서 수정하거나 유효성 검사를 할 수 있다.
- 함수를 통하여 로직을 수행 가능
- 기본적으로 HTML Document를 제어하는 것이 주 목적 
  - window
    - Browser window의 사이즈와 위치등을 컨트롤
  - window.location
    - URL을 조작 가능
  - window.history
    - 열어본 URL 페이지 목록을 순회 가능
    - 앞으로 뒤로 가기 가능
  - window.document
    - HTML 내부의 element들의 내용들을 수정할 수 있음
- 자바 스크립트 언어를 아래의 순서대로 학습할 예정
  - 데이터
  - 연산자
  - 제어구조
  - 함수
  - Document Objects
  - Browser Object

#### Script 정의 영역
- ``<script>``로 감싸서 넣는다.
```html
<script>
  스크립트 코드
</script> 
```   
- html문서상의 아무위치에 여러번 넣을 수 있음
```html
<html>
</html>
```
#### 데이터 타입
###### 정수, 실수, 문자, 문자열
- var x
  - 참조변수이고, 포인터와 다름
  - 값이 할당되지 않으면, 실제 메모리 공간에 대한 참조가 아님  
- ``x = 3``
  - 값이 할당하는 순간에 필요한 공간만큼 할당
  - x 변수는 그 Value형 객체에 대한 참조를 가지고 있음.(auto boxing)
```javascript  
var x = 3;
var x = 3.7;
var x = 'A';
var x = "Hello";
var x;  // 공간을 얼마나 할당할까?
x = 3;
```
- 실제 Data를 담을 Wrapper 클래스가 존재
  - Boolean, Number, String으로 세 가지만 존재
  - 부울: Boolean
  - 정수: Number
  - 실수: Number
  - 문자: String
  - 문자열: String 
```javascript
var x = 3; // 내부적으로, "var x = new Number(3);"으로 동작함.

var z;
alert(z) // "undefined"로 출력

var z
z = 3;
alert(typeof z) // "number"로 출력

var x;
alert(x) // "undefined"로 출력

var w;
alert(w == undefined) // "true" 출력

var num;
num = 3.4 // new Number(3.4)
num = 3   // new Number(3)
num = "3" // new String("3")
```
- Array 객체
  - push/pop 메소드를 이용한 데이터 관리 가능
  - 인덱스를 이용한 데이터 관리(List)
```javascript
var nums = new Array();
nums.push(5);
alert(nums)
nums.push(10);
alert(nums)
nums.push(21);
alert(nums)
console.log(nums)    // 웹 브라우저의 개발자 도구(F12)의 Console에서 볼 수 있음.
var n1 = nums.pop();
alert(nums)
var n2 = nums.pop();
alert(nums)
var n3 = nums.pop();
alert(nums)
```
```javascript
var nums = new Array();
nums[0] = 5;
alert(nums)
nums[1] = 10;
alert(nums)
nums[2] = 21;
alert(nums)
alert(nums[0])
alert(nums[1])
alert(nums[2])

var nums = new Array();
nums[3] = 5;        // 0, 1, 2에 대해서 비어 있는 공간 생성
alert(nums);
alert(nums.length); // 4가 출력.

var nums = new Array(5); // 5개의 공간 마련
var nums = new Array(5, 10, 21); // 3개의 방에 5, 10, 21의 초기값을 가짐
var nums = new Array(5, 10, 21, "hello"); // 4개의 방에 5, 10, 21, "hello"의 초기값을 가짐. 다른 종류의 데이터를 가질 수 있음
alert(typeof nums[3]); // String
var nums = new Array(5, 10, 21, "hello", new Array(2, 3, 4)); // 5개의 방에 5, 10, 21, "hello", array object의 초기값을 가짐. 다른 종류의 데이터를 가질 수 있음
alert(nums[4][1]); // "3"에 액세스함.

var nums = new Array(5, 10, 21, "hello");
nums.splice(1); // 1번째 인덱스 값부터 끝까지 지움, nums는 5가 됨
nums.splice(1, 1); // 1번째 인덱스부터 1개의 값을 지움
nums.splice(1, 2); // 1번째 인덱스부터 2개의 값을 지움
nums.splice(2, 1, "hoho"); // 2번째 인덱스부터 1개의 값을 지우고, 그 자리에 "hoho"를 삽입함.
nums.splice(2, 0, "hoho"); // 2번째 인덱스에 "hoho"를 삽입함.
```
- 객체
  - Javascript의 경우, 객체를 생성하고 난 후, 정의 
    - C++, C#, Java의 경우, Class를 정의하고 난 후, 객체를 생성
    - TypeScript를 사용하면, Javascript처럼 사용하면서 일반적인 언어처럼 Class를 정의하고, 객체 생성 
    - Javascript
      - 동적타입언어 (런타임시 변수의 타입이 결정), 사용자 실수로 인한 잠재적인 오류가능성이 많음
    - Typescript
      - 정적타입언어 (컴파일시 변수의 타입이 결정)
    - 이런 불편함으로 인해, Front script기술들에는 React(자유도), Angular, VueJs를 사용      
  - Javascript의 경우, prototype, class
    - C++, C#, Java의 경우, class
  - Class의 멤버변수 접근형태 또는 Map 형태로 사용 가능

```javascript
// Class 멤버변수 형태로 표현가능
var exam = new Object();
exam.kor = 30;
exam.eng = 70;
exam.math = 80;
      
alert(exam.kor + exam.eng);   => 100 popup
console.log(exam.kor + exam.eng);

exam.Kor = 20;  => 대소문자 구분, 버그가 만들어지면, 알기가 쉽지 않다.
alert(exam.kor + exam.eng);   => 90 popup
  
// Map 형태로 표현가능 (Class 멤버변수 형태와 호환)
var exam = new Object();
exam["kor"] = 10;   => key, value 속성을 이용할 수 있음. "exam.kor = 10"과 동일
exam["eng"] = 20;
exam["math"] = 30;
alert(exam["kor"] + exam["eng"]); 
var key = "eng";
alert(exam[key]); 
```
#### Javascript 데이터 객체와 JSON
- Javascript의 모든 변수는 참조형태로 동작
- 모든 타입의 변수는 객체를 생성해야만 함.
- JSON
  - Javascript Object Notation
  - 자바스크립트의 object를 단순하게 표현하는 방법
- Boolean
```javascript
var n = new Boolean(true) // JavaScript 표기법
var n = true // JSON 표기법. 내부적으로는 "var n = new Boolean(true)"으로 동작함.
```  
- Number
```javascript
var n = new Number(3) // JavaScript
var n = 3 // JSON 표기법
```
- String
```javascript
var s = new String("hello") // JavaScript
var s = "hello" // JSON 표기법
var s = 'hello' // JSON 표기법, 홑따옴표도 문자열에 동작. HTML에 내부에서 사용할 때는 "과 충돌이 날 수 있으므로, 홑따옴표를 사용하는 것이 유리. 
```
- Array
```javascript
var ar = new Array(); // JavaScript
var ar = []; // JSON 표기법
```
- Object
```javascript
var ob = new Object(); // JavaScript
var ob = {}; // JSON 표기법
```
- 예시 코드
```javascript
var exam = {"kor":100, "eng":200, "math":300};

alert(exam["kor"] + exam["eng"]);  // 300 출력
var key = "eng";
alert(exam[key]);  // 200 출력
      
var ar = [3, 4, 5, 6, exam, [7, 8, 9]]
alert(ar[5][1]); // 8 출력
alert(ar[4].math); // 30 출력
``` 
- 중첩된 구조에서의 사용
  - 복잡한 데이타를 표현하는 방법이 XML에 비해 훨씬 단순.
```javascript  
var notices = [{"id":1, "title":"hello json"},
               {"id":2, "title":"hi json"}, 
               {"id":3, "title":"json is easy"}];                

alert(notices[1]); // "[object Object]" 출력
alert(notices[1].title); // "hi json" 출력
```
#### 문자열을 JSON 객체로 만들기
- eval() 사용하기

#### javascript 속성명 관련 특징
- 속성명을 문자열로 사용안해도 동작 
```javascript
var data = {id:1, title:"aaa"} //var data = {"id":1, "title":"aaa"}과 동일.
console.log(data.id, data["title"])
```
- 반드시 속성명을 문자열로 사용해야 하는 경우
  - 속성명에 공백이 존재
```javascript  
var data2 = {"n id":7, title:"bbb"} // 속성명에 공백이 존재
console.log(data2["n id"], data2.title)
```
#### 문자열 형태의 JSON 데이터를 처리하는 방법
- 첫번째 방법: eval()
  - 사실, 자바 스크립트 코드를 실행해 주는 것
  - JSON 데이터 파싱으로도 사용 가능
  - 여러 라인의 문자열 연결하기 " \"를 사용하면 됨(ES6에서는 더 편한 방법으로 바뀜)
```javascript  
<script>
    var data = '[ \
                    {"co":0.2,"so2":0.003,"o3":0.033,"no2":0.006,"pm10":11,"msrdt_de":"20210815","pm25":7,"msrste_nm":"강남구"}, \
                    {"co":0.4,"so2":0.002,"o3":0.027,"no2":0.01,"pm10":6,"msrdt_de":"20210815","pm25":3,"msrste_nm":"강남대로"}, \
                    {"co":0.2,"so2":0.002,"o3":0.03,"no2":0.004,"pm10":11,"msrdt_de":"20210815","pm25":6,"msrste_nm":"강동구"}  \
                ]';
    alert(data)           
</script>
```
-  사용법
```javascript
<script>
    eval('var x = 30;');
    console.log(x)

    var data = '[ \
                    {"co":0.2,"so2":0.003,"o3":0.033,"no2":0.006,"pm10":11,"msrdt_de":"20210815","pm25":7,"msrste_nm":"강남구"}, \
                    {"co":0.4,"so2":0.002,"o3":0.027,"no2":0.01,"pm10":6,"msrdt_de":"20210815","pm25":3,"msrste_nm":"강남대로"}, \
                    {"co":0.2,"so2":0.002,"o3":0.03,"no2":0.004,"pm10":11,"msrdt_de":"20210815","pm25":6,"msrste_nm":"강동구"}  \
                ]';
    eval("var ar = " + data +";")
    console.log(ar[0].co, ar[0]["so2"])
    console.log(data)
</script>
```   
- 두번째 방법: JSON Parser을 사용하는 방법(좀 더 보편적인 방법)
  - 문자열을 json 데이터로 변경하는 경우
  - 문자열의 javascript 속성명이 반드시 ""으로 감싸져 있어야 한다.
```javascript  
var data3 = JSON.parse('{"id":1, "title":"ccc"}'); // 정상동작. JSON Parser은 엄격한 rule 적용
console.log(data3.id, data3["title"]) 

var data4 = JSON.parse('{id:1, title:"ddd"}'); // 에러 발생
console.log(data4.id, data4["title"])
``` 
- json 데이터를 문자열로 변경하는 경우
  - JSON.stringify함수를 사용하면 알아서 속성에 ""를 생성해 줌
```javascript  
var data6 = {id:2, title:"bbb"};
var json_data = JSON.stringify(data6);
console.log(json_data); // {"id":2,"title":"bbb"} 출력
```
#### Java Script 연산자
- ``JavaScript_Operator.png`` 참조
- ``===, !==`` 연산자
  - 값을 비교하는 것이 아니라, 같은 공간에 생성된 변수인지를 체크
```javascript
 var x = 3; // 3을 저장하는 공간을 생성 후, x라는 변수로 참조
 var y = 3; // 동일한 값이 3이 이미 생성 되었으므로, 그 공간을 y라는 변수로 참조
 document.write(x == y, ",", x === y); // true, true. html 문서에 출력
``` 
```javascript
var z = 3;
var w = new Number(3);   // 새로운 공간을 생성해서 3을 저장. 이것을 w가 참조     
document.write(z == w, ",", z === w); // true, false 출력
```
###### 암묵적인 타입변환
- 기본적으로 문자열로 변환되지만, ``-``연산은 숫자로 변환
```javascript  
  3 + "4" // "34"
  3.5 + "4" // "3.54"
  3.5 - "2" // 1.5
  32 > "5" // true, 숫자로 변환
```
#### java script 값을 출력하는 세가지 방법
- console.log();
- alert();  // 팝업창
- document.write(); // 문서에 출력

#### Java Script 제어구조
###### 조건문
- if
- while
- do-while
###### 반복문
- while
- for
- for-in
###### 선택문
- else, else if, switch

```javascript
// 예) for-in 문
<script>
  var ar = ["철수", "영희", "맹구", "동천"]

  /*for (var i = 0; i < 4; i+++)
      alert(ar[i]); */
  // 값이 아니라 인덱스를 가져옴    
  for (var i in ar)    
    alert(ar[i])

  var ob = {id:1, title:"hello", writeId:"newlec"}
  // 키값이 추출         
  for (var i in ob)
    document.write(i+"<br>"); 
</script>
```
#### JavaScript Reference
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

#### 함수와 표현식
- 함수를 정의하는 것이 아니라, 객체를 만드는 방식
  - 함수 객체를 다른 곳에 전달하기 쉬움
- 방법1
```javascript
var add = new Function("x, y", "return x+y;");
alert(add(3, 4))
```
- 방법2
  - 가장 많이 쓰는 형태임
```javascript
var add = function(x, y) {
  return x + y;
}
```
- 방법3
```javascript
function add(x, y) {
  return x + y;
}
```
#### 함수 인자
```javascript
function add2(x, y)
{
  alert(arguments.length);
  alert(typeof arguments[1]); // number 출력
  alert(arguments[2]); // "hello" 출력
  return x + y;
}

// add2 함수로 모든 인자가 객체로 전달됨
// 하지만, x, y변수는 앞의 두 인자만 참조함.
var sum = add2(2, 3, "hello", 3, 4, 5, 6, 7, 8)
document.write(sum); // 에러가 나지 않고, 5 출력
```
#### 변수의 가시영역과 global 객체 그리고 전역변수
- 예제 1
```javascript
<script>
  // undefined 출력        
  alert(a);
  var a = 1;
  // var를 사용하지 않으면 변수가 아니라, 윈도우 객체에 b라는 전역객체 속성이 생긴 것임. 
  b = 1;   // window.b = 1
  alert(b);

  alert(c);
  c = 1    // window.c = 1
</script>
```
- 예제 2
```javascript
<script>
  var f1 = function() {
    a = 1;     // window.a = 1
    var a = 3; // 지역 변수와 윈도우 객체의 속성이 동일한 이름이라면, 지역변수가 우선 순위가 높음.   
    a++;
    alert(a);  // 4 출력
  }
</script>
```
- 예제 3
```javascript
<script>
  var a = 1;
  var a = 2; 
  alert(a);   // 에러 없이 2출력 
</script>
```
- 예제 4
```javascript
<script>
  {
    var a = 1;
  }
  alert(a);   // 에러 없이 1출력. {} 있으나 없으나 동일. 함수의 경우는 영역을 바라본다. 
</script>
```
- 예제 5
```javascript
<script>
  function f1() {
    var a = 1; // 함수안에서만 a가 정의됨
  }
  f1();
  alert(a);    // 에러 발생
</script>
```
- 예제 6
```javascript
<script>
  function f1() {
    a = 1;     // 윈도우 객체의 전역객체 window.a가 생성되고, 1이 할당.
  }
  f1();
  alert(a);    // 1이 출력
</script>
```
- 예제 7
```javascript
<script>
  function f1() {
    var a = 1;
    f2();
    function f2() {
      var a = 2;
      f3();
      function f3() {
        var a = 3;
      }
    }
    return a;
  }
  a = f1();
  alert(a); // 오류 발생
</script>
```
- 예제 8
```javascript
<script>
  function f1() {
    var a = 1;
    f2();
    function f2() {
      a = 2;
      f3();
      function f3() {
        a = 3;
      }
    }
    return a;
  }
  a = f1();
  alert(a); // 3을 출력
</script>
```  
#### 클로저(Closure)
- 자바 스크립트는 함수를 정의하지 않고, 객체로 생성해서 가지고 있기 때문에 발생하는 현상
- 일반적인 함수 형태
```javascript
<script>
  function f1() {
    var a = 1; // 지역변수
    return a;  // 지역변수의 생명이 끝남.
  }

  var a = f1();
  alert(a);
</script>
```
- Closure를 포함한 함수 형태
  - 지역변수 자원을 계속 잡고 있는 형태
  - 아래 예제에서 상위 함수의 지역변수를 잡고 있는 함수 객체 f2()를 Closure라고 부른다.
  - 왜냐면, 상위 함수의 지역변수의 close에 대한 키를 갖고 있기 때문.
```javascript  
<script>
    function f1() {
      var a = 1; // 지역변수
      return function f2() {
        return a; // 상위 함수의 지역변수를 바라봄.
      } // 함수 객체를 리턴함.
    }
  
    var f = f1(); // f는 함수 객체. 
    var a = f();  // f1()함수 안에 있는 지역변수 a는 참조하고 있는 하위 함수 f2()가 객체로서 사용될 수 있으므로, 함수 리턴시에도 계속 유지
    alert(a);     // 1 출력.  var f가 null로 되기 전까지는 지역변수 a가 계속 잡혀 있음.
</script>
```
## this object 바인드편(bind, call, apply)
### bind
- function object(함수 또는 메소드)는 모두 bind를 사용 가능
- bind 함수를 사용하면, 기존의 함수와 동일한 형태의 bound 함수 객체가 생성해서 리턴
  - 이 bound 함수의 this는 내가 정한 object로 고정 가능  
```text
bind 함수의 정의 -
For a given function, create a bound function that has the same body as the original function. 
The this object of bound function is associated with the specified object, and has the specified initial parameters
```
- 사용예 1: bind 함수를 통한 새로운 bound 함수 객체 생성
```javascript
function sum(num) {
    return num + this.num1 + this.num2;
}

var myObj = {num1:20, num2: 3};
var customSum = sum.bind(myObj);
console.log(customSum(5));
```
```bash
# 실행 결과
28
```
- 사용예 2: 클래스 함수를 bind한 예
  - 클래스 객체가 생성될 때, 그 객체의 메소드는 그 객체로 지정된 bound 함수 객체라고 볼 수 있임 
  - 새로운 bound 함수 객체가 생성되므로, 기존의 bind된 함수는 그대로 임
```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    info(){
        console.log(`x: ${this.x}, y: ${this.y}`);
    }
}

var point = new Point(10, 20);
point.info();

var newInfo = point.info.bind({x: 100, y: 200});
newInfo();
point.info();
```
```bash
# 실행 결과
x: 10, y: 20
x: 100, y: 200
# 기존 것은 그대로 임
x: 10, y: 20
```
### call, apply
- call, apply는 bind와 같은 역할을 하지만 차이점이 있다면 아예 실행까지 한다는 것
- 둘의 차이
  - call의 경우 함수를 실행할때 파라메터를 하나씩 넘김
  - apply는 배열로 넘김
```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    info(v, w) {
        console.log(`x: ${this.x}, y: ${this.y}, v: ${v}, w: ${w}`);
    }
}

var point = new Point(10, 20);
point.info(1, 2);

var customPoint = {x: 100, y: 200};
point.info.call(customPoint, 20, 30);
point.info.apply(customPoint, [2, 3]);
point.info(1, 2);
```
```bash
x: 10, y: 20, v: 1, w: 2
x: 100, y: 200, v: 20, w: 30
x: 100, y: 200, v: 2, w: 3
# 기존의 bound 함수는 그대로임
x: 10, y: 20, v: 1, w: 2
```
## async, await
```javascript
import axios from 'axios'

var testFunction = async function() {
    var a = await axios.get('<http://www.example.org/example.txt>');
    console.log(a);
    console.log("3");
    return "test"
}

async function test() {
    var a = await testFunction();
    console.log(a);
}
console.log("1");
test();
console.log("2");
```
```bash
# output
1
2
{
data:"<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=content-language content=en><meta http-equiv=X-UA-Compatible 
.....
script><script src=/static/js/app.9b58081f.js></script></body></html>",
status:200,
statusText:"",
headers: {...},
config: {...},
request:[object XMLHttpRequest]
}
3
test
```
## Window 플랫폼을 이용한 대화
- parseInt, alert, prompt, confirm
#### Browser Objects: 아래의 요소들로 구성됨
- Document Object (UI(동적문서))
- Cascading Style Sheets (UI(동적문서))
- Graphics and Media (HTML5 API, 멀티미디어, 네트워크통신, 로컬저장소)
- Web Application API (HTML5 API, 멀티미디어, 네트워크통신, 로컬저장소)
- Internet Platform API (HTML5 API, 멀티미디어, 네트워크통신, 로컬저장소)

#### Browser Objects
- window: 브라우저 윈도우 컨트롤
- window.location: 브라우저 윈도우의 주소창 컨트롤
- window.history: 검색한 히스토리 컨트롤(앞으로 뒤로가기)
- window.document: 윈도우 내부의 image와 스타일을 바꾸기 위한 객체

#### 사용자와 상호작용을 위한 기본 도구
- https://developer.mozilla.org/en-US/docs/Web >> JavaScript >> Reference >> BuiltIn Objects에서 함수들을 찾을 수 있음
- Methods
  - alert(): 알림창, 사용자와 상호작용가능
  - confirm(): 확인창, 사용자와 상호작용가능
  - prompt(): 값을 입력받기 위한 대화상자가 뜸. 사용자와 상호작용가능
  - setTimeout()
  - clearTimeout()
  - setInterval()
  - clearInterval()
- Properties
  - status
  - defaultStatus

- 예제: prompt()
```javascript
<script>
var x, y;
x = prompt("x 값을 입력하세요", 0); // 0은 기본값
y = prompt("y 값을 입력하세요", 0); // 0은 기본값

alert(typeof x) // "string" 출력
window.alert(x + y); // window 생략 가능, x와 y는 문자열 변수. "xy" 출력.

x = parseInt(x)
y = parseInt(y)

alert(typeof x) // "number" 출력
window.alert(x + y); // window 생략 가능, x와 y는 number. x + y 출력
alert(parseInt("abc")); // "NaN" 출력 => Not a number
alert(parseInt("12abc")); // 12 출력. 숫자뒤에 문자열을 자동 탈락 시킴. substring을 할 필요없음.
alert(parseInt("abc12")); // NaN => Not a number 출력
</script>
```
- 예제: confirm()
```javascript
<script>
var answer;
answer = confirm("정말로 삭제하시겠습니까?");
if (answer)
  alert("삭제되었습니다");
</script>
```
#### 이벤트 기반의 프로그래밍
- 이벤트 처리는 ``<script>``뿐만 아니라, ``<html>`` Tag안에서도 사용 가능한 곳이 존재
```html
<input onclick=" "/>
<input onmouseover=" "/>
```
```html
<body>
    <input type="button" value="클릭" onclick="alert('안녕하세요');"/><br/><br/>
    <span onmouseover="alert('hello');">스팬입니다</span>
</body>
```
#### 문서의 엘리먼트 객체 이용하기
- DOM 설명
  - ``HTML_DOM.png`` 참조
- 문서 객체의 속성 사용하기
  - ID를 부여한 후, HTML element의 속성값을 변경
```html
<head>
<script>
  function printResult()
  {
      var x, y;
      x = prompt("x 값을 입력하세요", 0); // 0은 기본값
      y = prompt("y 값을 입력하세요", 0); // 0은 기본값
      
      x = parseInt(x);
      y = parseInt(y);

      btnAdd.type = "text";    // type 속성도 바꿀 수 있음.
      btnAdd.value = x + y;    
      span1.innerText = x + y; // span에 감싸진 text의 내용을 바뀜.           
  }    
</script>
<body>
<input type="button" value="덧셈" id="btnAdd" onclick="printResult();"/><br/><br/>
<span id="span1" onmouseover="alert('hello');">스팬입니다</span>    
</body>
```
- onclick함수의 등록을 ``<script>``내에서 할 수 있음
  - 코드를 ``<script>``내에서만 관리 가능  
```html
<head>
<script>
  function printResult()
  {
      var x, y;
      x = prompt("x 값을 입력하세요", 0); // 0은 기본값
      y = prompt("y 값을 입력하세요", 0); // 0은 기본값
      
      x = parseInt(x);
      y = parseInt(y);

      btnAdd.type = "text";     // type 속성도 바꿀 수 있음.
      btnAdd.value = x + y;    
      span1.innerText = x + y;  // span에 감싸진 text의 내용을 바뀜.           
  }
  btnAdd.onclick = printResult; // btnAdd가 생성되기 전에 실행되면, 오류가 난다.
</script>
<body>
<input type="button" value="덧셈" id="btnAdd"/>
</body>
```
- 오류발생
  - 해결책1: ``<script>``코드를 input type이 정의된 아래로 옮김
  - 해결책2: body onload 또는 window onload의 이벤트를 사용
    - 이미지와 같은 데이터의 로드까지 보장하려면, window onload를 사용해라!!
    - window 객체의 생성은 제일 먼저되나, load는 제일 나중에 됨
```html
<head>
<script>
  function printResult()
  {
      var x, y;
      x = prompt("x 값을 입력하세요", 0); // 0은 기본값
      y = prompt("y 값을 입력하세요", 0); // 0은 기본값
      
      x = parseInt(x);
      y = parseInt(y);

      btnAdd.type = "text";     // type 속성도 바꿀 수 있음.
      btnAdd.value = x + y;    
      span1.innerText = x + y;  // span에 감싸진 text의 내용을 바뀜.           
  }
  function init() 
  {
    btnAdd.onclick = printResult; // 모든 element가 로드되고, window가 load된 후, 할당함. printResult()를 할당하면, 함수를 바로 호출
  }
  window.onload = init;
</script>
<body>
<input type="button" value="덧셈" id="btnAdd"/>
</body>         
```
- HTML 또는 JavaScript 수정 후, 응답이 없을 때
  - ``F12``로 개발자 옵션을 띄우고, 동작시킨 후, ``console Tab``에서 확인
- HTML 객체 아이디의 명명 방법의 문제
  - 낙타 표기법이 아니라 "-"로 연결
  - JavaScript함수내에서 문제 발생
  - HTML Element ID에 낙타 표기법을 사용하지 말고, "getElementById"을 사용해서 찾아서 사용해라!
```html
<script>
  function init() 
  {
    //btn-add.onclick = printResult; // HTML 명명을 사용시 오류 발생.
    var btnPrint = document.getElementById("btn-print"); 
    btnPrint.onclick = printResult;
  }
  window.onload = init;
</script>
<!--<input type="button" value="덧셈" id="btnAdd"/>-->
<input type="button" value="덧셈" id="btn-add"/>
```
#### 스크립트 코드의 지역화
- init() 함수는 window load시 한번만 호출
  - 굳이 함수를 만들어서 명명할 필요가 있나?
  - ``document.getElementById("btn-print");``를 필요할 때마다, 중복적으로 수행해야 하나?
- 익명함수를 사용할 수 있음
  - btnAdd가 중복 정의 되므로, 익명함수내의 것은 제거 가능
```javascript  
<script>
window.onload = function() {               // 함수 이름이 필요없음. 익명함수
    var btnAdd = document.getElementById("btn-add");
    btnAdd.onclick = function() {          // 함수 이름이 필요없음. 익명함수
        var x, y;
        x = prompt("x 값을 입력하세요", 0); // 0은 기본값
        y = prompt("y 값을 입력하세요", 0); // 0은 기본값
        
        x = parseInt(x);
        y = parseInt(y);

        //var btnAdd = document.getElementById("btn-add"); // 필요없음. 함수 내에서 외부의 btnAdd를 볼수 있음.
        
        btnAdd.type = "text";
        btnAdd.value = x + y;
        span1.innerText = x + y;
    };
}
</script>
```
#### 코드분리와 이벤트 바인딩 방법 두가지
- 현재 방식으로는 스크립트와 HTML을 두 명이 분업화하기가 쉽지 않음
- script 코드를 분리해 놓으면, 분업화 및 재사용성이 높아짐
- index.html 
```html
<script src="index.js"></script> // <script src="index.js"/>와 같이 사용하면, 에러가 남
```    
- index.js
```javascript
window.onload = function() {
    ......
    };
}
```   
- 여러 스크립트 파일을 함께 사용할 때 초기화 함수의 문제
  - 마지막에 대입한 함수만 적용(code3.js)
```html  
<script src="code1.js"></script>
<script src="code2.js"></script>
<script src="code3.js"></script>
```
```javascript    
// code1.js
window.onload = function() {
    alert("code1");
}

// code2.js
window.onload = function() {
    alert("code2");
}

// code3.js
window.onload = function() {
    alert("code3");
}
```
- 이벤트 리스너 함수를 사용하면 여러 개의 함수들을 초기화 함수로 등록 가능
```javascript
// code1.js
window.addEventListener("load", function(){
  alert("code1");
});

// code2.js
window.addEventListener("load", function(){
  alert("code2");
});

// code3.js
window.addEventListener("load", function(){
  alert("code3");
});
```

## 계산기 프로그램 만들기
- ltr, which means left to right and is to be used for languages that are written
  from the left to the right (like English);
- rtl, which means right to left and is to be used for languages that are written
  from the right to the left (like Arabic);
- HTML
```html
<body>
    <section>
        <h1>Ex1 : 계산기 프로그램</h1>
        <div>
            <input id="txt-x" type="text" value="0" dir="rtl"/>
            +
            <input id="txt-y" type="text" value="0" dir="rtl"/>
            <input id="btn-add" type="button" value="="/>
            <input id="txt-sum" type="text" value="0" dir="rtl" readonly/>
        </div>    
    </section>
    <hr/>
</body>
```
- JavaScript
```javascript
window.addEventListener("load", function() {        
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});
```
## 노드 선택 방법 개선하기
#### 하위 엘리먼트 선택하기
- 각각의 element별로 id를 생성하는 것은 관리하기 힘듬
- ``Select_Child_Element.png`` 파일 참조
- 문서내에 동일한 id의 tag가 두 개 존재하면 안됨
```html
<section>
  <h1></h1>
  <ul>
    <li id="num1">번호1</li>
    <li id="num2">번호2</li>
    <li id="num3">번호3</li>
  </ul>  
</section>
```
- 아래의 예제같이, 상위에 id를 부여하고, child들을 찾아가는 것이 좋음
  - ``.getElementsByTagName();``와 ``.getElementsByClassName();``를 이용해서 찾아감
  - 단점은 사용자가 html 상에서 순서를 바꾸면, script도 같이 수정해야 함
```html   
<section id="sec1">
  <h1></h1>
  <ul>
    <li>번호1</li>
    <li>번호2</li>
    <li>번호3</li>
  </ul>  
</section>
```
```javascript
var lis = sec1.getElementsByTagName("li");
lis[0].textContent = "Hello";
lis[1].textContent = "World";
lis[2].textContent = "!!";
```
- getElementsByTagName()을 이용하는 방법
  - html내의 child tag 순서 변경시 문제가 발생
```html
<section id="section2">
    <h1>Ex2 : 엘리먼트 선택방법 개선하기</h1>
    <div>
        <input type="text" value="0" dir="rtl"/>
        +
        <input type="text" value="0" dir="rtl"/>
        <input type="button" value="="/>
        <input type="text" value="0" dir="rtl" readonly/>
    </div>    
</section>
```
```javascript
window.addEventListener("load", function() {        
    var section2 = document.getElementById("section2");
    var inputs = section2.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1]
    var btnAdd = inputs[2];
    var txtSum = inputs[3];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});
```
- getElementsByClassName()을 이용하는 방법
  - id는 중복을 허락하지 않으므로, class를 이용하는 방법
```html
<section id="section2">
    <h1>Ex2 : 엘리먼트 선택방법 개선하기</h1>
    <div>
        <input class="txt-x" type="text" value="0" dir="rtl"/>
        +
        <input class="txt-y" type="text" value="0" dir="rtl"/>
        <input class="btn-add" type="button" value="="/>
        <input class="txt-sum" type="text" value="0" dir="rtl" readonly/>
    </div>    
</section>
```
```javascript
window.addEventListener("load", function() {        
    var section2 = document.getElementById("section2");

    // getElementsByClassName()은 배열을 리턴하므로, "[0]"을 붙여라.
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});
```
#### Selectors API(보편적인 방법)
- JQuery 기능
- ``Selectors_API_Level_1.png`` 참조
- ``querySelector(DOMString selectors);``
  - 하나의 element를 선택해야 하는 경우
- ``querySelectorAll(DOMString selectors);``
  - 여러 개의 element를 선택해야 하는 경우
- 예제: querySelector를 이용
  - class 명을 이용
```html
<section id="section3">
    <h1>Ex3 : Selectors API Level1</h1>
    <div>
        <input class="txt-x" type="text" value="0" dir="rtl"/>
        +
        <input class="txt-y" type="text" value="0" dir="rtl"/>
        <input class="btn-add" type="button" value="="/>
        <input class="txt-sum" type="text" value="0" dir="rtl" readonly/>
    </div>    
</section>
```
```javascript
window.addEventListener("load", function() {        
    var section3 = document.getElementById("section3");

    // Section3 아래의 클래스명이 "txt-x"인 엘리먼트 하나를 찾음
    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});
```
- 예제: querySelector를 이용
  - 속성을 이용
```html
<section id="section4">
    <h1>Ex4 : Selectors API Level1 - Name</h1>
    <div>
        <input name="x" type="text" value="0" dir="rtl"/>
        +
        <input name="y" type="text" value="0" dir="rtl"/>
        <input name="btn-add" type="button" value="="/>
        <input name="sum" type="text" value="0" dir="rtl" readonly/>
    </div>
</section>
```
```javascript
window.addEventListener("load", function() {        
    var section4 = document.getElementById("section4");

    // Section4 아래의 input type의 name 속성이 'x'인 엘리먼트 하나를 찾음
    var txtX = section4.querySelector("input[name='x']");
    var txtY = section4.querySelector("input[name='y']");
    var btnAdd = section4.querySelector("input[name='btn-add']");
    var txtSum = section4.querySelector("input[name='sum']");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});
```

#### Node와 Element Node 그리고 ChildNodes, Children
- ``DOM_Nodes.png`` 참조
- ``childNodes``를 사용하면 줄바꿈 사이에 존재하는 주석과 빈 텍스트들도 child node로 인식해서 input tag의 값이 제대로 표시 안됨
```html
<section id="section5">
    <h1>Ex5 : childNodes를 이용한 노드 선택</h1>
    <div class="box">
        <input />
        <input />
    </div>
</section>
```
```javascript
//Ex5 : childNodes를 이용한 노드 선택
window.addEventListener("load", function() {        
    var section5 = document.querySelector("#section5");
    //var inputs = section5.querySelectorAll("input");
    var box = section5.querySelector(".box");
    var input1 = box.childNodes[0];
    var input2 = box.childNodes[1];

    input1.value = "hello";
    input2.value = "okay";
});
```
- ``children``을 사용하면, tag형태의 node들만 자식으로 취급
  - 텍스트와 커멘트들은 무시하므로, 원하는 input tag에 텍스트의 값이 제대로 표시
```javascript 
//Ex5 : childNodes를 이용한 노드 선택
window.addEventListener("load", function() {        
    var section5 = document.querySelector("#section5");
    var box = section5.querySelector(".box");
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});
```
## Node의 종류와 개체 형식
#### 문서를 구성하는 Node의 종류(Type)들
- ``DOM_Node_Types.png``, ``DOM_Node_Types_1.png`` 참조
- Document(9)
- DocumentType(10)
  - 문서 타입을 개체화할 때 형식을 지정
  - 문서 타입과 관련된 Node들을 사용 
```html  
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML ...>
```
- Element(1): Attr(2), Entity(6), EntityReference(5), Text(3)
- Element는 tag를 사용해서 표시
```html
<textarea><p><font>
```  
- Attr은 tag의 속성을 지정
```html
<textarea rows="30" cols="40"> <!-- rows, cols은 attr -->
```
- EntityReference는 ``&``와 ``;``로 감쌈
```html
&lt;, &gt; &nbsp;
```
- Text는 Tag안에 사용하는 것
```html
<p>뉴렉처</p>
- Comment(8) : 주석
```html
<!-- 주석 -->
```
- CDATASection(4)
  - CDATA로 명시한 블록에는 HTML에서 사용하는 특수 기호들을 맘껏 써도 됨.
```html
<![CDATA[<,>,]]
```
- Notation(12)
  - 속성을 설정하는 것 중에서 표현 형식을 사용할수 있게 해주는 것
```html  
<font color="#ffff00" size="10px">
```  
#### Node 인터페이스
- 참고 사이트
  - https://www.w3.org/TR/2018/WD-dom41-20180201/#introduction-to-the-dom
- Node Interface 정의
```java
interface Node : EventTarget {
  // Node Type 정의
  const unsigned short ELEMENT_NODE = 1;
  const unsigned short ATTRIBUTE_NODE = 2;
  const unsigned short TEXT_NODE = 3;
  const unsigned short CDATA_SECTION_NODE = 4;
  const unsigned short ENTITY_REFERENCE_NODE = 5; // historical
  const unsigned short ENTITY_NODE = 6; // historical
  const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
  const unsigned short COMMENT_NODE = 8;
  const unsigned short DOCUMENT_NODE = 9;
  const unsigned short DOCUMENT_TYPE_NODE = 10;
  const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
  const unsigned short NOTATION_NODE = 12; // historical
  readonly attribute unsigned short nodeType;
  readonly attribute DOMString nodeName;
  ....
  // child관련 변수들
  readonly attribute NodeList childNodes;
  readonly attribute Node? firstChild;
  readonly attribute Node? lastChild;
  readonly attribute Node? previousSibling;
  readonly attribute Node? nextSibling;

  [CEReactions] attribute DOMString? nodeValue;
  [CEReactions] attribute DOMString? textContent; // element가 감싸고 있는 텍스트들

  // Node 조작
  [CEReactions] Node insertBefore(Node node, Node? child);
  [CEReactions] Node appendChild(Node node);
  [CEReactions] Node replaceChild(Node node, Node child);
  [CEReactions] Node removeChild(Node child);
}

interface DocumentFragment : Node {};
interface DocumentType : Node {};
interface Element : Node {};
interface Text : CharacterData {};
interface CharacterData : Node {}; 
...
// Tag와 class를 이용해서 element를 찾는 기능(Document에만 존재)
// 각종 노드 타입을 생성하는 API를 가지고 있다.
interface Document : Node {
  HTMLCollection getElementsByTagName(DOMString localName);
  HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
  HTMLCollection getElementsByClassName(DOMString classNames);
  ...
  [CEReactions, NewObject] Element createElement(DOMString localName, optional ElementCreationOptions options);
  [CEReactions, NewObject] Element createElementNS(DOMString? namespace, DOMString qualifiedName, optional ElementCreationOptions options);
  [NewObject] DocumentFragment createDocumentFragment();
  [NewObject] Text createTextNode(DOMString data);
  [NewObject] CDATASection createCDATASection(DOMString data);
  [NewObject] Comment createComment(DOMString data);
  [NewObject] ProcessingInstruction createProcessingInstruction(DOMString target, DOMString data);
    [NewObject] Attr createAttribute(DOMString localName);
  [NewObject] Attr createAttributeNS(DOMString? namespace, DOMString qualifiedName);
  ...
};
```
- HTML 각종 element의 속성 살펴보기
  - https://www.w3.org/TR/2003/REC-DOM-Level-2-HTML-20030109/html.html 참조

#### 엘리먼트 노드의 속성 다루기
- HTML Tag의 속성과 Javascript 객체의 속성은 거의 일치
  - ``javascrpt_object_attribute.png`` 참조
```html
<input type="text" id="txt1" value="" />
<img src="pic1.jpg" id="img1" />
```
```javascript
var img1 = document.getElementById("img1");
img1.src = "pic2.jpg";
```
- 사용자의 text input을 받아 이미지 변경하기
```html
<section id="section6">
    <h1>Ex6 : 엘리먼트 노드의 속성 변경</h1>
    <div>
        <input class="src-input" />
        <input class="change-button" type="button" value="변경하기"/>
    </div>
    <div>
        <img class="img" src="../images/img1.jpg">
    </div>
</section>
```
```javascript
//Ex6 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function() {        
    var section = document.querySelector("#section6");
    var srcInput = section.querySelector(".src-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        img.src = "../images/" + srcInput.value;
    };
});
```
- Select Box의 선택을 받아 이미지 변경하기
```html
<section id="section6-1">
    <h1>Ex6-1 : 엘리먼트 노드의 속성 변경</h1>
    <div>
        <select class="img-select">
            <option value="img1.jpg">img1.jpg</option>
            <option value="img2.jpg">img2.jpg</option>
            <option value="img3.jpg">img3.jpg</option>
        </select>
        <input class="change-button" type="button" value="변경하기"/>
    </div>
    <div>
        <img class="img" src="../images/img1.jpg">
    </div>
</section>
```
```javascript
//Ex6-1 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function() {        
    var section = document.querySelector("#section6-1");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        img.src = "../images/" + imgSelect.value;
    };
});
```
- HTML5의 datalist의 선택을 받아 이미지 변경하기
  - Text 입력상자내에 select 할 수 있도록 처리됨.
```html
<section id="section6-2">
    <h1>Ex6-2 : 엘리먼트 노드의 속성 변경</h1>        
    <div>
        <input class="src-input" type="text" list="img-list"/>
        <datalist id="img-list">
            <option value="img1.jpg">img1.jpg</option>
            <option value="img2.jpg">img2.jpg</option>
            <option value="img3.jpg">img3.jpg</option>
        </datalist>
        <input class="change-button" type="button" value="변경하기"/>
    </div>
    <div>
        <img class="img" src="../images/img1.jpg">
    </div>
</section>
```
```javascript
//Ex6-2 : 엘리먼트 노드의 속성 변경
window.addEventListener("load", function() {        
    var section = document.querySelector("#section6-2");
    var srcInput = section.querySelector(".src-input");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        img.src = "../images/" + srcInput.value;
    };
});
```
#### 엘리먼트의 스타일 변경
- element.style.XXX 형식
- element.style.XXX의 값은 모두 문자열 형태(숫자 형태는 없음)
```javascript
<script>
function changeImage()
{
  var txt1 = document.getElementById("txt1");
  var img1 = document.getElemtntById("img1");
  img1.src = txt1.value;
  txt1.style.border = "10px solid #0000ff"; // border-width border-style border-color
  txt1.style.width = "100px";
}
</script>
<body>
<form>
  <input id="txt1" />
  <input type="button" onclick="changeImage();" value="변경" />
  <img id="img1" src="test.jpg" style="border:5px solid #ff0000;" />
</form>
```
- border-width만 바꾸고 싶다고, JavaScrpt에서 ``txt1.style.border-width="10px";``라고 못함
  - Javascript에서 ``-``을 명명규칙에서 사용 못함
- 예제: image의 border의 color 속성만 변경하고 싶은 경우
  - 방법1: key 값을 이용하는 방법
  - 방법2: JavaScript내에서 borderColor이라고 CamelCase형태로 사용하면, 자동으로 인식됨
  - ``image``의 ``class`` 속성에 접근하길 원할 때는 예약어인 ``class``를 JavaScript에서 사용 못함
    - className을 이용하여 ``class``에 접근 가능
```html
<section id="section6-3">
    <h1>Ex6-3 : 엘리먼트 노드의 속성 & CSS 속성 변경</h1>        
    <div>
        <input class="src-input" type="text" list="img-list"/>
        <datalist id="img-list">
            <option value="img1.jpg">img1.jpg</option>
            <option value="img2.jpg">img2.jpg</option>
            <option value="img3.jpg">img3.jpg</option>
        </datalist>
        <input type="color" class="color-input" />
        <input class="change-button" type="button" value="변경하기"/>
    </div>
    <div>
        <img class="img" src="../images/img1.jpg" style="border:1px solid red;">
    </div>
</section>
```
```javascript
//Ex6-3 : 엘리먼트 노드의 속성 & CSS 속성 변경
window.addEventListener("load", function() {        
    var section = document.querySelector("#section6-3");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick = function() {
        img.src = "../images/" + srcInput.value;
        //img.style.border-color = "blue"; // 에러 발생
        img.style["border-color"] = colorInput.value; // 방법 1: Key 값을 이용하면 됨.
        img.style.borderColor = colorInput.value; // 방법 2: - 부분을 CamelCase로 사용하면 동작
        console.log(img.className); // img의 class 속성값 출력
    };
});
```
#### 텍스트 노드 추가/삭제 하기
