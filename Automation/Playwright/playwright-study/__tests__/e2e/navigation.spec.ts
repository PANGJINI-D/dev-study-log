import {test, expect} from '@playwright/test'


test('if user visit home and click "Get Started", h1 "introduction" is visible and page title contains "Introduction"', async ({page}) => {
    const startUrl = "https://nextjs.org/";
    const h1 = 'Next.js Docs';

    // 문자열 대신 정규식 사용하는 이유 : 앞뒤에 다른 텍스트가 붙은 경우 유연하게 대처하기 위해.
    const title = /Next.js Docs/;

    // 1) next.js 페이지로 이동한다.
    await page.goto(startUrl);

    // 2) Get Started 링크를 클릭한다.
    // - a 태그(링크)를 가져올 때는 getByRole 메서드를 사용한다.
    //   접근성 롤이 'link'인 요소 중에서 "Get Started"라는 접근 가능한 텍스트를 포함하는 요소를 찾는다.
    // - name은 태그의 속성이 아니라 텍스트의 내용을 의미한다.
    // - 일반 CSS 선택자보다 더 안정적인 기준이 된다.
    await page.getByRole('link', { name: 'Get Started' }).click();

    // 3) 이동한 페이지의 h1이 "Next.js Docs"인지 확인한다.
    // - 접근성 롤이 'heading'이고, heading의 level이 1이다. (h1 태그를 의미)
    //   접근 가능한 이름이 h1 변수(Next.js Docs)와 일치하는 요소를 찾는다.
    // - expect(locator).toBeVisible();
    //   locator 요소가 DOM에 존재하고, visible 상태인지를 검증
    //   보일 때 까지 기다린 후에 테스트를 통과시킨다.
    await expect(page.getByRole('heading', { name: h1, level: 1 })).toBeVisible();

    // 4) 현재 페이지의 <title>이 title 변수(정규식)와 매칭되는지 확인한다.
    // - 정규식을 사용하면 완전히 일치하지 않아도 매칭이 가능하다.
    await expect(page).toHaveTitle(title);
})