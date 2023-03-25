import { BiodataPage } from "./pages/biodata_pages"
const URL = 'https://tryoutakm.bintangpelajar.com'

let listUsernames: string[] = [
"PJB060081"
];

let nama_event = "Simulasi Kompetisi 2023 | 25 Maret 2023";

describe("Login AKM", function () {
    listUsernames.forEach(testData => {
        it(`Login username : ${testData} should success`, () => {
            cy.visit(URL)
            cy.get("#floatingInput").type(testData)
            cy.get("#floatingPassword").type(testData)
            cy.contains("Login").click()
            cy.contains("Success!").should("be.visible")
            cy.url().should('eq', 'https://tryoutakm.bintangpelajar.com/event')
            cy.get(".container-fluid").contains(nama_event).should("be.visible")
        });
    });
})
