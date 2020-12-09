import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://www.almamedia.fi/`

test('Alma Media Form Test', async t => {

    const mainostajatButton = Selector('.dropdown-toggle').nth(1);  //2nd menu button
    const mediaButton = Selector('li').child('a').withExactText('Alman mediat ja palvelut');
    const talousButton = Selector('li').child('a').withExactText('Talous- ja ammattilaismediat');
    const faktaButton = Selector('li').child('a').withExactText('Kauppalehti Fakta');
    const submitButton = Selector('button').withExactText('Lähetä');
    const alertMessage = Selector('div').withExactText('Incorrect value for the captcha image')

    await t
        .click('#almacmp-modalConfirmBtn')
        .click(mainostajatButton)
        .click(mediaButton)
        .click(talousButton)
        .click(faktaButton)
        .typeText('#Textbox-1', 'Jane Doe')
        .typeText('#Textbox-3', '04000000')
        .typeText('#Textbox-2', 'Qentinel')
        .typeText('#Textbox-4', 'janedoe@notarealemail.org')
        .click(submitButton)
        .expect((alertMessage).exists).ok();
})


