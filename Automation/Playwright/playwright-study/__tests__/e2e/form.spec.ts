import { test, expect } from '@playwright/test';
import { start } from 'repl';

test.describe('sign-in', () => {
    test.describe('validation', () => {
        test('If select plan type and fill name, submit enabled', async({page}) => {
            const startUrl = 'https://vercel.com/signup';

            // 1) 회원가입 페이지로 이동한다.
            await page.goto(startUrl);
            
            // 2) Continue 버튼이 disabled 상태인지 확인한다.
            await expect(page.getByRole('button', {name: 'Continue'})).toBeDisabled;

            // 3) plan type을 클릭한다.
            await page.getByText("I'm working on personal projects").click();

            // 4) input 태그에 a를 입력한다.
            //  - page.getByLabel('aria-label')    input 태그를 가져올 때
            //  - .fill('text')                    가져온 로케이터에 내용을 입력할 때
            await page.getByLabel('Your Name').fill('a');

            // 5) Continue 버튼이 사용 가능한 상태가 되는지 검증한다.
            //  - expect(locator).toBeEnabled()
            await expect(page.getByRole('button', {name: 'Continue'})).toBeEnabled();
        })
    })
})