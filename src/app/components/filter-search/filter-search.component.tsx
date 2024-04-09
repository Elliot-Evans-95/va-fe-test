'use client';

import {Dispatch} from "react";
import {TodoAction} from "@/app/(search)/utils/search-reducer";

import styles from './filter-search.module.css'

interface FilterSearchComponentProps {
  searchFilterActions: Dispatch<TodoAction>
}

export default function FilterSearchComponent({ searchFilterActions }: FilterSearchComponentProps) {
  return (
        <aside className={styles.filterSearch}>
          <h2 className={styles.filterSearch__heading}>Filter your search</h2>

          <fieldset className={styles.filterSearch__fieldset}>
            <legend>Price per person</legend>

            <ul className={styles.filterSearch__fieldsetList}>
              <li>
                <label htmlFor="over-2000" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="over-2000"
                      name="over-2000"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_PRICE_PER_PERSON',
                        pricePerPerson: [2000, 99999]
                      })}
                  />
                  Over £2000
                </label>
              </li>
              <li>
                <label htmlFor="1000-2000" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="1000-2000"
                      name="1000-2000"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_PRICE_PER_PERSON',
                        pricePerPerson: [1000, 2000]
                      })}
                  />
                  £1000 - £2000
                </label>
              </li>
              <li>
                <label htmlFor="under-1000" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="under-1000"
                      name="under-1000"
                      onClick={() => searchFilterActions({ type: 'FILTER_BY_PRICE_PER_PERSON', pricePerPerson: [0, 1000] })}
                  />
                  Under £1000
                </label>
              </li>
            </ul>
          </fieldset>

          <fieldset className={styles.filterSearch__fieldset}>
            <legend>Hotel facilities</legend>

            <ul className={styles.filterSearch__fieldsetList}>
              <li>
                <label htmlFor="restaurant" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="restaurant"
                      name="restaurant"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Restaurant'
                      })}
                  />
                  Restaurant
                </label>
              </li>
              <li>
                <label htmlFor="bar" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="bar"
                      name="bar"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Bar'
                      })}
                  />
                  Bar
                </label>
              </li>
              <li>
                <label htmlFor="safety-deposit-box" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="safety-deposit-box"
                      name="safety-deposit-box"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Safety Deposit Box'
                      })}
                  />
                  Safety Deposit Box
                </label>
              </li>
              <li>
                <label htmlFor="fitness-centre-Gym" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="fitness-centre-Gym"
                      name="fitness-centre-Gym"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Fitness Centre/Gym'
                      })}
                  />
                  Fitness Centre/Gym
                </label>
              </li>
              <li>
                <label htmlFor="laundry-service" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="laundry-service"
                      name="laundry-service"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Laundry Service'
                      })}
                  />
                  Laundry Service
                </label>
              </li>
              <li>
                <label htmlFor="games-room" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="games-room"
                      name="games-room"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Games Room'
                      })}
                  />
                  Games Room
                </label>
              </li>
              <li>
                <label htmlFor="internet-access" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="internet-access"
                      name="internet-access"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Internet Access'
                      })}
                  />
                  Internet Access
                </label>
              </li>
              <li>
                <label htmlFor="free-transport-to-theme-parks" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="free-transport-to-theme-parks"
                      name="free-transport-to-theme-parks"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Free transport to theme parks'
                      })}
                  />
                  Free transport to theme parks
                </label>
              </li>
              <li>
                <label htmlFor="swimming-pool" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="swimming-pool"
                      name="swimming-pool"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Swimming Pool'
                      })}
                  />
                  Swimming Pool
                </label>
              </li>
              <li>
                <label htmlFor="hot-tub" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="hot-tub"
                      name="hot-tub"
                      onClick={() => searchFilterActions({
                        type: 'FILTER_BY_HOTEL_FACILITIES',
                        facility: 'Hot Tub'
                      })}
                  />
                  Hot Tub
                </label>
              </li>
            </ul>
          </fieldset>

          <fieldset className={styles.filterSearch__fieldset}>
            <legend>Star Rating</legend>

            <ul className={styles.filterSearch__fieldsetList}>
              <li>
                <label htmlFor="5-star-rating" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="5-star-rating"
                      name="5-star-rating"
                      onClick={() => searchFilterActions({type: 'FILTER_BY_RATING', rating: '5'})}
                  />
                  5 Stars
                </label>
              </li>
              <li>
              <label htmlFor="4-star-rating" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="4-star-rating"
                      name="4-star-rating"
                      onClick={() => searchFilterActions({ type: 'FILTER_BY_RATING', rating: '4' })}
                  />
                  4 Stars
                </label>
              </li>
              <li>
                <label htmlFor="3-star-rating" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="3-star-rating"
                      name="3-star-rating"
                      onClick={() => searchFilterActions({type: 'FILTER_BY_RATING', rating: '3'})}
                  />
                  3 Stars
                </label>
              </li>
              <li>
                <label htmlFor="2-star-rating" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="2-star-rating"
                      name="2-star-rating"
                      onClick={() => searchFilterActions({type: 'FILTER_BY_RATING', rating: '2'})}
                  />
                  2 Stars</label>
              </li>
              <li>
                <label htmlFor="1-star-rating" className={styles.filterSearch__checkbox____wrapper}>
                  <input
                      type="checkbox"
                      id="1-star-rating"
                      name="1-star-rating"
                      onClick={() => searchFilterActions({type: 'FILTER_BY_RATING', rating: '1'})}
                  />
                  1 Star</label>
              </li>
            </ul>
          </fieldset>

        </aside>
  );
}
