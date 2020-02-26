describe("test input", () => {
  it("type in input", () => {
    cy.visit("/");
    cy.findByPlaceholderText("Input 1").type("Alohamora{enter}");
    cy.findByPlaceholderText("Input 2").type(
      "Acccio{backspace}{backspace}{backspace}io Firebolt{enter}"
    );
    cy.findByPlaceholderText("Input 3").type("Expecto Patronum!!!!!!!{enter}");
    cy.findByPlaceholderText("Input 4").type("Expelliarmus{enter}");
    cy.findByText("Alohamora").should("exist");
    cy.findByText("Accio Firebolt").should("exist");
    cy.findByText("Expecto Patronum!!!!!!!").should("exist");
    cy.findByText("Expelliarmus").should("exist");
  });
});
