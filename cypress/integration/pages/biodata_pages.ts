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

    select_kota_domisili = "#kota_domisili"
    select2_container_kota_domisili = "#select2-kota_domisili-container"
    select2_result_kota_domisili = "#select2-kota_domisili-results"
    select2_result_option = ".select2-results__option"

    select_jenis_layanan = "#jenis_bimbel"
    select2_container_jenis_layanan = "#select2-jenis_bimbel-container"
    select2_result_jenis_layanan = "#select2-jenis_bimbel-results"

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
    
    label_div_jurusan = "#div_input_jurusan"
    selectKelas(kelas : string, index: number){
        cy.get(this.select2_container_kelas).click({force:true})
        cy.contains(`#select2-kelas-results > ${this.select2_result_kelas}`, kelas).click()
        cy.get(this.select_kelas).should('have.value', index)

        // jika kelas 10 s/d 12 maka munculkan pemilihan jurusan
        if (index > 10) {
            cy.contains("Jurusan ").should('be.visible')
        } else {
            cy.get("#jurusan").should('not.be.visible')
        }

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

    inputValidNomorWhatsApp(nomorWhatsApp: string){
        cy.get(this.txt_whatsapp).clear()
        cy.get(this.txt_whatsapp).type(nomorWhatsApp, {force: true})
        cy.get(this.response_whatsapp_too_short_id).should('not.be.visible')
        cy.get(this.response_whatsapp_too_long_id).should('not.be.visible')
        cy.get(this.txt_whatsapp).should('have.value', nomorWhatsApp)
    }

    selectKotaDomisili(KotaDomisili : string, index: number){
        cy.get(this.select2_container_kota_domisili).click({force:true})
        // cy.contains(`${this.select2_result_kota_domisili} > ${this.select2_result_option}`, KotaDomisili).click()
        cy.get('input[aria-controls="select2-kota_domisili-results"]')
            .type(`${KotaDomisili}{enter}`, {
                delay: 500,
            })
        cy.get(this.select_kota_domisili).should('have.value', index)
    }
    
    selectJenisLayanan(jenisLayanan : string, index: number){
        cy.get(`${this.select_jenis_layanan}`).focus()
        cy.get(`${this.select_jenis_layanan}`).select(jenisLayanan)
        cy.get(this.select_jenis_layanan).should('have.value', index)

        // jika offline tampilkan pilihan cabang
        if (index === 0) {
            cy.contains(" Pilih Cabang ").should('be.visible')
        } else {
            cy.get("#cabang").should('not.be.visible')
        }
    }

    loadingNotVisible(){
        cy.contains("sedang memuat data").should('not.be.visible')
    }
}