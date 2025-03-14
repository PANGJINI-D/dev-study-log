
## Section02_vue_core :: Reactivity(반응성)

### 1️⃣Reactivity
**데이터가 바뀌면 자동으로 화면이 변경되는 기능**
<br><br>

### 2️⃣Reactivity의 필요성
- 값이 변경될 때마다 개발자가 직접 화면을 업데이트 해줄 필요가 없어짐
- **직접 DOM을 조작하지 않아도 자동으로 화면 업데이트가 가능해짐**
<br><br>

**🙌🏻코드01. 일반적인 js(반응성X)**
```html
<div id="app">
  <p id="count">0</p>
  <button onclick="increase()">+1 증가</button>
</div>

<script>
  let count = 0;

  function increase() {
    count++;
    document.getElementById('count').innerText = count; // 직접 화면 변경
  }
</script>
```
- 버튼을 누르면 count값이 증가함
- 직접 document.getElementById로 화면을 변경해야 해서 불편함
<br><br>

**🙌🏻코드02. Vue의 반응형 코드**
```html
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="count++">+1 증가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0); // 반응형 변수 선언
</script>
```
- count값이 변경되면 Vue가 자동으로 화면을 바꿔줌
<br><br><br>

---

### 3️⃣Vue에서 Reactivity 구현하기
**1. ref( ) : 간단한 숫자나 문자열을 반응형으로 만들 때**

```html
<script setup>
import { ref } from 'vue';

const message = ref("안녕하세요!");

function changeMessage() {
  message.value = "반가워요!";
}
</script>

<template>
  <p>{{ message }}</p>
  <button @click="changeMessage">변경</button>
</template>
``` 
<br>

**2. reactive( ) : 객체를 반응형으로 만들 때**

```html
<script setup>
import { reactive } from 'vue';

const person = reactive({
  name: "홍길동",
  age: 25
});

function changeAge() {
  person.age++; // 값 변경
}
</script>

<template>
  <p>이름: {{ person.name }}</p>
  <p>나이: {{ person.age }}</p>
  <button @click="changeAge">나이 증가</button>
</template>
```