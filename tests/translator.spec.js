const { test, expect } = require('@playwright/test');

const testCases = [
    // --- POSITIVE FUNCTIONAL TESTS (25) ---
    { id: 'Pos_Fun_0001', input: 'Api adha muhudha balanna yamu', expected: 'අපි අද මුහුද බලන්න යමු' },
    { id: 'Pos_Fun_0002', input: 'karunaakarala mata udhavvak karanna.', expected: 'කරුනාකරල මට උදව්වක් කරන්න.' },
    { id: 'Pos_Fun_0003', input: 'mama iyee idhan kaevee naehae, haeebaeyi badagini naehae.', expected: 'මම ඉයේ ඉදන් කැවේ නැහැ, හෑබැයි බඩගිනි නැහැ.' },
    { id: 'Pos_Fun_0004', input: 'mata Rs. 1000k oonee.', expected: 'මට Rs. 1000ක් ඕනේ.' },
    { id: 'Pos_Fun_0005', input: 'api iiyee english film ekak baeluvaa.', expected: 'අපි ඊයේ english film එකක් බැලුවා.' },
    { id: 'Pos_Fun_0006', input: 'ela kiri machan, siraavata.', expected: 'එල කිරි මචන්, සිරාවට.' },
    { id: 'Pos_Fun_0007', input: 'api iiye cafe ekata giyemu.', expected: 'අපි ඊයෙ cafe එකට ගියෙමු.' },
    { id: 'Pos_Fun_0008', input: 'meeka 2026/12/25 venakan expired date eka thiyenavaa.', expected: 'මේක 2026/12/25 වෙනකන් expired date එක තියෙනවා.' },
    { id: 'Pos_Fun_0009', input: 'vahaama methanata enna.', expected: 'වහාම මෙතනට එන්න.' },
    { id: 'Pos_Fun_0010', input: 'vaessa nisaa api gedhara hitiyaa.', expected: 'වැස්ස නිසා අපි ගෙදර හිටියා.' },
    { id: 'Pos_Fun_0011', input: 'magee NIC eka naethi velaa.', expected: 'මගේ NIC එක නැති වෙලා.' },
    { id: 'Pos_Fun_0012', input: 'SMS ekak dhaanna', expected: 'SMS එකක් දාන්න' },
    { id: 'Pos_Fun_0013', input: 'mata 5kg parippu oonee.', expected: 'මට 5kg පරිප්පු ඕනේ.' },
    { id: 'Pos_Fun_0014', input: 'suba aluth avurudhak vevaa!', expected: 'සුබ අලුත් අවුරුදක් වෙවා!' },
    { id: 'Pos_Fun_0015', input: 'Meeke gaana kiyadha?', expected: 'මේකෙ ගාන කියද?' },
    { id: 'Pos_Fun_0016', input: 'mama', expected: 'මම' },
    { id: 'Pos_Fun_0017', input: 'api passee bath kamu.', expected: 'අපි පස්සේ බත් කමු.' },
    { id: 'Pos_Fun_0018', input: 'mama heta nidhaa gannavaa', expected: 'මම හෙට නිදා ගන්නවා' },
    { id: 'Pos_Fun_0019', input: 'Adha udhaeesana idhanma Kandy valata godak thadhata vahinavaa. Maarga thadhabadhaya nisaa office yana ayata godak pramaadha venna sidhdha vunaa. Dhumriya gamanaagamana pavaa pamaa velaa thiyennee maarga kotas vala thibunu pas kadhu vaetima nisaayi. Meeka nisaa paasal yana dharuvantath godak amaaru vunaa. Ehenam dhaen ithin parissamin gedhara yanna oonee. mita amatharava, vathura pirunu paara val thiyenavaa vaahana dhaavanaya pavaath pamaa velaa thiyenavaa.', expected: 'අද උදෑසන ඉදන්ම Kandy වලට ගොඩක් තදට වහිනවා.' },
    { id: 'Pos_Fun_0020', input: 'Mama adha Samsung phone ekak, Sony earphone ekak gaththaa.', expected: 'මම අද Samsung phone එකක්, Sony earphone එකක් ගත්තා.' },
    { id: 'Pos_Fun_0021', input: 'oyaalaa okkoma adha enavadha?', expected: 'ඔයාලා ඔක්කොම අද එනවද?' },
    { id: 'Pos_Fun_0022', input: 'mata podi udhavvak karapanko.', expected: 'මට පොඩි උදව්වක් කරපන්කො' },
    { id: 'Pos_Fun_0023', input: 'vahaama kaamarayata enna.', expected: 'වහාම කාමරයට එන්න.' },
    { id: 'Pos_Fun_0024', input: 'mama adha padam karanne naehae', expected: 'මම අද පඩම් කරන්නේ නැහැ' },
    { id: 'Pos_Fun_0025', input: 'samaavenna, mata meeka ayeth kiyala dhenna puluvandha?', expected: 'සමාවෙන්න, මට මේක අයෙත් කියල දෙන්න පුලුවන්ද?' },

    // --- NEGATIVE FUNCTIONAL TESTS (10) ---
    { id: 'Neg_Fun_001', input: 'm4m4 h3t4 y4n4v4', expected: 'm4m4 හ්3t4 ය්4n4v4' },
    { id: 'Neg_Fun_002', input: 'vaneka kaethayi', expected: 'වනෙක කැතයි' },
    { id: 'Neg_Fun_003', input: 'I am eating bath.', expected: 'ඉ am eating බත්.' },
    { id: 'Neg_Fun_004', input: '450kmh', expected: '450ක්ම්හ්' },
    { id: 'Neg_Fun_005', input: 'm@ m@ g#dhara', expected: 'm@ m@ g#දර' },
    { id: 'Neg_Fun_006', input: 'mamagedharayanavaadhakiyalahithuvadha', expected: 'මමගෙදරයනවාදකියලහිතුවද' },
    { id: 'Neg_Fun_007', input: 'MAMA HETA ENNAM', expected: 'MAMA HETA ENNAM' },
    { id: 'Neg_Fun_008', input: 'MaMa GeDhArA yAnAvAa', expected: 'මම ගෙධ්රාරා යනවා' },
    { id: 'Neg_Fun_009', input: 'mama meka baeluva https://www.google.com', expected: 'මම මෙක බැලුව හ්ට්ට්ප්ස්://www.google.com' },
    { id: 'Neg_Fun_010', input: 'kooooooohomadhaaaaa', expected: 'කෝඕඕඔහොමදාආඅ' }
];

