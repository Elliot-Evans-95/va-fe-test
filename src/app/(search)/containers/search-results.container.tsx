'use client';

import {BookingResponse} from "@/types/booking";
import {useReducer} from "react";
import FilterSearchComponent from "@/app/components/filter-search/filter-search.component";
import SearchResultsComponent from "@/app/components/search-results/search-results.component";
import {searchReducer} from "@/app/(search)/utils/search-reducer";

interface SearchResultsContainerProps {
    response: BookingResponse;
}

export default function SearchResultsContainer({ response }: SearchResultsContainerProps) {
    const [state, dispatch] = useReducer(searchReducer, { results: response, initialResults: response });

    return (
        <>
            <FilterSearchComponent searchFilterActions={dispatch} />
            <SearchResultsComponent response={state} />
        </>
    )
}