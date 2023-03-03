import { BiodataPage } from "./pages/biodata_pages"

let biodataPage = new BiodataPage()
const URL = 'https://bponlinereplika.bintangpelajar.net'

describe("Tahap 1 - Biodata", function () {
    before(() => {
        biodataPage.navigate(URL)
        biodataPage.loadingNotVisible()
    })

    it('Invalid Nomor WhatsApp - Diisi string', () => {
        // biodataPage.navigate(URL)
        // biodataPage.loadingNotVisible()
        biodataPage.inputInvalidNomorWhatsApp("dfsd")
    })

    it('Invalid Nomor WhatsApp - Diisi nomor terlalu pendek', () => {
        biodataPage.inputTooShortNomorWhatsApp("5151665")
    })

    it('Invalid Nomor WhatsApp - Diisi nomor terlalu panjang', () => {
        biodataPage.inputTooLongNomorWhatsApp("1351549876512156848135")
    })

    it('Valid Nomor WhatsApp', () => {
        biodataPage.inputValidNomorWhatsApp("82115499412")
    })

    it('Layanan Online tidak tampil pilih cabang', () => {
        biodataPage.selectJenisLayanan("Bimbel Online", 1) // 0 untuk Offline dan 1 untuk Online
    })

    it('Layanan Offline wajib pilih cabang', () => {
        biodataPage.selectJenisLayanan("Bimbel Offline", 0) // 0 untuk Offline dan 1 untuk Online
    })

    it('Invalid Email', () => {
        biodataPage.responseInvalidEmail("azlamia")
    })

    it('Valid Email', () => {
        biodataPage.inputEmail("aprillisda@gmail.com")
    })


})

// it('Bagian Biodata', () => {
//     biodataPage.navigate(URL)
//     biodataPage.loadingNotVisible()

//     biodataPage.inputOrangTua("Annisa Apprillisda")
//     biodataPage.inputNamaSiswa("Azlamia Fatiha Nuralisa")
//     biodataPage.responseInvalidEmail("azlamia")

//     // button tidak bisa diklik karena semua form belum diisi
//     cy.get("#btnSelanjutnya1").should("be.disabled")

//     biodataPage.inputEmail("aprillisda@gmail.com")
//     biodataPage.selectAgama("Kristen", 2)
//     biodataPage.selectKelas("6 SD", 7)
//     // biodataPage.selectKelas("11 SMA", 12)
//     biodataPage.selectJenisKelamin("2") // 1 " Laki-laki " & 2 " Perempuan "
//     biodataPage.selectTahunAjaran("2022 - 2023", 13) // 13 untuk 2022/2023 dan 14 untuk 2023/2024
//     biodataPage.selectKurikulum("K2013", 3) //  3 untuk K2013 dan 11 untuk Kurikulum Merdeka

//     biodataPage.inputInvalidNomorWhatsApp("dfsd")
//     biodataPage.inputInvalidNomorWhatsApp("#sfd")
//     biodataPage.inputTooShortNomorWhatsApp("5151665")
//     biodataPage.inputTooLongNomorWhatsApp("1351549876512156848135")
//     biodataPage.inputValidNomorWhatsApp("82115499412")
//     biodataPage.selectKotaDomisili("Ciamis", 174)

//     biodataPage.selectJenisLayanan("Bimbel Online", 1) // 0 untuk Offline dan 1 untuk Online
//     cy.get("#btnSelanjutnya1").should("not.be.disabled").click()

//     cy.contains("Lanjut Step Berikutnya").should("be.visible")
//     cy.get(".swal2-close").should("be.visible").click()

//     cy.get("#btnSelanjutnya1").should("not.be.disabled").click()
//     cy.contains("Lanjut Step Berikutnya").should("be.visible")
//     cy.get(".swal2-cancel").should("be.visible").click()

// })