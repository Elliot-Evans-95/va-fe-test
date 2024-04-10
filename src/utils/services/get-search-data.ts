import { Rooms } from "@/utils/composition.service";

export async function getSearchData(parameters: {
  [key: string]: string | string[] | undefined;
}) {
  const body = {
    bookingType: parameters.bookingType,
    direct: false,
    location: parameters.location,
    departureDate: parameters.departureDate,
    duration: parameters.duration,
    gateway: parameters.gateway,
    partyCompositions: Rooms.parseAndConvert([
      parameters.partyCompositions as string,
    ]),
  };

  const response = await fetch(
    "https://www.virginholidays.co.uk/cjs-search-api/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
