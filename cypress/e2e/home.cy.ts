describe("home", () => {
  it("should navigate to the search results page from the home page", () => {
    const navigationUrl =
      "/results?bookingType=holiday&location=orlando&gateway=LHR&departureDate=17-05-2024&duration=7&partyCompositions=a2";

    cy.visit("http://localhost:3000/");

    cy.get("h1").contains("Holiday Search Test");

    cy.get(`a[href*="${navigationUrl}"]`).click();

    cy.get("h1").contains("Search results");
  });
});
