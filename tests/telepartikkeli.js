import { Selector } from 'testcafe';

fixture `Telepartikkeli`
    .page `https://www.telepartikkeli.net/tunnusgeneraattori`

test('Telepartikkeli Y-tunnus', async t => {
    
    async function actions () {
        await t
            .click('#generateCidSubmit');
    }
    await t
        .takeScreenshot();
    let counter = 100;
    while(counter--)
        await actions();
})