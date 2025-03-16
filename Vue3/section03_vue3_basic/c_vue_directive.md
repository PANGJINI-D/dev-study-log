
## Section03_vue_basic :: Vue Directives

### 1️⃣Vue Directive(뷰 디렉티브)
- Vue에서 제공하는 특수 속성
- HTML 요소의 동작을 확장하거나 조작할 수 있도록 도와줌
- <b>v- 접두사</b>를 사용
- Vue가 특정 방식으로 요소를 업데이트 하도록 지시함

[🔗Vue3 공식문서 directive](https://ko.vuejs.org/api/built-in-directives)
<br><br><br>
---

### 2️⃣Vue Directive 종류
```
v-for       // 리스트 렌더링

```


### 💡v-for (리스트 렌더링)
**배열이나 객체를 순회**하며 데이터를 반복해서 렌더링할 때 사용
```html
<div v-for="item in items">
  {{ item.text }}
</div>
```
<br>

**배열의 index나 객체의 key에 접근**해야 하는 경우
```html
<div v-for="(item, index) in items">
    {{ index }}: {{ item }}
</div>
<div v-for="(value, key) in object">
    {{ key }}: {{ value }}
</div>
<div v-for="(value, name, index) in object"></div>
```
<br>

v-for의 기본 동작은 엘리먼트를 이동하지 않고 제자리에 패치(patch)함. **강제로 엘리먼트를 재정렬하려면, 특수 속성 key를 사용**하여 순서 지정을 위한 힌트를 제공해야 함.
```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```



**👉code 1. 배열의 요소를 하나씩 li 태그에 출력하기**
```html
<body>
    <div id="app">
        <p>v-for로 배열의 요소에 접근</p>
        <ul>
            <li v-for="item in items">
                {{ item }}
            </li>
        </ul>

        <p>v-for에서 index 사용하기</p
        <ul>
            <li v-for="(fruit, index) in fruits">
                {{index}} : {{fruit}}
            </li>
        </ul>
    </div>
</body>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    Vue.createApp({
        data() {
            return {
                items: ['삼성', '네이버', '인프런'],
                fruits: ['사과', '바나나', '딸기']
            };
        }
    }).mount('#app');
</script>
```
