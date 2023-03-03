import { JsxEmit } from "typescript"

export class PilihProgramPage{
    txt_orangTua = '#nama_orangtua'
    field_set_pilih_program = '#dua'
    


    navigate(url: string){
        cy.visit(url)
    }

    inputOrangTua(orangTua: string){
        cy.get(this.txt_orangTua).type(orangTua, {force: true})
    }
    

    loadingNotVisible(){
        cy.contains("sedang memuat data").should('not.be.visible')
    }
}