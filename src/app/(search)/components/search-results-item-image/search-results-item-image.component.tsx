"use client";

import Image from "next/image";

import styles from "./search-results-item-image.module.css";
import { Holiday } from "@/types";

interface SearchResultsItemComponentProperties {
  holiday: Holiday;
  isDesktop: boolean;
}

export function SearchResultsItemImageComponent({
  holiday,
  isDesktop,
}: SearchResultsItemComponentProperties) {
  if (holiday.hotel.content.images.length === 0) {
    return (
      <div className={styles.searchResultsItemImage}>
        No Images of {holiday.hotel.name}
      </div>
    );
  }

  if (isDesktop) {
    return (
      <Image
        className={styles.searchResultsItemImage}
        src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
        alt={
          holiday.hotel.content.images[0].IMAGE_DESCRIPTION ||
          `Photo of ${holiday.hotel.name} hotel`
        }
        width={460}
        height={310}
      />
    );
  }

  return (
    <Image
      className={styles.searchResultsItemImage}
      src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
      alt={
        holiday.hotel.content.images[0].IMAGE_DESCRIPTION ??
        `Photo of ${holiday.hotel.name} hotel`
      }
      width={230}
      height={155}
    />
  );
}
