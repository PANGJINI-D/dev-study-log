
## Section03_vue_basic :: instance

### 1️⃣Vue3 Application Instance
- Vue에서 어플리케이션을 실행하려면 <b>Application Instance(앱 인스턴스)</b>를 생성해야 함

[🔗Vue3 공식문서 Application Instance](https://ko.vuejs.org/guide/essentials/application)
<br><br>


### 2️⃣Instance 생성하기
```javascript
    Vue.createApp().mount('#app');
```
- **createApp( )함수** : Vue 인스턴스 생성
- **mount( )** : HTML 요소에 Vue 앱을 연결
<br><br>


### 3️⃣코드 분석
```html
<!--Vue를 사용하기 위한 CDN-->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<body>
    <div id="app">
        {{message}}
    </div>
</body>

<script>
    //vue3 application instance
    Vue.createApp({
        data() {
            return {
                message: 'hi'
            }
        }
    }).mount('#app');   //id값이 app인 모든 태그 지칭함
</script>
```
1. **Vue 어플리케이션 생성**<br>
<b>Vue.createApp({...})</b>을 사용하여 Vue 인스턴스를 생성

2. **data() 함수로 반응형 데이터 설정**<br>
data( ) 함수 내부에 message 변수를 선언하여 Vue가 관리하도록 함<br>
값이 변경되면 자동으로 화면이 업데이트 됨

3. **HTML 요소에 Vue 앱 연결**<br>
<b>.mount('#app')</b>을 사용하여 id="app"인 요소와 Vue 어플리케이션을 연결<br>
Vue가 이 요소 안의 내용을 관리하여 {{message}}가 hi로 변환되어 화면에 표시됨