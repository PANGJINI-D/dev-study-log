## Section05 Template Syntax

### 1️⃣템플릿 문법
- 뷰의 템플릿 문법이란 **뷰로 화면을 조작하는 방법**을 의미함
- 템플릿 문법은 크게 **데이터 바인딩**과 **속성 바인딩**으로 나뉨  

[🔗Vue3 공식문서: 템플릿 문법](https://ko.vuejs.org/guide/essentials/template-syntax)  
<br><br>



### 2️⃣데이터 바인딩
- 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법
- 가장 기본적인 데이터 바인딩 방식은 **텍스트 보간법(Mustache)**  
<br>

**✅텍스트 보간법 예제**
- **이중 중괄호 내의 message는 해당 컴포넌트 인스턴스의 message 속성값(Hello world!)으로 대체**
```html
    <div>{{ message }}</div>
```

```javascript
    createApp({
        data() {
            return {
                message: 'Hello world!'
            }
        }
    }).mount('#app');
```
---
<br>



### 3️⃣속성 바인딩
- **디렉티브 Directive**를 사용
- 디렉티브는 v- 접두사를 가지며, DOM에 특별한 반응을 적용할 수 있게 해주는 Vue의 특성 <br><br>

- **주요 디렉티브**  

    | 디렉티브  | 설명                                                   |
    |-----------|--------------------------------------------------------|
    | `v-bind`  | HTML 속성을 Vue 인스턴스 데이터와 연결                |
    | `v-on`    | 이벤트 리스너 연결                                     |
    | `v-model` | 양방향 데이터 바인딩                                   |
    | `v-if`    | 조건에 따라 DOM 요소 렌더링 여부 결정                 |
    | `v-for`   | 리스트 렌더링                                          |
    | `v-show`  | 조건에 따라 요소를 표시하거나 숨김 (DOM은 남아있음)   |
<br>


**✅속성 바인딩 예제**  
**v-bind** 또는 **: 축약형**을 사용하여 HTML 속성에 데이터를 바인딩 할 수 있음

```html
    <!-- 클래스 바인딩 -->
    <!-- div 태그의 class 속성값은 primary가 된다.-->
    <div v-bind:class="textClass">데이터 바인딩 예제</div>

    <!-- 아이디 + 스타일 바인딩 -->
    <!-- section 태그의 id 속성값이 tab1이 되고, sectionStyle 속성 스타일이 적용된다.-->
    <section v-bind:id="sectionId" :style="sectionStyle">
        반갑습니다.
    </section>
```

```javascript
    createApp({
        data() {
            return {
                textClass: 'primary',
                sectionId: 'tab1',
                sectionStyle: { color: 'red' },
            }
        }
    }).mount('#app');
```
<br>


**✅v-if와 v-show의 차이**  
- **v-if**는 조건이 false이면 **DOM에 렌더링 하지 않음**  
- **v-show**는 조건에 맞지 않아도 **DOM에 렌더링은 하지만, display:none**으로 숨김
- v-if는 조건에 따라 계속 DOM을 생성하고 제거하기 때문에 **자주 토글되는 경우에는 v-show가 효율적**

```HTML
    <!-- v-if 예제 -->
    <p v-if="login">로그인되었습니다.</p>
    <p v-else>로그인하세요.</p>

    <!-- v-show 예제 -->
    <p v-show="login">로그인되었습니다.</p>

    <button v-on:click="userLogin">로그인</button>
```

```javascript
    createApp({
        data() {
            return {
                login: false
            }
        },
        methods: {
            userLogin() {
                this.login = !this.login;
            }
        }
    }).mount('#app');
```