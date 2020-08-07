describe("Create an animal card", () => {
  const card = "[data-cy=animal-card]"
  const form = "[data-cy=add-animal-form]"

  const testData = {
    name: "Tasmanian tiger",
    type: "mammal",
    diet: "carnivore",
    isExtinct: true,
  }

  it("Visits Animal Top Trumps", () => {
    cy.visit("/")
  })

  it(`Adds a new ${testData.name} card`, () => {
    cy.get(form).within(() => {
      cy.get('input[name="name"]').type(testData.name)
      cy.get('select[name="type"]').select(testData.type)
      cy.get('select[name="diet"]').select(testData.diet)
      cy.get('input[name="isExtinct"]').check()
    })
    cy.get(form).submit()
  })
  it(`Checks the new  ${testData.name} card has been added`, () => {
    cy.get(card).should("contain", testData.name)
  })
})
