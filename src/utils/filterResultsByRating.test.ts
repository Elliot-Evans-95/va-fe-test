import {describe, expect, test} from 'vitest'
import {filterResultsByPricePerPerson} from "@/utils/filterResultsByPricePerPerson";
import {filterResultsByRating} from "@/utils/filterResultsByRating";

describe('filterResultsByRating', () => {
    test('Hotels that are 4 star are only displayed', () => {
        const actual = filterResultsByRating({}, '4')
        const expected = {}

        expect(actual).toBe(expected)
    })
})
