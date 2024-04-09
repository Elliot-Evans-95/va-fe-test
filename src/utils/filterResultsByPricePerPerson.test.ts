import {describe, expect, test} from 'vitest'
import {filterResultsByPricePerPerson} from "@/utils/filterResultsByPricePerPerson";

describe('filterResultsByPricePerPerson', () => {
    test('Hotels that are less than 2000 are only displayed', () => {
        const actual = filterResultsByPricePerPerson({}, 2000)
        const expected = {}

        expect(actual).toBe(expected)
    })
})
