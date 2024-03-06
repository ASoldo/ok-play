describe("First Test", () => {
  it("should pass", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#about-link").click();
  });
});
