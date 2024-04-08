import { BookingResponse } from "@/types/booking";
import { Rooms } from "@/utils/composition.service";
import Image from 'next/image'
import {filterResultsByRating} from "@/utils/filterResultsByRating";
import {filterResultsByPricePerPerson} from "@/utils/filterResultsByPricePerPerson";

async function getData(params: { [key: string]: string | string[] | undefined }) {
  const body = {
    bookingType: params.bookingType,
    direct: false,
    location: params.location,
    departureDate: params.departureDate,
    duration: params.duration,
    gateway: params.gateway,
    partyCompositions: Rooms.parseAndConvert([params.partyCompositions as string]),
  };

  const res = await fetch(
    "https://www.virginholidays.co.uk/cjs-search-api/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SearchResultsComponent({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response: BookingResponse = await getData(searchParams);
  // const testFilter = await filterResultsByRating(response, '4')
  const testFilter = await filterResultsByPricePerPerson(response, 2500)

  console.log('testFilter: ', testFilter);

  return (
      <div>
        <aside>
          <h3>Filter your search</h3>
          <div>
            <p>Price per person</p>
            <ol>
              <li>Over £1000</li>
              <li>£100 - £500</li>
              <li>£0 - £100</li>
            </ol>
          </div>
          <div>
            <p>Hotel facilities</p>
            <ol>
              <li>Hotel facilities list</li>
            </ol>
          </div>
          <div>
            <p>Star Rating</p>
            <ol>
              <li>5 Star</li>
              <li>4 Star</li>
              <li>3 Star</li>
              <li>2 Star</li>
              <li>1 Star</li>
            </ol>
          </div>
        </aside>
        <section>
          <h2>{testFilter?.holidays?.length} results found</h2>
          <h3>from: {testFilter?.destination.gateway} to: {response?.destination.name}</h3>
          {testFilter?.holidays?.map((holiday) => {
            return (
                <div key={holiday.hotel.id} style={{marginBottom: '4rem'}}>

                  <div>
                    <p>Name: {holiday.hotel.name}</p>
                    <p>boardBasis: {holiday.hotel.boardBasis}</p>
                    <p>rating: {holiday.hotel.content.vRating}</p>
                    <p>price per person: {holiday.pricePerPerson}</p>
                    {holiday.hotel.content.images.length > 0 ?
                        <Image
                            src={holiday.hotel.content.images[0].RESULTS_CAROUSEL.url}
                            alt={holiday.hotel.content.images[0].IMAGE_DESCRIPTION ? holiday.hotel.content.images[0].IMAGE_DESCRIPTION: `Photo of ${holiday.hotel.name} hotel`}
                            width={460}
                            height={310}
                        /> :
                        <div>No Images of {holiday.hotel.name}</div>
                    }
                  </div>

                  <p>departureDate: {holiday.departureDate}</p>
                  <p>selectedDate: {holiday.selectedDate}</p>
                  <p>flyingClubMiles: {holiday.flyingClubMiles}</p>
                  <p>tierPoints: {holiday.tierPoints}</p>
                  <p>totalPrice: {holiday.totalPrice}</p>
                </div>
            )
          })}

        </section>
      </div>
  );
}
