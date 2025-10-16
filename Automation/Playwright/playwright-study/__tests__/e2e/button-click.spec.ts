import { test, expect } from '@playwright/test'

// 로그인 페이지에서 로그인 버튼을 클릭하는 테스트
test.describe('button click', () => {
    test('click login button and close alert modal', async({ page }) => {
        const startUrl = 'https://dev.sankun.com/user/login';
        const closeBtn = page.locator('.pop-close-btn[onclick*="closePop"]');

        // 1) 로그인 페이지 진입
        await page.goto(startUrl);

        await test.step('click login button', async() => {

            // 2) 로그인 버튼을 클릭한다.
            //  - 플로팅 버튼처럼 버튼 요소에 text가 없는 경우에는
            //  - aria-label 속성이 텍스트와 똑같이 작동한다.
            await page.getByRole('button', {name:  '로그인'}).click();
    
            // 3) 모달에서 확인 버튼이 노출된다.
            //  - div, span 태그를 가져올 때는 getByText('text') 메서드를 사용한다.
            // await expect(page.getByText('확인')).toBeVisible();
            await expect(closeBtn).toBeVisible();
        });

        await test.step('if click 확인, close alert', async() => {
            const alertModal = page.locator('#loginCommonPop');

            // 4) 확인 버튼을 클릭한다.
            await closeBtn.click();

            // 5) 모달이 종료되는 것을 확인한다.
            //  - expect(locator).not.toBeVisible   요소가 diaplay:none으로 숨겨진 경우
            //  - expect(locator).toHaveCount(0)    요소가 DOM에서 아예 삭제된 경우
            //  - expect(locator).toBeHidden()      위의 두 가지 경우를 모두 커버함
            await expect(alertModal).not.toBeVisible();

        });

    });
});