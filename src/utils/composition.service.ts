/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/ban-ts-comment */

import {
  Parser,
  Result,
  Success,
  Failure,
  seqMap,
  string,
  regex,
  sepBy,
  of,
} from "parsimmon";

import { PartyComposition } from "@/types/booking";

const oneOrMoreAdults: Parser<number> = seqMap(
  string("a"),
  regex(/[1-9]/),
  (_, a) => Number.parseInt(a),
);
const childAges: Parser<number[]> = sepBy(
  seqMap(string("c"), regex(/((1[0-7])|[2-9])/), (_, age) =>
    Number.parseInt(age),
  ),
  string(","),
);
const infants: Parser<number> = seqMap(string("i"), regex(/\d/), (_, index) =>
  Number.parseInt(index),
);

const roomParser: Parser<PartyComposition> = seqMap(
  oneOrMoreAdults,
  // @ts-ignore
  string(",").or(of()),
  childAges.or(of([])),
  // @ts-ignore
  string(",").or(of()),
  infants.or(of(0)),
  (a, _, ages, __, index) => ({
    adults: a,
    childAges: ages,
    infants: index,
  }),
);

const isSuccess = <T>(result: Success<T> | Failure): result is Success<T> => {
  return (result as Success<T>).value !== undefined;
};

const createParser = <T>(
  parser: Parser<T>,
): ((compositions: string[]) => T[] | undefined) => {
  return (composition: string[]): T[] | undefined => {
    if (composition == undefined) {
      return undefined;
    }
    // eslint-disable-next-line unicorn/no-array-reduce
    return (composition || []).reduce(
      (accumulator: T[] | undefined, next: string) => {
        if (accumulator == undefined) {
          return accumulator;
        }
        if (next == undefined || next === "") {
          return;
        }
        const result: Result<T> = parser.parse(next);
        return isSuccess(result) ? [...accumulator, result.value] : undefined;
      },
      [] as T[],
    );
  };
};

export namespace Rooms {
  export const parse: (
    compositions: string[],
  ) => PartyComposition[] | undefined = createParser(roomParser);

  // @ts-ignore
  export const parseAndConvert: (
    compositions: string[],
  ) => PartyComposition[] = (compositions: string[]) =>
    parse(compositions)?.map((room) => ({
      adults:
        room?.adults +
        (room?.childAges?.filter((age) => age >= 16)?.length ?? 0),
      childAges: room?.childAges?.map((c) => c) ?? [],
      infants: room?.infants ?? 0,
    }));

  export const format: (compositions: PartyComposition[]) => string[] = (
    compositions: PartyComposition[],
  ) =>
    compositions.map((composition) => {
      const childAges =
        composition.childAges.length > 0
          ? `,c${composition.childAges.join(",c")}`
          : "";
      const infants = composition.infants > 0 ? `,i${composition.infants}` : "";
      return `a${composition.adults}${childAges}${infants}`;
    });

  export const prettyFormat = (composition: PartyComposition[]): string => {
    if (!composition) return "";

    const total = composition.reduce(
      (accumulator, room) =>
        accumulator + room.adults + room.childAges.length + room.infants,
      0,
    );
    return `${total} ${total > 1 ? "people" : "person"} / ${composition.length} ${composition.length > 1 ? "rooms" : "room"}`;
  };
}
