import { screen, render } from "@testing-library/react";

import { SearchResultsItemImageComponent } from "./search-results-item-image.component";
import { mockBookingResponseWithHolidays } from "@/utils/mocks";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: { src: string; alt: string }) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    },
);

describe("<SearchResultsItemImageComponent>", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("a holiday image alt text appears on desktop from the holiday data", () => {
    render(
      <SearchResultsItemImageComponent
        holiday={mockBookingResponseWithHolidays.holidays[0]}
        isDesktop={true}
      />,
    );

    const image = screen.getByAltText("Solterra Image");

    expect(image).toBeInTheDocument();
  });

  test("a holiday image appears on desktop from the holiday data", () => {
    render(
      <SearchResultsItemImageComponent
        holiday={mockBookingResponseWithHolidays.holidays[0]}
        isDesktop={true}
      />,
    );

    const image = screen.getByAltText<HTMLImageElement>("Solterra Image");

    expect(image.src).toBe(
      `http:${mockBookingResponseWithHolidays.holidays[0].hotel.content.images[0].RESULTS_CAROUSEL.url}`,
    );
  });

  test("default holiday image alt test if it doesn't exist", () => {
    render(
      <SearchResultsItemImageComponent
        holiday={mockBookingResponseWithHolidays.holidays[1]}
        isDesktop={true}
      />,
    );

    const image = screen.getByAltText(
      "Photo of Universal's Endless Summer Resort-Surfside Inn and Suites hotel",
    );

    expect(image).toBeInTheDocument();
  });

  test("display no image text when there is no image available", () => {
    render(
      <SearchResultsItemImageComponent
        holiday={{
          ...mockBookingResponseWithHolidays.holidays[1],
          hotel: {
            ...mockBookingResponseWithHolidays.holidays[1].hotel,
            content: {
              ...mockBookingResponseWithHolidays.holidays[1].hotel.content,
              images: [],
            },
          },
        }}
        isDesktop={true}
      />,
    );

    const noImageText = screen.getByText(
      "No Images of Universal's Endless Summer Resort-Surfside Inn and Suites",
    );

    expect(noImageText).toBeInTheDocument();
  });
});
