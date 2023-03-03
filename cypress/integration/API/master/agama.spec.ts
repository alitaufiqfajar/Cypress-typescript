const apiAgama = `${Cypress.env("staging")}agama`;

describe("Master Agama", function(){
    
    it("Data agama tanpa limit data", function () {
        cy.request("GET", `${apiAgama}`).then((response) => {

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
    
    it("Data agama dengan limit data 10", function () {
        cy.request("GET", `${apiAgama}?limit=10`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.isSuccess).eq(true)
            expect(response.body.statusCode).eq(200)
            expect(response.body.responseMessage).eq("Succeed")
            expect(response.body.data.rows).length.to.be.greaterThan(1);

            expect(response.body.data.rows[1]).to.have.property("agama_id");
        });
    });
    
    it("Data agama dengan pencarian & limit", function () {
        let searchCabang = "Isla"
        cy.request("GET", `${apiAgama}?limit=10&search=${searchCabang}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.isSuccess).eq(true)
            expect(response.body.statusCode).eq(200)
            expect(response.body.responseMessage).eq("Succeed")
            console.log(response.body.data)
            expect(response.body.data.rows).length.to.be.at.least(1);

            expect(response.body.data.rows[0]).to.have.property("agama_id");
            expect(response.body.data.rows[0].agama_id).eq(1)
        });
    });
})
