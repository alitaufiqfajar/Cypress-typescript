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
    biodataPage.selectTahunAjaran("13") // 13 untuk 2022/2023 dan 14 untuk 2023/2024
    biodataPage.selectKurikulum("3") //  3 untuk K2013 dan 11 untuk Kurikulum Merdeka
    
    biodataPage.inputInvalidNomorWhatsApp()
    biodataPage.inputTooShortNomorWhatsApp()
    biodataPage.inputValidNomorWhatsApp()
    biodataPage.inputTooLongNomorWhatsApp()
    biodataPage.selectKotaDomisili()
})