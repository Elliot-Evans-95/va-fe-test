import { BookingResponse } from "@/types";
import {
  AppliedFilters,
  SearchResultsAction,
  SearchResultsState,
} from "@/utils/reducer/search-reducer.types";

export const mockBookingResponseWithNoHolidays: BookingResponse = {
  destination: {
    gateway: "mock destination gateway",
    name: "mock destination name",
  },
  holidays: [],
  mixedArrivalAirports: false,
};

export const mockBookingResponseWithHolidays: BookingResponse = {
  ...mockBookingResponseWithNoHolidays,
  holidays: [
    {
      totalPrice: 2655.85,
      pricePerPerson: 1327.93,
      virginPoints: 5312,
      tierPoints: 100,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H6644",
        name: "Solterra",
        boardBasis: "Self Catering",
        content: {
          name: "Solterra",
          hotelDescription:
            "A private community in a peaceful spot, Solterra villas are a great home-from-home.",
          vRating: 3,
          atAGlance: [
            "Private gated community",
            "Resort-style swimming pool, spa and fitness centre",
            "Tennis courts",
            "Both villas and townhouses available",
          ],
          parentLocation: "Orlando Area Villa, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-1-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6644/h6644-1-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "Solterra Image",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-2-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-2-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-3-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-3-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-4-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6644/h6644-4-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-5-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-5-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-6-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-6-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-7-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-7-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-8-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-8-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-9-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-9-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-10-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-10-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-11-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-11-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-12-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-12-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-13-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-13-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-14-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-14-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-15-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-15-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-16-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-16-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-17-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-17-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-18-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-18-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-19-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-19-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-20-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-20-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-21-results_carousel.jpg?version=12",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-21-mobile_main.jpg?version=12",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-22-results_carousel.jpg?version=11",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-22-mobile_main.jpg?version=11",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-23-results_carousel.jpg?version=11",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-23-mobile_main.jpg?version=11",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-24-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-24-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-25-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-25-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-26-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-26-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-27-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-27-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-28-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-28-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-29-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-29-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-30-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-30-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6644/h6644-31-results_carousel.jpg?version=9",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6644/h6644-31-mobile_main.jpg?version=9",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families"],
          boardBasis: ["Self Catering"],
          hotelLocation: [],
          accommodationType: [],
          hotelFacilities: [
            "Bar",
            "Fitness Centre/Gym",
            "Internet Access",
            "Swimming Pool",
            "Whirlpool",
          ],
          starRating: "Villas",
          propertyType: "Villa",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2202.24,
      pricePerPerson: 1101.12,
      virginPoints: 4404,
      tierPoints: 80,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "HS78256",
        name: "Universal's Endless Summer Resort-Surfside Inn and Suites",
        boardBasis: "Room Only",
        content: {
          name: "Universal's Endless Summer Resort-Surfside Inn and Suites",
          vRating: "3",
          hotelDescription:
            "With a chilled beach vibe and a lakefront setting, Universal's Surfside Inn and Suites boasts rates for even the most budget-conscious guests.",
          atAGlance: [
            "Early Park Admission&#x2020; to The Wizarding World of Harry Potter&#x2122; and Universal's Volcano Bay (select attractions, ticket required)",
            "Free transportation to and from the parks",
            "Extra-affordable value hotel, with 2-bedroom suites that sleep up to 6 people",
          ],
          parentLocation: "Universal Orlando Resort, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-1-results_carousel.jpg?version=55",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1078487/1078487-1-mobile_main.jpg?version=55",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-2-results_carousel.jpg?version=55",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1078487/1078487-2-mobile_main.jpg?version=55",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-3-results_carousel.jpg?version=55",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1078487/1078487-3-mobile_main.jpg?version=55",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-4-results_carousel.jpg?version=53",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1078487/1078487-4-mobile_main.jpg?version=53",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-5-results_carousel.jpg?version=35",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-5-mobile_main.jpg?version=35",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-6-results_carousel.jpg?version=35",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-6-mobile_main.jpg?version=35",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-7-results_carousel.jpg?version=35",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-7-mobile_main.jpg?version=35",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-8-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-8-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-9-results_carousel.jpg?version=23",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-9-mobile_main.jpg?version=23",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-10-results_carousel.jpg?version=16",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-10-mobile_main.jpg?version=16",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-11-results_carousel.jpg?version=16",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-11-mobile_main.jpg?version=16",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-12-results_carousel.jpg?version=8",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-12-mobile_main.jpg?version=8",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-13-results_carousel.jpg?version=8",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-13-mobile_main.jpg?version=8",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-14-results_carousel.jpg?version=8",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1078487/1078487-14-mobile_main.jpg?version=8",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families"],
          boardBasis: ["Room Only"],
          hotelLocation: ["Close to Universal Orlando Resort"],
          accommodationType: ["Room"],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Safety Deposit Box",
            "Fitness Centre/Gym",
            "Games Room",
            "Swimming Pool",
          ],
          starRating: "3",
          propertyType: "Hotel",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2375.78,
      pricePerPerson: 1187.89,
      virginPoints: 4752,
      tierPoints: 80,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H1752",
        name: "Renaissance Orlando at SeaWorld",
        boardBasis: "Room Only",
        content: {
          name: "Renaissance Orlando at SeaWorld",
          vRating: "5",
          hotelDescription:
            "The Renaissance Orlando is perfectly located on International Drive. This plush, spacious hotel has oodles of restaurants, facilities and activities, including a sparkling, resort style pool.",
          atAGlance: [
            "Great location on International Drive",
            "R Aqua Zone",
            "Large outdoor pool and kids' pool",
          ],
          parentLocation: "International Drive, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-1-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-1-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-2-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-2-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-3-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-3-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-4-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-4-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-5-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-5-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-6-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-6-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-7-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-7-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-8-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-8-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-9-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-9-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-10-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-10-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-11-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-11-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-12-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-12-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-13-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-13-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-14-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-14-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-15-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-15-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-16-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-16-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-17-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-17-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-18-results_carousel.jpg?version=32",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-18-mobile_main.jpg?version=32",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-19-results_carousel.jpg?version=29",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-19-mobile_main.jpg?version=29",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-20-results_carousel.jpg?version=6",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/17282/17282-20-mobile_main.jpg?version=6",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-21-results_carousel.jpg?version=6",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-21-mobile_main.jpg?version=6",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-22-results_carousel.jpg?version=6",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-22-mobile_main.jpg?version=6",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-23-results_carousel.jpg?version=6",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-23-mobile_main.jpg?version=6",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-24-results_carousel.jpg?version=6",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/17282/17282-24-mobile_main.jpg?version=6",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families"],
          boardBasis: ["Room Only"],
          hotelLocation: ["Close to Universal Orlando Resort"],
          accommodationType: ["Room"],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "No Smoking",
            "Safety Deposit Box",
            "Fitness Centre/Gym",
            "Laundry Service",
            "Games Room",
            "Internet Access",
            "Swimming Pool",
            "Hot tub",
          ],
          starRating: "5",
          propertyType: "Hotel",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 3591.37,
      pricePerPerson: 1795.69,
      virginPoints: 7183,
      tierPoints: 140,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "HSMMCOJB",
        name: "JW Marriott Orlando Bonnett Creek",
        boardBasis: "Room Only",
        content: {
          name: "JW Marriott Orlando Bonnett Creek",
          vRating: "5",
          hotelDescription: "",
          atAGlance: [
            "Within the gates of Walt Disney World Resort, with fireworks view from the roof terrace",
            "9,920 sq ft luxury spa",
            "Complimentary shuttle service to Walt Disney World Resort",
            "Expansive hotel suites for families",
            "Rock climbing and mini golf",
          ],
          parentLocation: "Lake Buena Vista, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-1-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-1-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-2-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-2-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-3-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-3-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-4-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-4-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-5-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-5-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-6-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-6-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-7-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-7-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-8-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-8-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-9-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-9-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-10-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-10-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-11-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-11-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-12-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-12-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-13-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-13-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-14-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-14-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-15-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-15-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-16-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-16-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-17-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hsmmcojb/hsmmcojb-17-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-18-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-18-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-19-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-19-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-20-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hsmmcojb/hsmmcojb-20-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: [],
          boardBasis: ["Room Only"],
          hotelLocation: [],
          accommodationType: ["Room"],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Spa",
            "Room Service",
            "Valet parking",
            "Fitness Centre/Gym",
            "Laundry Service",
            "Internet Access",
            "Free transport to theme parks",
            "Swimming Pool",
            "Whirlpool",
          ],
          starRating: "5",
          propertyType: "Hotel",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2300.61,
      pricePerPerson: 1150.31,
      virginPoints: 4601,
      tierPoints: 80,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H2999",
        name: "Sonesta ES Suites Orlando - International Drive",
        boardBasis: "Room Only",
        content: {
          name: "Sonesta ES Suites Orlando - International Drive",
          vRating: "4",
          hotelDescription:
            "Newly re-imagined with updated guest suites and public areas, Sonesta ES Suites Orlando-International Drive offers a fresh modern look throughout this courtyard style hotel.&#xa0; This all-suite hotel is perfect for families &#x2013; with modern apartment-style suites that easily accommodate 6-8 guests and a central location in the International Drive Resort Area right across from the ICON Park Wheel.",
          atAGlance: [
            "Excellent location on International Drive",
            "Complimentary self-parking",
            "Complimentary shuttle to Walt Disney World and Universal Orlando; ",
          ],
          parentLocation: "International Drive, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-1-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-1-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-2-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-2-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-3-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-3-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-4-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-4-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-5-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-5-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-6-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-6-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-7-results_carousel.jpg?version=64",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-7-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-8-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-8-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-9-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-9-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-10-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-10-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-11-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-11-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-12-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-12-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-13-results_carousel.jpg?version=63",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-13-mobile_main.jpg?version=63",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-14-results_carousel.jpg?version=11",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-14-mobile_main.jpg?version=11",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-15-results_carousel.jpg?version=11",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-15-mobile_main.jpg?version=11",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-16-results_carousel.jpg?version=11",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-16-mobile_main.jpg?version=11",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-17-results_carousel.jpg?version=11",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-17-mobile_main.jpg?version=11",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/676023/676023-18-results_carousel.jpg?version=11",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/676023/676023-18-mobile_main.jpg?version=11",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families"],
          boardBasis: ["Bed and Breakfast"],
          hotelLocation: ["Close to Universal Orlando Resort"],
          accommodationType: ["Room"],
          hotelFacilities: [
            "Free Parking",
            "Room Service",
            "Safety Deposit Box",
            "Fitness Centre/Gym",
            "Laundry Service",
            "Internet Access",
            "Swimming Pool",
            "Hot tub",
          ],
          starRating: "4",
          propertyType: "Hotel",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2433.89,
      pricePerPerson: 1216.95,
      virginPoints: 4868,
      tierPoints: 80,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H2386",
        name: "Universal's Cabana Bay Beach Resort",
        boardBasis: "Room Only",
        content: {
          name: "Universal's Cabana Bay Beach Resort",
          vRating: "3+",
          hotelDescription:
            "Experience the excitement of Universal Orlando Resort in a whole new way at Universal&#x2019;s Cabana Bay Beach Resort, with more rooms and more fun for less.",
          atAGlance: [
            "Exclusive benefits available, including free parking",
            "2 swimming pools with water slide and lazy river",
            "Early Park Admission&#x2020; to The Wizarding World of Harry Potter&#x212;",
          ],
          parentLocation: "Universal Orlando Resort, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-1-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-1-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-2-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-2-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-3-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-3-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-4-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-4-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-5-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-5-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-6-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-6-mobile_main.jpg?version=99",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-7-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-7-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-8-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-8-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-9-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-9-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-10-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-10-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-11-results_carousel.jpg?version=98",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-11-mobile_main.jpg?version=98",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-12-results_carousel.jpg?version=78",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-12-mobile_main.jpg?version=78",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-13-results_carousel.jpg?version=71",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-13-mobile_main.jpg?version=71",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-14-results_carousel.jpg?version=46",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-14-mobile_main.jpg?version=46",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-15-results_carousel.jpg?version=34",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-15-mobile_main.jpg?version=34",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-16-results_carousel.jpg?version=27",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-16-mobile_main.jpg?version=27",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/540474/540474-17-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-17-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/540474/540474-18-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-18-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/540474/540474-19-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-19-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/540474/540474-20-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-20-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/540474/540474-21-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/540474/540474-21-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families", "Universal Hotel"],
          boardBasis: ["Room Only"],
          hotelLocation: ["Close to Universal Orlando Resort"],
          accommodationType: [],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Safety Deposit Box",
            "Fitness Centre/Gym",
            "Games Room",
            "Swimming Pool",
          ],
          propertyType: "Hotel",
          starRating: 3,
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2559.39,
      pricePerPerson: 1279.7,
      virginPoints: 5119,
      tierPoints: 100,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H6659",
        name: "Solara",
        boardBasis: "Self Catering",
        content: {
          name: "Solara",
          vRating: "NA",
          hotelDescription: "",
          atAGlance: [
            "3 to 8 bedroom townhouses and villas",
            "18-acre complex with a range of amenities",
            "Just 8 miles from Walt Disney World Resort",
          ],
          parentLocation: "Orlando Area Villa, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-1-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-1-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-2-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-2-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-3-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-3-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-4-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-4-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-5-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-5-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-6-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-6-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-7-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-7-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-8-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-8-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-9-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-9-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-10-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-10-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-11-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-11-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-12-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-12-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-13-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-13-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-14-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-14-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-15-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-15-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-16-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-16-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-17-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-17-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-18-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-18-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-19-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-19-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-20-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-20-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-21-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-21-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-22-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-22-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-23-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-23-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-24-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-24-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-25-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-25-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6659/h6659-26-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-26-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-27-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-27-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-28-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-28-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-29-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-29-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-30-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-30-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6659/h6659-31-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-31-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6659/h6659-32-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-32-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6659/h6659-33-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6659/h6659-33-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6659/h6659-34-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6659/h6659-34-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: [],
          boardBasis: ["Self Catering"],
          hotelLocation: [],
          accommodationType: [],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Free Parking",
            "Fitness Centre/Gym",
            "Games Room",
            "Internet Access",
            "Swimming Pool",
          ],
          starRating: "Villas",
          propertyType: "Villa",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2658.31,
      pricePerPerson: 1329.16,
      virginPoints: 5317,
      tierPoints: 100,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "DSDISNEYWDW1A",
        name: "Disney's All-Star Music Resort",
        boardBasis: "Room Only + Ticket (Select Ticket Below)",
        content: {
          name: "Disney's All-Star Music Resort",
          vRating: "3",
          hotelDescription:
            "What could be better than three resorts in one? Disney's All-Star Resorts has movies, music and sports, so there really is something for everyone! Each resort has its own pools and themed activities going on, so you'll always be spoilt for choice. And when you decide to head out to the parks, Disney Springs is just a short bus ride away. If you want a larger than life, fun-filled, unforgettable Disney holiday, this one's for you.",
          atAGlance: [
            "Extra time in the parks with Early Park Entry",
            "Complimentary use of the Walt Disney World Resort transportation system",
            "Family Suites available",
            "Music themed food court and swimming pools",
            "Free parking",
          ],
          parentLocation: "Walt Disney World, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-1-results_carousel.jpg?version=21",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-1-mobile_main.jpg?version=21",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-2-results_carousel.jpg?version=21",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-2-mobile_main.jpg?version=21",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-3-results_carousel.jpg?version=21",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-3-mobile_main.jpg?version=21",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-4-results_carousel.jpg?version=21",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-4-mobile_main.jpg?version=21",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-5-results_carousel.jpg?version=21",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-5-mobile_main.jpg?version=21",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-6-results_carousel.jpg?version=21",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-6-mobile_main.jpg?version=21",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-7-results_carousel.jpg?version=15",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-7-mobile_main.jpg?version=15",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-8-results_carousel.jpg?version=15",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-8-mobile_main.jpg?version=15",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-9-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-9-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/dsdisneywdw1a/dsdisneywdw1a-10-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/dsdisneywdw1a/dsdisneywdw1a-10-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families", "Disney Hotel"],
          boardBasis: ["Room Only"],
          hotelLocation: [],
          accommodationType: ["Room"],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Free Parking",
            "Room Service",
            "Safety Deposit Box",
            "Laundry Service",
            "Games Room",
            "Internet Access",
            "Free transport to theme parks",
            "Swimming Pool",
          ],
          starRating: "3",
          propertyType: "Hotel",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2623.7,
      pricePerPerson: 1311.85,
      virginPoints: 5247,
      tierPoints: 100,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H850",
        name: "Balmoral Resort",
        boardBasis: "Self Catering",
        content: {
          name: "Balmoral Resort",
          vRating: "NA",
          hotelDescription:
            "Balmoral at Waters Edge &#x2013; regal by name, regal by nature. A private resort, with high-end homes with everything you might possibly need from a home-away-from-home.",
          atAGlance: [
            "3 to 6 bedroom villas",
            "Clubhouse with restaurant and bar",
            "Pool zone with a zero-entry pool, water park and splash playground",
            "All villas feature a private swimming pool and covered lanai",
          ],
          parentLocation: "Orlando Area Villa, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-1-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-1-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-2-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-2-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-3-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-3-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-4-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-4-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-5-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-5-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-6-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-6-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-7-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-7-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-8-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-8-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-9-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-9-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-10-results_carousel.jpg?version=14",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-10-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-11-results_carousel.jpg?version=15",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-11-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-12-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-12-mobile_main.jpg?version=14",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-13-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h850/h850-13-mobile_main.jpg?version=15",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-14-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-14-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-15-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-15-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-16-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-16-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-17-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-17-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-18-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-18-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-19-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-19-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-20-results_carousel.jpg?version=13",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h850/h850-20-mobile_main.jpg?version=13",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families"],
          boardBasis: ["Self Catering"],
          hotelLocation: [],
          accommodationType: [],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Fitness Centre/Gym",
            "Games Room",
            "Swimming Pool",
          ],
          starRating: "Villas",
          propertyType: "Villa",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2487.05,
      pricePerPerson: 1243.53,
      virginPoints: 4974,
      tierPoints: 80,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H6647",
        name: "Orlando Area Villas",
        boardBasis: "Self Catering",
        content: {
          name: "Orlando Area Villas",
          vRating: "NA",
          hotelDescription:
            "A home-from-home, the Orlando Select Villas have everything you&#x2019;ll need for a true Floridian vacation.",
          atAGlance: [
            "Within 27 miles to the theme parks",
            "Private screened pool",
            "Easy drive to supermarkets, restaurants and shops",
            "3 to 7 bedroom villas",
          ],
          parentLocation: "Orlando Area Villa, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-1-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-1-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6647/h6647-2-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-2-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-3-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-3-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/h6647/h6647-4-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-4-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-5-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-5-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-6-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-6-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-7-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-7-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-8-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-8-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-9-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-9-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-10-results_carousel.jpg?version=1",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/h6647/h6647-10-mobile_main.jpg?version=1",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Families"],
          boardBasis: ["Self Catering"],
          hotelLocation: [],
          accommodationType: [],
          hotelFacilities: ["Internet Access", "Swimming Pool"],
          starRating: "Villas",
          propertyType: "Villa",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 2239.52,
      pricePerPerson: 1119.76,
      virginPoints: 4479,
      tierPoints: 80,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "HS84219",
        name: "Sonesta ES Suites Orlando - Lake Buena Vista",
        boardBasis: "Room Only",
        content: {
          name: "Sonesta ES Suites Orlando - Lake Buena Vista",
          vRating: "3",
          hotelDescription: "",
          atAGlance: [
            "Located in the Lake Buena Vista just one mile from the Walt Disney World&#xae; entrance",
            "Spacious suites with fully equipped kitchens",
            "Shuttle service available to Walt Disney World&#xae; and Universal Orlando\n",
            "Complimentary parking",
          ],
          parentLocation: "Lake Buena Vista, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hs84219/hs84219-1-results_carousel.jpg?version=19",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-1-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hs84219/hs84219-2-results_carousel.jpg?version=19",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-2-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hs84219/hs84219-3-results_carousel.jpg?version=19",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-3-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hs84219/hs84219-4-results_carousel.jpg?version=19",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-4-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hs84219/hs84219-5-results_carousel.jpg?version=19",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-5-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hs84219/hs84219-6-results_carousel.jpg?version=19",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-6-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/hs84219/hs84219-7-results_carousel.jpg?version=19",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-7-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-8-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-8-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-9-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-9-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-10-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-10-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-11-results_carousel.jpg?version=18",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/hs84219/hs84219-11-mobile_main.jpg?version=18",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: [],
          boardBasis: ["Self Catering"],
          hotelLocation: ["Close to Universal Orlando Resort"],
          accommodationType: ["Family Room or Suite"],
          hotelFacilities: [
            "Safety Deposit Box",
            "Fitness Centre/Gym",
            "Laundry Service",
            "Internet Access",
            "Swimming Pool",
            "Whirlpool",
          ],
          starRating: "4",
          propertyType: "Hotel",
        },
      },
      flyingClubMiles: 0,
    },
    {
      totalPrice: 12_355.33,
      pricePerPerson: 6177.67,
      virginPoints: 24_711,
      tierPoints: 400,
      departureDate: "2024-05-17",
      selectedDate: "2024-05-17",
      hotel: {
        id: "H6127",
        name: "Disney's Riviera Resort",
        boardBasis: "Room Only + Ticket (Select Ticket Below)",
        content: {
          name: "Disney's Riviera Resort",
          vRating: "5",
          hotelDescription:
            "Just like Disney&#x2019;s classic fairy tales, this Disney Deluxe Villa Resort is inspired by the enchanting villages and romantic castles of Europe, with grand fountains, elegant socialising spaces, waterfront gardens, and rooftop dining that has the feel of a cliffside restaurant in Italy or the French Riviera. The self-catering studios and villas at Disney&#x2019;s Riviera Resort let you mix days of park-hopping (with the new Disney Skyliner Transportation giving you a bird&#x2019;s eye view as it whisks you to Epcot and Disney&#x2019;s Hollywood Studios) with days at the hotel&#x2019;s relaxed Beau Soleil Pool or its fun family Riviera Pool, which features an interactive splash zone with a unique Fantasia spin.",
          atAGlance: [
            "Extra time in the parks with Early Park Entry",
            "Complimentary use of the Walt Disney World Resort transportation system",
            "French Riviera and European-inspired",
            "Close to Epcot",
            "Free parking",
          ],
          parentLocation: "Walt Disney World, Orlando",
          images: [
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-1-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-1-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-2-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-2-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-3-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-3-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-4-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-4-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-5-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-5-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-6-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-6-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-7-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-7-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-8-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-8-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-9-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-9-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-10-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-10-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-11-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-11-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-12-results_carousel.jpg?version=25",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-12-mobile_main.jpg?version=25",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-13-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-13-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-14-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-14-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-15-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-15-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-16-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-16-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-17-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-17-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-18-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-18-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-19-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-19-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-20-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-20-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-21-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-21-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-22-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-22-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-23-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-23-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-24-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-24-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
            {
              RESULTS_CAROUSEL: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/300/1176541/1176541-25-results_carousel.jpg?version=7",
              },
              MOBILE_MAIN: {
                url: "//d3hk78fplavsbl.cloudfront.net/assets/common-prod/hotel/205/1176541/1176541-25-mobile_main.jpg?version=7",
              },
              IMAGE_DESCRIPTION: "",
            },
          ],
          holidayType: ["Disney Hotel"],
          boardBasis: ["Room Only"],
          hotelLocation: [],
          accommodationType: [],
          hotelFacilities: [
            "Restaurant",
            "Bar",
            "Free Parking",
            "Safety Deposit Box",
            "Games Room",
            "Internet Access",
            "Free transport to theme parks",
            "Swimming Pool",
          ],
          starRating: "5",
          propertyType: "Hotel",
        },
      },
      flyingClubMiles: 0,
    },
  ],
};

