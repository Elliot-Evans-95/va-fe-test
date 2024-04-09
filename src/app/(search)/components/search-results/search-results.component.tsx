"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./search-results.module.css";
import {
  stringToCurrencyString,
  stringToDisplayDateString,
} from "@/utils/helpers";
import { useMediaQuery } from "@/utils/hooks";
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

            <div className={styles.searchResult__holiday____details}>
              <dl className={styles.searchResult__holiday____detailsList}>
                <dt className={styles.searchResult__holiday____detailsTerm}>
                  Holiday type:
                </dt>
                <dd
                  className={styles.searchResult__holiday____detailsDescription}
                >
                  <em>{holiday.hotel.boardBasis}</em>
                </dd>

                <dt className={styles.searchResult__holiday____detailsTerm}>
                  Star rating:
                </dt>
                <dd
                  className={styles.searchResult__holiday____detailsDescription}
                >
                  <em>{holiday.hotel.content.vRating}</em> out of 5 rating
                </dd>

                <dt className={styles.searchResult__holiday____detailsTerm}>
                  Date you selected:
                </dt>
                <dd
                  className={styles.searchResult__holiday____detailsDescription}
                >
                  {stringToDisplayDateString(holiday.selectedDate)}
                </dd>

                <dt className={styles.searchResult__holiday____detailsTerm}>
                  Date departing:
                </dt>
                <dd
                  className={styles.searchResult__holiday____detailsDescription}
                >
                  {stringToDisplayDateString(holiday.departureDate)}
                </dd>
              </dl>
              <div>
                <dl className={styles.searchResult__holiday____detailsList}>
                  <dt className={styles.searchResult__holiday____detailsTerm}>
                    Price Per Person:
                  </dt>
                  <dd
                    className={
                      styles.searchResult__holiday____detailsDescription
                    }
                  >
                    {stringToCurrencyString(holiday.pricePerPerson)}
                  </dd>
                </dl>

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
