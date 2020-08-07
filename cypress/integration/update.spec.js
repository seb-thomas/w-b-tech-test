describe("Create an animal card", () => {
  const card = "[data-cy=animal-card]"
  const form = "[data-cy=add-animal-form]"

  const testData = {
    name: "Rat",
  }

  it("Visits Animal Top Trumps", () => {
    cy.visit("/")
  })

  it(`Updates the first card name to ${testData.name}`, () => {
    cy.get(card).first().as("firstCard")
    cy.get("@firstCard").find("[data-cy=edit-button]").click()
    cy.get("@firstCard").find('input[name="name"]').clear().type(testData.name)
    cy.get("@firstCard").find(form).submit()
  })
  it(`Checks the cards for the ${testData.name} name update`, () => {
    cy.get(card).should("contain", testData.name)
  })
})
