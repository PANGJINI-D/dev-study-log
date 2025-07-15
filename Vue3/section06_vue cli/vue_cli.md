## Section06 Vue CLI

### 1️⃣Vue3 CLI로 프로젝트 생성하기

- **Step 1. Vue 설치하기**  
    vs 코드 터미널에서 npm install -g @vue/cli 명령어 입력  

- **Step 2. Vue 프로젝트 생성하기(강의 기준)**  
    1. vue create 프로젝트명 명령어 입력
    2. ([Vue 3] babel, eslint) 선택  
    3. Use Yarn  
    4. cd 생성한_프로젝트명
    5. yarn serve  
<br>

    [🔗Vue CLI 공식문서](https://cli.vuejs.org/)  
    [🔗NPM 소개문서](https://joshua1988.github.io/webpack-guide/build/node-npm.html#node-js%EC%99%80-npm)  
    [🔗NPM 무료강의](https://www.inflearn.com/courses/lecture?courseId=324959&courseSlug=%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9&type=LECTURE&unitId=37371&subtitleLanguage=ko)  
    [🔗Yarn과 NPM](https://joshua1988.github.io/vue-camp/package-manager/npm-vs-yarn.html)  

---
<br><br>


### 2️⃣Vue 프로젝트 폴더 구조

- **package.json**
- **vue.config.js**
- **public > index.html**
얘가 화면에 보여진다.
이 안에 표시되는 결과물이 Vue CLI로 빌드된 결과물이다.
- **src > main.js**
이 안의 코드가 index.html의 'app'에 표시됨

    [🔗dependencies와 devDependencies](https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#%EA%B0%9C%EB%B0%9C%EC%9A%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%99%80-%EB%B0%B0%ED%8F%AC%EC%9A%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EA%B5%AC%EB%B6%84%ED%95%98%EA%B8%B0)  
    [🔗ESLint와 프리티어](https://joshua1988.github.io/web-development/vuejs/boost-productivity/)  
    [🔗Vue CLI API 문서](https://cli.vuejs.org/config/#vue-config-js)  

---
<br><br>



### 3️⃣라이브러리, 파일 임포트 방식 설명

    [🔗Import 문법 안내 문서](https://joshua1988.github.io/vue-camp/es6+/modules.html#%E1%84%86%E1%85%A9%E1%84%83%E1%85%B2%E1%86%AF%E1%84%92%E1%85%AA%E1%84%8B%E1%85%B4-%E1%84%91%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%AD%E1%84%89%E1%85%A5%E1%86%BC)  

---
<br><br>



### 4️⃣페이지 로딩 과정 분석  

    [Vue Loader](https://vue-loader.vuejs.org/)  
    [Loader?](https://joshua1988.github.io/webpack-guide/concepts/loader.html)  
    [Webpack?](https://joshua1988.github.io/webpack-guide/webpack/what-is-webpack.html)  