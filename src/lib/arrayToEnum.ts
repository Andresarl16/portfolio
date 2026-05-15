export function getEnumObjectFromArray<
  T extends Readonly<Array<string | number>>,
  U extends T[number],
>(array: T) {
  return Object.freeze(
    array?.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: cur,
      }),
      {} as { [K in U]: K }
    )
  );
}
