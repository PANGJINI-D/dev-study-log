
## Section01 :: Vue.js 소개

### 1️⃣Vue.js
- 리액트와 더불어 실무에서 가장 많이 사용되는 프론트엔드 개발 라이브러리
- 개발 생산성이 높고, 자바스크립트 지식이 크게 요구되지 않음
- 간단한 UI 개발, 라우팅, SSR 등의 애플리케이션 레벨 개발을 지원하는 프레임워크

**💡SSR(서버 사이드 렌더링)**
[SSR 개념 정리](https://joshua1988.github.io/vue-camp/nuxt/ssr.html)

**💡Nuxt.js**
[Nuxt.js 소개](https://joshua1988.github.io/vue-camp/nuxt/intro.html)

<br>

---

### 2️⃣Vue2와 Vue3의 차이점
- 라이브러리 내부 로직 재작성(타입스크립트 기반으로)
- 주요 개발 도구들 변경
	ex. 뷰 개발자 도구, VSCode 플러그인(Volar), Vite 기반 프로젝트 생성 등
- 컴포지션 api, teleport 등 새로운 문법 지원
- 리액티비티 시스템 기반 API 변경
- 공식 문서 변경(Vue2, Vue3 공식문서 다름)

**💡TypeScript**
[TypeScript 소개](https://joshua1988.github.io/ts/why-ts.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80)

**💡웹팩(Webpack)**
[Webpack 개념 정리](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html
)

<br>

---

### 3️⃣Vue3 코드 작성 방식
Vue3에서는 아래 두 가지 코드 작성 방식이 있음
- **옵션 API**
- **컴포지션 API**

초보자는 옵션 API부터 시작하는 것이 좋음<br>
컴포넌트 재사용성을 고민하는 단계라면 컴포지션 API 사용 추천

<br>

---

### 4️⃣Vue.js 개발 환경 구성 / 개발자 도구 안내
- **필수 설치 도구**
<br>VSCode, Node.js
- **VSCode 확장 프로그램**
<br>Vue VSCode Snippets
<br>Vetur (Vue2 사용 시, 뷰 확장 플러그인)
<br>Volar (Vue3 사용 시)
- **크롬 확장 프로그램**
<br>[Vue.js dev tools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 

<br>

---

### 5️⃣강의 자료
**웹교안** 
[🔗링크](https://joshua1988.github.io/vue-camp/)

**깃허브**
[🔗링크](https://github.com/joshua1988/learn-vue-js)

<br>

---

### 6️⃣Hello World 출력하기
```html
<!--web에 hi라는 문자열 출력하기-->

<!--Vue를 사용하기 위한 CDN-->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!--#app 입력 후 탭키 누르면 id가 app인 div 태그가 생성-->
<div id="app">
    {{message}}
</div>

<script>
    Vue.createApp({
        data() {
            return {
                message: 'hi'
            }
        }
    }).mount('#app');   //id값이 app인 모든 태그 지칭함
</script>
```
