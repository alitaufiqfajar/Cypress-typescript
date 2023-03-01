import {BiodataPage} from "./pages/biodata_pages"

let biodataPage = new BiodataPage()
const URL = 'https://bponlinereplika.bintangpelajar.net'

it('Bagian Biodata', () => {
    biodataPage.navigate(URL)
    biodataPage.loadingNotVisible()

    biodataPage.inputOrangTua("Annisa Apprillisda")
    biodataPage.inputNamaSiswa("Azlamia Fatiha Nuralisa")
    biodataPage.responseInvalidEmail("azlamia")
    biodataPage.inputEmail("aprillisda@gmail.com")
    biodataPage.selectAgama("Kristen", 2)
    biodataPage.selectKelas("6 SD", 7)
    biodataPage.selectJenisKelamin("2") // 1 " Laki-laki " & 2 " Perempuan "
    biodataPage.selectTahunAjaran("2022 - 2023",13) // 13 untuk 2022/2023 dan 14 untuk 2023/2024
    biodataPage.selectKurikulum("K2013",3) //  3 untuk K2013 dan 11 untuk Kurikulum Merdeka
    
    biodataPage.inputInvalidNomorWhatsApp("dfsd")
    biodataPage.inputInvalidNomorWhatsApp("#sfd")
    biodataPage.inputTooShortNomorWhatsApp("5151665")
    biodataPage.inputTooLongNomorWhatsApp("1351549876512156848135")
    // biodataPage.inputValidNomorWhatsApp()
    // biodataPage.selectKotaDomisili()
})