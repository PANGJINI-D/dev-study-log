
## Section03_vue_basic :: instance option

### 1️⃣Vue3 Instance Option
- Vue 어플리케이션을 생성할 때 다양한 옵션들을 정의할 수 있음
- <b>컴포넌트 옵션 속성, 인스턴스 옵션 속성, 옵션 api</b> 등으로 부름

```javascript
Vue.createApp({
  template: ,     // 화면을 구성하는 요소(HTML, CSS 등)
  data: ,         // Vue의 반응성(reactivity)이 반영된 데이터 속성
  methods: ,      // 이벤트 및 동작을 제어하는 메서드
  created: ,      // Vue의 라이프사이클 훅
  watch: ,        // 데이터 변경 감지를 위한 속성
});
```

**💡옵션 설명**
1. el : 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그)<br>
Vue3에서는 el 속성을 사용하지 않고 .mount( )를 사용
2. **template** : 화면에 표시할 요소 (HTML, CSS 등)
3. **data** : 뷰의 반응성(Reactivity)이 반영된 데이터 속성
4. **methods** : 화면의 동작과 이벤트 로직을 제어하는 메서드
5. **created** : 뷰의 라이프사이클과 관련된 속성
6. **watch** : data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성

[🔗Vue 인스턴스 속성 API](https://joshua1988.github.io/vue-camp/vue/instance.html#%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B3%E1%84%8B%E1%85%B4-%E1%84%89%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC-api%E1%84%83%E1%85%B3%E1%86%AF)
<br><br><br>

---

### 2️⃣Vue Instance의 methods 옵션
**methods의 역할**
- Vue 인스턴스 내에서 동작하는 함수를 정의하는 곳
- this 키워드를 사용하여 data 속성에 접근할 수 있음
- 이벤트 핸들러로 사용하여 v-on 디렉티브를 통해 호출할 수 있음
- methods 내부에서는 data의 값을 직접 변경할 수 있음
<br><br>

**methods 내부에서 화살표 함수 주의**
- 화살표 함수를 사용하면 <b>this가 Vue Instance가 아니라 undefined</b>가 될 수 있음. 따라서 method 내부에서는 일반 함수 표현식을 사용하는 것을 권장.
<br><br>

**🙌🏻code 1. 버튼을 클릭하여 count를 증가시키는 예제**
```html
<body>
    <div id="app">
        <p>{{ count }}</p>
        <!-- 버튼을 클릭하면 addCount() 메서드가 실행됨 -->
        <button v-on:click="addCount">+</button>
    </div>
</body>

<script>
  // Vue 애플리케이션 생성
    Vue.createApp({
        // data() 함수: Vue에서 사용하는 반응형 데이터 정의
        data() {
            return {
                count: 0  // count 초기값 0으로 설정
            }
        },
        // methods 객체: Vue 인스턴스에서 사용할 메서드 정의
        methods: {
            // addCount() 함수: count 값을 증가시키는 기능
            addCount() {
                // this는 Vue 인스턴스 자체를 가리킴
                this.count++;
            }
        }
    }).mount('#app');
</script>
```

[🔗methods 옵션 응용 예시](https://joshua1988.github.io/vue-camp/syntax/methods.html#%E1%84%86%E1%85%A6%E1%84%89%E1%85%A5%E1%84%83%E1%85%B3-%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B3-%E1%84%92%E1%85%A7%E1%86%BC%E1%84%89%E1%85%B5%E1%86%A8)