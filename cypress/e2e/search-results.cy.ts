describe("search-results", () => {
  it("should display number of search results once loaded", () => {
    const navigationUrl =
      "/results?bookingType=holiday&location=orlando&gateway=LHR&departureDate=17-05-2024&duration=7&partyCompositions=a2";

    cy.visit(`http://localhost:3000/${navigationUrl}`);

    cy.get("h2").contains("82 Holidays found");
  });

  it("should change search results when a filter is used", () => {
    const navigationUrl =
      "/results?bookingType=holiday&location=orlando&gateway=LHR&departureDate=17-05-2024&duration=7&partyCompositions=a2";

    cy.visit(`http://localhost:3000/${navigationUrl}`);

    cy.get(`input[name="4-star-rating"]`).click();
    cy.get("h2").contains("18 Holidays found");
  });
});
