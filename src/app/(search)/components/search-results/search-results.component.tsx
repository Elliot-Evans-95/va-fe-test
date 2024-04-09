"use client";

import Image from "next/image";

import styles from "./search-results.module.css";
import { useMediaQuery } from "@/utils/hooks";
import Link from "next/link";
// import { DateTime } from "luxon";
import { DATE_FORMATS } from "@/utils/constants";
import { SearchResultsState } from "@/utils/reducer/search-reducer.types";

interface SearchResultsComponentProperties {
  state: SearchResultsState;
}

export function SearchResultsComponent({
  state,
}: SearchResultsComponentProperties) {
  const desktopImage = useMediaQuery("(min-width: 500px)");

  return (
    <section className={styles.searchResult}>
      <hgroup>
        <h2>{state.searchResults.holidays?.length} Holidays found</h2>
        <p>
          From {state.searchResults.destination.gateway} into{" "}
          {state.searchResults.destination.name}
        </p>
      </hgroup>
      {state.searchResults.holidays?.map((holiday) => {
        return (
          <div key={holiday.hotel.id} className={styles.searchResult__holiday}>
            <div className={styles.searchResult__holiday____overview}>
              <h3 className={styles.searchResult__holiday____overviewTitle}>
                {holiday.hotel.name}
              </h3>
              {holiday.hotel.content.images.length > 0 ? (
                desktopImage ? (
                  <Image
                    src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
                    alt={
                      holiday.hotel.content.images[0].IMAGE_DESCRIPTION ??
                      `Photo of ${holiday.hotel.name} hotel`
                    }
                    width={460}
                    height={310}
                  />
                ) : (
                  <Image
                    src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
                    alt={
                      holiday.hotel.content.images[0].IMAGE_DESCRIPTION ??
                      `Photo of ${holiday.hotel.name} hotel`
                    }
                    width={230}
                    height={155}
                  />
                )
              ) : (
                <div>No Images of {holiday.hotel.name}</div>
              )}
            </div>

            {/* TODO: use DL and DT and DD */}
            <div className={styles.searchResult__holiday____details}>
              <div>
                <b>{holiday.hotel.boardBasis}</b>
                <p>
                  <em>{holiday.hotel.content.vRating}</em> out of 5 rating
                </p>

                {/*<p>*/}
                {/*  Date you selected:{" "}*/}
                {/*  <em>*/}
                {/*    {DateTime.fromFormat(*/}
                {/*      holiday.selectedDate,*/}
                {/*      DATE_FORMATS.API_DATE,*/}
                {/*    ).toFormat(DATE_FORMATS.DISPLAY_DATE)}*/}
                {/*  </em>*/}
                {/*</p>*/}
                {/*<p>*/}
                {/*  Date departing:{" "}*/}
                {/*  <em>*/}
                {/*    {DateTime.fromFormat(*/}
                {/*      holiday.departureDate,*/}
                {/*      DATE_FORMATS.API_DATE,*/}
                {/*    ).toFormat(DATE_FORMATS.DISPLAY_DATE)}*/}
                {/*  </em>*/}
                {/*</p>*/}
              </div>
              <div>
                <p>
                  Price Per Person:{" "}
                  <em>
                    {new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    }).format(holiday.pricePerPerson)}
                  </em>
                </p>

                <Link
                  aria-label={`Click here to view details of Hotel ${holiday.hotel.name}`}
                  className={styles.searchResult__holiday____button}
                  href={`/${holiday.hotel.id}/details`}
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
