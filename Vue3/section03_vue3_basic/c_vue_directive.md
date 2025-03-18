
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
v-for                       // 리스트 렌더링
v-if / v-else / v-else-if   // 조건부 렌더링
v-show                      // 조건부 표시
v-bind                      // 속성 바인딩
v-model                     // 양방향 바인딩
v-on                        // 이벤트 처리
v-html                      // HTML 출력

```


### `2-1) v-for (리스트 렌더링)`
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
<br>

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
**출력결과**

v-for로 배열의 요소에 접근
- 삼성
- 네이버
- 인프런

v-for에서 index 사용하기
- 0:사과
- 1:바나나
- 2:딸기
<br><br>



### `2-2) v-if / v-else / v-else-if (조건부 렌더링)`
- <b>v-if</b>는 <b>조건이 참일 때만 요소를 렌더링</b>
- v-else-if와 v-else를 함께 사용할 수 있음

```html
<body>
    <div id="app">
        <p v-if="score >= 90">우수한 성적입니다!</p>
        <p v-else-if="score >= 70">좋은 성적입니다!</p>
        <p v-else>더 노력하세요!</p>
    </div>
</body>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    Vue.createApp({
        data() {
            return {
                score: 85
            };
        }
    }).mount('#app');
</script>
```
**출력결과**

좋은 성적입니다!
<br><br>



### `2-3) v-show (조건부 표시)`
- v-show는 <b>display: none을 사용하여 요소를 감출</b> 수 있음
- v-if는 조건이 false일 경우 아무 것도 렌더링 하지 않음. 하지만 v-show는 v-if와 달리 요소를 자체를 DOM에서 제거하지는 않음. <b>css를 기반으로 화면에 보이지 않도록 전환될 뿐, 항상 렌더링은 되는 것</b>

```html
<body>
    <div id="app">
        <button @click="isVisible = !isVisible">토글</button>
        <!-- isVisible이 false가 될 때마다 display:none 속성이 p 태그에 적용됨 -->
        <p v-show="isVisible">이 문장은 보였다가 사라집니다.</p>
    </div>
</body>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    Vue.createApp({
        data() {
            return {
                isVisible: true
            };
        }
    }).mount('#app');
</script>
```
**출력 결과**

토글 버튼을 누를 때 마다 '이 문장은 보였다가 사라집니다.' 문장이 사라졌다 나타남
<br><br>



### `2-4) v-bind (속성 바인딩)`
- v-bind는 <b>HTML 속성에 Vue 데이터 속성을 동적으로 연결할 때 사용</b>
- <b>축약하여 :(콜론)</b>으로 사용 가능(:src="imgSrc")
<br><br>

**👉v-bind를 사용하지 않은 일반적인 html**
```html
<img src="https://vuejs.org/images/logo.png" alt="Vue 로고">
```
- <b>이미지 경로가 고정되어 변경할 수 없음</b>
- v-bind를 사용하면 Vue의 데이터 값에 따라 동적으로 변경할 수 있음
- v-bind는 <b>데이터 값이 변경되면, 즉시 HTML 속성도 업데이트</b>됨
<br><br>

**👉v-bind를 적용한 html**
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<body>
    <div id="app">
      <!-- v-bind를 사용하여 이미지 경로를 동적으로 설정 -->
      <img v-bind:src="imageSrc" alt="Vue 로고">
  
      <!-- 버튼의 disabled 속성을 Vue 데이터와 연결 -->
      <button v-bind:disabled="isDisabled">클릭 불가능</button>
  
      <!-- v-bind는 축약형(:)으로 사용 가능 -->
      <a :href="linkUrl">Vue 공식 사이트</a>
    </div>
  </body>
  
  <script>
    Vue.createApp({
      data() {
        return {
            // 동적으로 변경 가능한 이미지 URL
            imageSrc: 'https://vuejs.org/images/logo.png', 
            // true이면 버튼이 비활성화됨
            isDisabled: true, 
            // 링크 주소
            linkUrl: 'https://vuejs.org/' 
        };
      }
    }).mount('#app');
  </script>
```
<br><br>



### `2-5) v-model (양방향 바인딩)`
- v-model은 <b>form 입력 요소의 값을 Vue 데이터와 자동으로 동기화</b>해줌
- form태그의 유형은 <b>input, textarea, select</b> 세 가지로 제한됨
<br><br>

**👉기존 HTML**
```html
<input id="nameInput" placeholder="이름을 입력하세요">
<p id="nameDisplay"></p>

<script>
  document.getElementById('nameInput').addEventListener('input', function(event) {
    document.getElementById('nameDisplay').innerText = event.target.value;
  });
</script>
```
- javascript로 이벤트 리스너를 직접 추가해야 하는 번거로움이 있음
- v-model을 사용하면 더 간단하고 직관적으로 데이터를 동기화 가능
<br><br>

**👉v-model을 적용한 HTML**
```html
<body>
  <div id="app">
    <!-- 입력 값이 Vue 데이터(name)와 자동 동기화 -->
    <input v-model="name" placeholder="이름을 입력하세요">
    
    <p>입력한 이름: {{ name }}</p>
  </div>
</body>

<script>
  Vue.createApp({
    data() {
      return {
        name: '' // 입력된 값이 저장될 데이터
      };
    }
  }).mount('#app');
</script>
```
**출력 결과**
- 사용자가 input 태그에 이름을 입력하면, name 데이터가 자동으로 업데이트됨
- 동시에 {{ name }}도 즉시 업데이트 되어 입력한 내용이 바로 화면에 뿌려짐