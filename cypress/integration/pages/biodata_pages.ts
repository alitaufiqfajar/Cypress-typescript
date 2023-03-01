import { JsxEmit } from "typescript"

export class BiodataPage{
    txt_orangTua = '#nama_orangtua'
    txt_namaSiswa = '#nama_anak'

    txt_email = "#email"
    response_email = "#resEmail"

    select_agama = "#agama"
    select2_container_agama = "#select2-agama-container"
    select2_result_agama = ".select2-results__option"

    select_kelas = "#kelas"
    select2_container_kelas = "#select2-kelas-container"
    select2_result_kelas = ".select2-results__option"
    
    select_tahun_ajaran = "#tahun_ajaran"
    select2_container_tahun_ajaran = "#select2-tahun_ajaran-container"
    select2_result_tahun_ajaran = ".select2-results__option"

    select_kurikulum = "#kurikulum"
    select2_container_kurikulum = "#select2-kurikulum-container"
    select2_result_kurikulum = ".select2-results__option"

    txt_whatsapp = "#nomor_whatsapp"
    response_whatsapp_too_short_id = "#resNoKurang"
    response_whatsapp_too_short_txt = " Kurang Memasukkan Karakter"
    response_whatsapp_too_long_id = "#resNoLebih"
    response_whatsapp_too_long_txt = " Karakter melebihi Format No telp"

    navigate(url: string){
        cy.visit(url)
    }

    inputOrangTua(orangTua: string){
        cy.get(this.txt_orangTua).type(orangTua, {force: true})
    }
    
    inputNamaSiswa(siswa: string){
        cy.get(this.txt_namaSiswa).type(siswa, {force: true})
    }
    
    inputEmail(email: string){
        cy.get(this.txt_email).type(email, {force: true})
    }

    responseInvalidEmail(email: string){
        cy.get(this.txt_email).type(email, {force: true})
        cy.get(this.response_email).should('contain.text', ' format email tidak valid').should('be.visible')
    }

    selectAgama(agama : string, index: number){
        cy.get(this.select2_container_agama).click({force:true})
        cy.contains(`#select2-agama-results > ${this.select2_result_agama}`, agama).click()
        cy.get(this.select_agama).should('have.value', index)
    }
    
    selectKelas(kelas : string, index: number){
        cy.get(this.select2_container_kelas).click({force:true})
        cy.contains(`#select2-kelas-results > ${this.select2_result_kelas}`, kelas).click()
        cy.get(this.select_kelas).should('have.value', index)
    }

    selectJenisKelamin(jenisKelamin : string){
        cy.get('[type="radio"]').check(jenisKelamin)
        cy.get('input[name=jenis_kelamin]:checked').should('be.checked').and('have.value', jenisKelamin)
    }

    selectTahunAjaran(tahunAjaran : string, index: number){
        cy.get(this.select2_container_tahun_ajaran).click({force:true})
        cy.contains(`#select2-tahun_ajaran-results > ${this.select2_result_tahun_ajaran}`, tahunAjaran).click()
        cy.get(this.select_tahun_ajaran).should('have.value', index)
    }
    
    selectKurikulum(kurikulum : string, index: number){
        cy.get(this.select2_container_kurikulum).click({force:true})
        cy.contains(`#select2-kurikulum-results > ${this.select2_result_kurikulum}`, kurikulum).click()
        cy.get(this.select_kurikulum).should('have.value', index)
    }

    inputInvalidNomorWhatsApp(nomorWhatsApp: string){
        cy.get(this.txt_whatsapp).type(nomorWhatsApp, {force: true})
        cy.get(this.txt_whatsapp).should('have.value', "")
    }
    
    inputTooShortNomorWhatsApp(nomorWhatsApp: string){
        cy.get(this.txt_whatsapp).type(nomorWhatsApp, {force: true})
        cy.get(this.response_whatsapp_too_long_id).should('not.be.visible')
        cy.get(this.response_whatsapp_too_short_id).should('contain.text', this.response_whatsapp_too_short_txt).should('be.visible')
    }
    
    inputTooLongNomorWhatsApp(nomorWhatsApp: string){
        cy.get(this.txt_whatsapp).type(nomorWhatsApp, {force: true})
        cy.get(this.response_whatsapp_too_short_id).should('not.be.visible')
        cy.get(this.response_whatsapp_too_long_id).should('contain.text', this.response_whatsapp_too_long_txt).should('be.visible')
    }

    loadingNotVisible(){
        cy.contains("sedang memuat data").should('not.be.visible')
    }
}