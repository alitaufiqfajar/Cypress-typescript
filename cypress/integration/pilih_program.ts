import { BiodataPage } from "./pages/biodata_pages"

let biodataPage = new BiodataPage()
const URL = 'https://bponlinereplika.bintangpelajar.net'
// const USERNAME = "nisiy90302"
const PASSWORD = "7Q$9FC2V"

Cypress.on('uncaught:exception', (error, runnable) => {
    return false
})

it('Bagian Biodata 1', () => {
    cy.viewport(1366, 768)

    /* cy.visit("https://bponlinereplika.bintangpelajar.net/auth/orangTua")
    cy.get("#username").type("nisiy90302", { force: true })
    cy.get("#password").type(PASSWORD, { force: true })
    cy.contains("Masuk").click()
    cy.contains("Login succeed").should("be.visible")
    cy.get(".swal2-confirm").click() */

    biodataPage.navigate(URL)
    biodataPage.loadingNotVisible()
    cy.setCookie('transaksi_id', "VTJGc2RHVmtYMThsL3dIM3h1WnV1OHFhT1phYllyaHBwb3k4VGNVMUZhWT0")

    biodataPage.navigate(URL)
    biodataPage.loadingNotVisible()

    cy.contains("Pilih Paket Bimbel").should("be.visible")

    cy.contains("Sukses Tembus SMP Labschool")
})