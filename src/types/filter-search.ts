export type FilterDataType =
  | "PRICE_PER_PERSON"
  | "HOTEL_FACILITIES"
  | "STAR_RATING";

export interface FilterSearchItem {
  id: number;
  name: string;
  displayName: string;
  value: string | [min: number, max: number];
  type: FilterDataType;
}

export interface FilterSearchData {
  pricePerPerson: FilterSearchItem[];
  hotelFacilities: FilterSearchItem[];
  starRating: FilterSearchItem[];
}
