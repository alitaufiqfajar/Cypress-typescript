const apiUsers = `${Cypress.env("staging")}cabang`;

describe("Master Cabang", function(){
    
    it("Data cabang tanpa limit data", function () {
        cy.request("GET", `${apiUsers}`).then((response) => {

            expect(response.status).to.eq(200);

            expect(response.body).to.have.property("isSuccess");
            expect(response.body.isSuccess).eq(true)

            expect(response.body).to.have.property("statusCode");
            expect(response.body.statusCode).eq(200)

            expect(response.body).to.have.property("responseMessage");
            expect(response.body.responseMessage).eq("Succeed")
            
            expect(response.body).to.have.property("data");
            
            expect(response.body.data).length.to.be.greaterThan(1);
        });
    });
    
    it("Data cabang dengan limit data 10", function () {
        cy.request("GET", `${apiUsers}?limit=10`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.isSuccess).eq(true)
            expect(response.body.statusCode).eq(200)
            expect(response.body.responseMessage).eq("Succeed")
            expect(response.body.data.rows).length.to.be.greaterThan(1);

            expect(response.body.data.rows[1]).to.have.property("cabang_id");
        });
    });
    
    it("Data cabang dengan limit data 10", function () {
        let searchCabang = "Pusat"
        cy.request("GET", `${apiUsers}?limit=10&search=${searchCabang}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.isSuccess).eq(true)
            expect(response.body.statusCode).eq(200)
            expect(response.body.responseMessage).eq("Succeed")
            expect(response.body.data.rows).length.to.be.at.least(1);

            expect(response.body.data.rows[0]).to.have.property("cabang_id");
            expect(response.body.data.rows[0].cabang_kode).eq("000")
        });
    });
})
