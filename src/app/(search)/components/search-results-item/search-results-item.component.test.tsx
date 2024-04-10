import { screen, render } from "@testing-library/react";
import type { ReactNode } from "react";

import { SearchResultsItemComponent } from "./search-results-item.component";
import { mockBookingResponseWithHolidays } from "../../../../utils/mocks";

jest.mock(
  "next/link",
  () =>
    function Link({ href, children }: { href: string; children: ReactNode }) {
      return <a href={href}>{children}</a>;
    },
);

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    },
);

describe("<SearchResultsItemComponent>", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("link to view all details appears on the document", () => {
    render(
      <SearchResultsItemComponent
        holiday={mockBookingResponseWithHolidays.holidays[0]}
        isDesktop={true}
      />,
    );

    const link = screen.getByRole("link", {
      name: "View details",
    });

    expect(link).toBeInTheDocument();
  });

  test("hotel name appears on the document", () => {
    render(
      <SearchResultsItemComponent
        holiday={mockBookingResponseWithHolidays.holidays[0]}
        isDesktop={true}
      />,
    );

    const heading = screen.getByRole("heading", {
      name: mockBookingResponseWithHolidays.holidays[0].hotel.name,
    });

    expect(heading).toBeInTheDocument();
  });

  test("hotel star rating appears on the document", () => {
    render(
      <SearchResultsItemComponent
        holiday={mockBookingResponseWithHolidays.holidays[0]}
        isDesktop={true}
      />,
    );

    const starRating = screen.getByText("out of 5 rating", { exact: false });

    expect(starRating.textContent).toBe("Villas out of 5 rating");
  });

  test("hotel price per person appears on the document", () => {
    render(
      <SearchResultsItemComponent
        holiday={mockBookingResponseWithHolidays.holidays[0]}
        isDesktop={true}
      />,
    );

    const pricePerPerson = screen.getByText("£1,327.93");

    expect(pricePerPerson).toBeInTheDocument();
  });
});