test.describe('Swift Translator Sequential Fast Testing', () => {
    let page;

    // මුලින්ම එක පාරක් පමණක් පූජනය විවෘත කිරීම
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    });

    for (const tc of testCases) {
        test(`${tc.id}: ${tc.input.substring(0, 20)}`, async () => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            const outputField = page.locator('textarea').nth(1);

            // ඉතා වේගයෙන් input එක පුරවයි
            await inputField.fill(''); // Clear
            await inputField.fill(tc.input);

            // Translator එක update වීමට සුළු වෙලාවක් (500ms)
            await page.waitForTimeout(500);

            const actualOutput = await outputField.inputValue();
            
            if (tc.id.startsWith('Pos_Fun')) {
                // Positive tests වලදී text එක තිබේදැයි බලයි
                expect.soft(actualOutput.trim()).toContain(tc.expected.trim());
            } else {
                // Negative tests (Fail වීමට නියමිතයි - Excel එකේ හැටියට)
                expect.soft(actualOutput.trim()).toBe(tc.expected.trim());
            }
        });
    }

    // --- UI TEST CASES (Excel එකේ තිබූ පරිදි) ---

    test('Pos_UI_001: Clear Input Handling', async () => {
        const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputField = page.locator('textarea').nth(1);
        
        await inputField.fill('mama');
        await page.waitForTimeout(500);
        await inputField.fill(''); // Clear කිරීම
        await expect(outputField).toHaveValue('');
    });

    test('Pos_UI_002: Placeholder Visibility', async () => {
        const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
        await expect(inputField).toHaveAttribute('placeholder', 'Input Your Singlish Text Here.');
    });

    test('Neg_UI_001: Dark Mode Support (Expected Fail)', async () => {
        // Excel එකේ හැටියට dark mode නැති නිසා මෙය fail වෙන්න පුළුවන්
        const darkModeBtn = page.locator('button:has-text("Dark Mode")');
        await expect(darkModeBtn).toBeVisible(); 
    });

    test('Neg_UI_002: Font Resizing Option (Expected Fail)', async () => {
        // Excel එකේ හැටියට font resize නැති නිසා මෙය fail වෙන්න පුළුවන්
        const resizeOption = page.locator('text=Font Size');
        await expect(resizeOption).toBeVisible();
    });
});