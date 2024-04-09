import { Suspense } from "react";
import Loading from "./loading";
import { Rooms } from "@/utils/composition.service";
import { BookingResponse } from "@/types/booking";
import type { Metadata } from "next";
import { getSearchData } from "@/utils/services/get-search-data";
import { SearchResultsContainer } from "@/app/(search)/containers";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const body = {
    bookingType: searchParams.bookingType,
    direct: false,
    location: searchParams.location,
    departureDate: searchParams.departureDate,
    duration: searchParams.duration,
    gateway: searchParams.gateway,
    partyCompositions: Rooms.parseAndConvert([
      searchParams.partyCompositions as string,
    ]),
  };

  return {
    title: `Virgin Atlantic | Search results for ${body.bookingType} to ${body.location}`,
    description: `Search results for ${body.bookingType} to ${body.location}`,
  };
}

export default async function Results({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response: BookingResponse = await getSearchData(searchParams);

  return (
    <Suspense fallback={<Loading />}>
      <SearchResultsContainer response={response} />
    </Suspense>
  );
}
