
## Section04_vue_component :: Component Communication

### 1️⃣Props(속성, Properties)
- component 간 데이터를 전달할 수 있는 component 통신 방법
- **부모 컴포넌트에서 특정 데이터를 설정하고, 자식 컴포넌트에서 이를 받아서 사용**
<br><br>


### 2️⃣Props 사용
**✅부모 컴포넌트에서 데이터 정의**
```javascript
data() {
    return {
        // 이 데이터를 자식 컴포넌트로 전달함
        데이터명 : "부모 컴포넌트의 데이터 내용"
    }
}
```
<br>

**✅부모에서 자식 컴포넌트로 데이터 전달**
- 자식 컴포넌트에서 **v-bind를 사용**하여 부모 컴포넌트의 데이터를 자식 컴포넌트의 props로 전달
```html
<자식컴포넌트명 v-bind:프롭스_속성명="상위_컴포넌트의_데이터명"></자식컴포넌트명>
```
<br>

**✅자식 컴포넌트에서 props 받기**
- **자식 컴포넌트에서 props 옵션을 사용**하여 부모로부터 데이터를 받을 수 있음
```javascript
props: ['프롭스_속성명']
```
<br>

**🙌🏻두 개의 Props 넘기기 예제**
```html
<body>
    <div id="app">
        <!-- 부모 컴포넌트에서 자식 컴포넌트로 props를 전달 -->
        <!-- v-bind를 사용하여 appTitle 데이터를 title이라는 이름으로 전달 -->
        <app-header v-bind:title="appTitle" v-bind:sub-title="appSubTitle"></app-header>
    </div>
</body>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    Vue.createApp({
        // 부모 컴포넌트의 데이터
        data() {
            return {
                appTitle: "부모 컴포넌트의 데이터", // 이 데이터를 자식 컴포넌트로 전달
                appSubTitle: "부모 컴포넌트의 두번째 데이터"
            }
        },
        // 자식 컴포넌트 등록
        components: {
            'app-header': {
                // 템플릿에서 props로 전달받은 title을 사용
                template: '<h1>{{ title }}</h1><h3>{{ subTitle }}</h3>',
                // props 정의 (배열 형태로 작성)
                props: ['title', 'subTitle']
            }
        }
    }).mount('#app');
</script>
```
- **props는 읽기 전용**이며, 변경이 필요하면 data()나 computed를 사용해야 함
- **props 이름이 카멜 표기법인 경우, HTML에서 v-bind를 할 때 케밥 표기법**으로 사용해야 함 (props명 subTitle -> v-bind:sub-title)
---
<br>



### 3️⃣Event Emit (이벤트 발생)
- 컴포넌트의 통신 방법 중 **하위 컴포넌트에서 상위 컴포넌트로 통신**하는 방식
<br><br>

**✅emit 사용하기** <br>
**하위 컴포넌트의 메서드**나 라이프사이클 훅과 같은 곳에서 emit 사용
```javascript
// 하위 컴포넌트의 내용
this.$emit('이벤트 명');
```
    
**상위 컴포넌트의 템플릿에서 해당 이벤트 수신**
```html
<!-- 상위 컴포넌트의 템플릿 -->
<div id="app">
  <child-component v-on:이벤트 명="상위 컴포넌트의 메서드 명"></child-component>
</div>
```
<br>



### 4️⃣emit 예제
```html
<body>
    <div id="app">
        <!-- <app-contents v-on:이벤트명="상위 컴포넌트의 메서드명"></app-contents> -->
        <app-contents v-on:refresh="showAlert"></app-contents>
    </div>
</body>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
    var appContents = {
        template: `
            <p>
                <button v-on:click="sendEvent">갱신</button>
            </p>
        `,
        methods: {
            sendEvent() {
                // refresh라는 이벤트를 자식 컴포넌트에서 부모 컴포넌트로 올릴 것
                this.$emit('refresh');
            }
        }
    }

    // 부모 컴포넌트
    Vue.createApp({
        methods: {
            showAlert() {
                alert('갱신되었습니다!!');
            }
        },
        // 자식 컴포넌트 생성
        components: {
            'app-contents': appContents
        }
    }).mount('#app');
</script>
```
<br>

**4-1. 자식 컴포넌트에서 이벤트 발생($emit)**
- <b>this.$emit('refresh')</b>를 사용하여 refresh라는 이벤트를 부모 컴포넌트로 전달함
- 이 이벤트는 부모에서 v-on:refresh로 감지할 수 있음
```javascript
methods: {
    sendEvent() {
        this.$emit('refresh'); // 부모에게 'refresh' 이벤트를 전달
    }
}
```
<br>

**4-2. 부모 컴포넌트에서 이벤트 수신(v-on:이벤트명)**
- v-on:refresh="showAlert"를 사용하여 자식이 보낸 refresh 이벤트를 감지
- **refresh 이벤트가 발생하면 showAlert() 메서드를 실행**
```html
<app-contents v-on:refresh="showAlert"></app-contents>
```
<br>

**4-3. 부모 컴포넌트의 이벤트 정의**
- showAlert()는 자식이 refresh 이벤트를 발생시키면 실행되는 이벤트
```javascript
methods: {
    showAlert() {
        alert('갱신되었습니다!!');
    }
}
```
<br>

**🚨Emit 사용시 주의**
1. **이벤트명은 케밥 표기법으로 작성** <br>
this.$emit('custom-event') (O) <br>
this.$emit('customEvent')  (X, 이벤트 리스너에 인식이 안될 수 있음)

2. **emit으로 데이터 전달 가능**
```javascript
this.$emit('이벤트명', '새로운 데이터')

<app-contents v-on:이벤트명="handleUpdate"></app-contents>

methods: {
    handleUpdate(data) {
        console.log('전달된 데이터: ', data);
    }
}
```
