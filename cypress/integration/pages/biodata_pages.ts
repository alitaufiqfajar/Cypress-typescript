import { JsxEmit } from "typescript"

export class BiodataPage{
    txt_orangTua = '#nama_orangtua'
    txt_namaSiswa = '#nama_anak'

    txt_email = "#email"
    response_email = "#resEmail"

    select_agama = "#agama"
    select2_container_agama = "#select2-agama-container"
    select2_result_agama = ".select2-results__option"
    // select2_result_agama = "#select2-agama-results"

    select_kelas = "#kelas"
    select2_container_kelas = "#select2-kelas-container"
    select2_result_kelas = ".select2-results__option"

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
        // cy.contains(this.select2_result_agama, agama).click()
        cy.contains(`#select2-agama-results > ${this.select2_result_agama}`, agama).click()
        cy.get(this.select_agama).should('have.value', index)
    }
    
    selectKelas(kelas : string, index: number){
        cy.get(this.select2_container_kelas).click({force:true})
        cy.contains(`#select2-kelas-results > ${this.select2_result_kelas}`, kelas).click()
        cy.get(this.select_kelas).should('have.value', index)//*[@id="select2-kelas-container"]
    }

    selectJenisKelamin(jenisKelamin : string){
        cy.get('[type="radio"]').check(jenisKelamin)
        cy.get('input[name=jenis_kelamin]:checked').should('be.checked').and('have.value', jenisKelamin)
    }

    loadingNotVisible(){
        cy.contains("sedang memuat data").should('not.be.visible')
    }
}