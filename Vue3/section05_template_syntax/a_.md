## Section04_template_syntax

### 1️⃣템플릿 문법
- 뷰의 템플릿 문법이란 **뷰로 화면을 조작하는 방법**을 의미함
- 템플릿 문법은 크게 **데이터 바인딩**과 **디렉티브**로 나뉨  

[🔗Vue3 공식문서: 템플릿 문법](https://ko.vuejs.org/guide/essentials/template-syntax)
<br><br>



### 2️⃣데이터 바인딩
- 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법
- 가장 기본적인 데이터 바인딩 방식은 **텍스트 보간법(Mustache)**  

- **이중 중괄호 내의 message는 해당 컴포넌트 인스턴스의 message 속성값(Hello world!)으로 대체**
```html
    <div>{{ message }}</div>
```

```javascript
    new Vue({
        data: {
            message: 'Hello world!'
        }
    })
```

---
<br>



### 3️⃣디렉티브 Directive
- **속성 바인딩**
- 디렉티브는 뷰로 화면의 요소를 더 쉽게 조작하기 위한 문법임

1. v-bind
2. v-on
3. v-model
4. v-if
5. v-for