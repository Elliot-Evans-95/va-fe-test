import { screen, render } from "@testing-library/react";
import type { ReactNode } from "react";

import { SearchResultsComponent } from "./search-results.component";
import { mockState } from "@/utils/mocks";

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

jest.mock("@/app/(search)/components/search-results-item", () => {
  const originalModule = jest.requireActual(
    "@/app/(search)/components/search-results-item",
  );

  return {
    __esModule: true,
    ...originalModule,
    SearchResultsItemComponent: jest.fn(() => <></>),
  };
});

jest.mock("@/utils/hooks", () => {
  const originalModule = jest.requireActual("@/utils/hooks");

  return {
    __esModule: true,
    ...originalModule,
    useMediaQuery: jest.fn(() => true),
  };
});

describe("<SearchResultsComponent>", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("search results heading appears on the document", () => {
    render(<SearchResultsComponent state={mockState} />);

    const heading = screen.getByRole("heading", {
      name: "0 Holidays found",
    });

    expect(heading).toBeInTheDocument();
  });

  test("search results from/to sub heading appears on the document", () => {
    render(<SearchResultsComponent state={mockState} />);

    const subHeading = screen.getByText(
      "From mock destination gateway into mock destination name",
    );

    expect(subHeading).toBeInTheDocument();
  });
});
