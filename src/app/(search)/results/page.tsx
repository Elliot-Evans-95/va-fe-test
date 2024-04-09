import {Suspense} from 'react';
import Loading from './loading';
import {Rooms} from "@/utils/composition.service";
import {BookingResponse} from "@/types/booking";
import type {Metadata, ResolvingMetadata} from "next";
import SearchResultsContainer from "@/app/(search)/containers/search-results.container";
import {getSearchData} from "@/utils/services/getSearchData";

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const body = {
        bookingType: params.bookingType,
        direct: false,
        location: params.location,
        departureDate: params.departureDate,
        duration: params.duration,
        gateway: params.gateway,
        partyCompositions: Rooms.parseAndConvert([params.partyCompositions as string]),
    };

    return {
        title: `Virgin Atlantic | Search results for ${body.bookingType} to ${body.location}`,
        description: `Search results for ${body.bookingType} to ${body.location}`,
    }
}

export default async function Results({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const response: BookingResponse = await getSearchData(searchParams);

    return (
        <Suspense fallback={<Loading/>}>
            <SearchResultsContainer response={response} />
        </Suspense>
    )
}