export const mockAppliedNoFilters: AppliedFilters = {
  hotelFacilities: [],
  starRating: [],
  pricePerPerson: [],
};

export const mockAppliedStarRatingFilter: AppliedFilters = {
  hotelFacilities: [],
  starRating: ["4"],
  pricePerPerson: [],
};

export const mockAppliedPricePerPersonFilter: AppliedFilters = {
  hotelFacilities: [],
  starRating: [],
  pricePerPerson: [[1000, 2000]],
};

export const mockAppliedHotelFacilityFilter: AppliedFilters = {
  hotelFacilities: ["Bar"],
  starRating: [],
  pricePerPerson: [],
};

export const mockAppliedHotelFacilityStarRatingFilter: AppliedFilters = {
  hotelFacilities: ["Bar"],
  starRating: ["5"],
  pricePerPerson: [],
};

export const mockAppliedAllFilterType: AppliedFilters = {
  hotelFacilities: ["Bar"],
  starRating: ["5"],
  pricePerPerson: [[1000, 2000]],
};

export const mockState: SearchResultsState = {
  appliedFilters: mockAppliedNoFilters,
  initialSearchResults: mockBookingResponseWithNoHolidays,
  searchResults: mockBookingResponseWithNoHolidays,
};

export const mockAddPricePerPerson: SearchResultsAction = {
  type: "ADD_PRICE_PER_PERSON_FILTER",
  pricePerPerson: [1000, 2000],
};

export const mockRemovePricePerPerson: SearchResultsAction = {
  type: "REMOVE_PRICE_PER_PERSON_FILTER",
  pricePerPerson: [1000, 2000],
};

export const mockAddStarRating: SearchResultsAction = {
  type: "ADD_STAR_RATING_FILTER",
  rating: "4",
};

export const mockRemoveStarRating: SearchResultsAction = {
  type: "REMOVE_STAR_RATING_FILTER",
  rating: "4",
};

export const mockAddHotelFacility: SearchResultsAction = {
  type: "ADD_HOTEL_FACILITIES_FILTER",
  facility: "Bar",
};

export const mockRemoveHotelFacility: SearchResultsAction = {
  type: "REMOVE_HOTEL_FACILITIES_FILTER",
  facility: "Bar",
};
