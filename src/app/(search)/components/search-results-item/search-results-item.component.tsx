"use client";

import Link from "next/link";

import styles from "./search-results-item.module.css";
import { SearchResultsItemImageComponent } from "@/app/(search)/components/search-results-item-image";
import { Holiday } from "@/types";
import {
  stringToCurrencyString,
  stringToDisplayDateString,
} from "@/utils/helpers";

interface SearchResultsItemComponentProperties {
  holiday: Holiday;
  isDesktop: boolean;
}

export function SearchResultsItemComponent({
  holiday,
  isDesktop,
}: SearchResultsItemComponentProperties) {
  return (
    <div className={styles.searchResultItem__holiday}>
      <div className={styles.searchResultItem__holiday____overview}>
        <h3 className={styles.searchResultItem__holiday____overviewTitle}>
          {holiday.hotel.name}
        </h3>
        <SearchResultsItemImageComponent
          holiday={holiday}
          isDesktop={isDesktop}
        />
      </div>

      <div className={styles.searchResultItem__holiday____details}>
        <dl className={styles.searchResultItem__holiday____detailsList}>
          <dt className={styles.searchResultItem__holiday____detailsTerm}>
            Holiday type:
          </dt>
          <dd
            className={styles.searchResultItem__holiday____detailsDescription}
          >
            <em>{holiday.hotel.boardBasis}</em>
          </dd>

          <dt className={styles.searchResultItem__holiday____detailsTerm}>
            Star rating:
          </dt>
          <dd
            className={styles.searchResultItem__holiday____detailsDescription}
          >
            <em>{holiday.hotel.content.starRating}</em> out of 5 rating
          </dd>

          <dt className={styles.searchResultItem__holiday____detailsTerm}>
            Date you selected:
          </dt>
          <dd
            className={styles.searchResultItem__holiday____detailsDescription}
          >
            {stringToDisplayDateString(holiday.selectedDate)}
          </dd>

          <dt className={styles.searchResultItem__holiday____detailsTerm}>
            Date departing:
          </dt>
          <dd
            className={styles.searchResultItem__holiday____detailsDescription}
          >
            {stringToDisplayDateString(holiday.departureDate)}
          </dd>
        </dl>
        <div>
          <dl className={styles.searchResultItem__holiday____detailsList}>
            <dt className={styles.searchResultItem__holiday____detailsTerm}>
              Price Per Person:
            </dt>
            <dd
              className={styles.searchResultItem__holiday____detailsDescription}
            >
              {stringToCurrencyString(holiday.pricePerPerson)}
            </dd>
          </dl>

          <Link
            aria-label={`Click here to view details of Hotel ${holiday.hotel.name}`}
            className={styles.searchResultItem__holiday____button}
            href={`/${holiday.hotel.id}/details`}
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
