
## Section02_vue_core :: Proxy

### 1️⃣Vue에서 Proxy의 필요성
- Vue에서는 단순히 객체의 값을 가져오고 바꾸는 것을 넘어서, <b>데이터가 변경될 때 자동으로 화면을 업데이트 하는 기능(반응성)</b>이 필요함
- **Proxy**라는 기능을 통해 어떤 데이터가 변경되었는지 데이터를 감시하고, 값이 변경될 때 자동으로 반응할 수 있도록 만듦
<br><br>

### 2️⃣Proxy
- **Vue가 데이터 변경을 감지할 수 있도록 도와주는 것**
- 원래 있는 데이터를 직접 조작하는 것이 아니라, proxy를 통해 조작하도록 "대리인"의 역할을 함

[🔗MDN Proxy Link](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
<br><br>

### 3️⃣Proxy의 기본 구조
```javascript
new Proxy(대상객체, {트랩});
```
- **첫 번째 인자 : 대상객체** <br>
감시할 원본 데이터
- **두 번째 인자 : { 트랩 }** <br>
대상 객체의 동작을 가로채는 함수들(ex. get(), set())

✅**get(target, prop) → 데이터를 읽을 때 실행되는 함수 (접근)**
- target : 원본객체(data)
- prop : 접근한 속성명(a, message 등)

✅**set(target, prop, value) → 데이터를 변경할 때 실행되는 함수(변경)**
- target : 원본객체(data)
- prop : 접근한 속성명(message)
- value : 새로 설정하려는 값
<br><br>
<hr>

### 4️⃣코드 분석
**🙌🏻Code1 : 기본적인 Proxy의 동작**
```html
<div id="app"></div>

<script>
    // date 객체 생성
    let data = {
        a: 10
    }
    
    // data 객체에 Proxy 적용
    var app = new Proxy(data, {
        get() {
            // 객체의 값에 접근했을 때 이쪽이 실행된다.
            console.log('data 값에 접근');
            console.log('data.a : ', data.a);   // 10
        },
        set() {
            // 객체의 값을 변경(갱신)하려 하면 이쪽이 실행된다.
            console.log('data 값 갱신');
            console.log('data.a : ', data.a);   // 10 (실제로 값이 변경되지는 않음)
        }
    })
</script>
```
**🔍get 함수 실행 결과** → 콘솔에 app.a를 입력
- data 값에 접근
- data.a : 10

**🔍set 함수 실행 결과** → 콘솔에 app.a=123123; 을 입력
- data 값 갱신
- data.a : 10

**실제 데이터(data.a)는 변경되지 않음** → set() 내부에서 값을 변경하는 코드가 없기 때문

👉 Proxy를 통해 객체의 동작을 감지할 수 있지만, 실제 데이터 변경을 반영하려면 추가적인 코드가 필요함
<br><br><hr>

**🙌🏻Code2 : Proxy를 활용한 데이터 반응형 렌더링**
```html
<div id="app">
    <!--이곳에 뭐가 렌더링 되는지 확인-->
</div>

<script>
    // date 객체 생성
    let data = {
        message: 'hello'
    }


    function render(something) {
        const div = document.querySelector('#app');
        div.innerHTML = something;
    }
    
    var app = new Proxy(data, {
        get() {
            // 객체의 값에 접근했을 때 이쪽이 실행된다.
            console.log('data 값에 접근', data.message)
        },
        set(target, prop, newValue) {
            // 객체의 값을 변경(갱신)하려 하면 이쪽이 실행된다.
            console.log('data 값 갱신')

            console.log('target:', target); //{message: 'hello'} : data
            console.log('prop:', prop);     //message : data객체의 키
            console.log('newValue:', newValue); //변경한 값

            // 객체의 속성 값 동적으로 변경하기
            // data["message"]="newValue"로 이해하면 된다.
            target[prop] = newValue;
            console.log('message : ', data.message);    //'hello' -> 값 변경 없음
            render(newValue);
        }
    })
</script>
```
**🔍실행 결과**
- 처음 화면을 로드하면 아무것도 렌더링 되지 않음
- 콘솔에 app.message=123123123;을 입력
- 콘솔에 "data 값 갱신", target, prop, newValue의 값이 각각 출력
- <div id="app"> 내부에 123123123이 렌더링되어 화면에 출력됨

**👉 Proxy를 활용하여 데이터가 변경될 때 자동으로 화면이 업데이트 되도록 만들 수 있음** <br>

💡 set 함수 내에서 data.message를 찍어보면 원본 객체 그대로 'hello'가 출력된다. **Proxy의 목적은 원본 객체의 값을 변경하는 것이 아니다. 원본 객체의 동작을 가로채서 제어하는 것이다.**
