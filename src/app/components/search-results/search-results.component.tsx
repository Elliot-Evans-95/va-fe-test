'use client'

import Image from 'next/image'
import {TodoState} from "@/app/(search)/utils/search-reducer";

import styles from './search-results.module.css'
import {useMediaQuery} from "@/utils/hooks";
import Link from "next/link";

interface SearchResultsComponentProps {
  response: TodoState
}

export default function SearchResultsComponent({ response }: SearchResultsComponentProps) {
  const desktopImage = useMediaQuery('(min-width: 500px)')

  return (
        <section className={styles.searchResult}>
            <hgroup>
                <h2>{response.results.holidays?.length} Holidays found</h2>
                <p>From {response.results.destination.gateway} into {response.results.destination.name}</p>
            </hgroup>
            {response.results.holidays?.map((holiday) => {
                return (
                    <div key={holiday.hotel.id} className={styles.searchResult__holiday}>
                    <div className={styles.searchResult__holiday____overview}>
                              <h4 className={styles.searchResult__holiday____overviewTitle}>{holiday.hotel.name}</h4>
                              {holiday.hotel.content.images.length > 0 ?
                                  desktopImage ? <Image
                                      src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
                                      alt={holiday.hotel.content.images[0].IMAGE_DESCRIPTION ? holiday.hotel.content.images[0].IMAGE_DESCRIPTION : `Photo of ${holiday.hotel.name} hotel`}
                                      width={460}
                                      height={310}
                                  /> : <Image
                                      src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
                                      alt={holiday.hotel.content.images[0].IMAGE_DESCRIPTION ? holiday.hotel.content.images[0].IMAGE_DESCRIPTION : `Photo of ${holiday.hotel.name} hotel`}
                                      width={230}
                                      height={155}
                                  /> :
                                  <div>No Images of {holiday.hotel.name}</div>
                              }
                      </div>

                      <div className={styles.searchResult__holiday____details}>
                          <div>
                              <b>{holiday.hotel.boardBasis}</b>
                              <p><em>{holiday.hotel.content.vRating}</em> out of 5 rating</p>

                              <p>Date you selected: <em>{holiday.selectedDate}</em></p>
                              <p>Date departing: <em>{holiday.departureDate}</em></p>
                          </div>
                          <div>
                              <p>Price Per Person: <em>{new Intl.NumberFormat('en-GB', {
                                  style: 'currency',
                                  currency: 'GBP'
                              }).format(
                                  holiday.pricePerPerson,
                              )}</em></p>

                              <Link
                                  aria-label={`Click here to view details of Hotel ${holiday.hotel.name}`}
                                  className={styles.searchResult__holiday____button}
                                  href={`/${holiday.hotel.id}/details`}>View details
                              </Link>
                          </div>
                      </div>
                  </div>
              )
          })}

        </section>
  );
}
