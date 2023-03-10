import { BiodataPage } from "./pages/biodata_pages"
const URL = 'https://tryoutakm.bintangpelajar.com'

let listUsernames: string[] = ['PSU004084',
    'AKM13014195',
    'PSU004085',
    'AKM13014196',
    'AKM13014197',
    'DJT023001',
    'DJT023002',
    'DJT023003',
    'AKM13014198',
    'DJT023004',
    'PSU004086',
    'PSU004087',
    'AKM13014199',
    'PSU004088',
    'AJB055001',
    'AJB055002',
    'PJB054057',
    'DJK038020',
    'DSN010043',
    'DSN010044',
    'AJB055003',
    'DJK038021',
    'AJB055004',
    'AJB055005'];

describe("Login AKM", function () {
    listUsernames.forEach(testData => {
        it(`Login username : ${testData} should success`, () => {
            cy.visit(URL)
            cy.get("#floatingInput").type(testData)
            cy.get("#floatingPassword").type(testData)
            cy.contains("Login").click()
            cy.contains("Success!").should("be.visible")
        });
    });
})
