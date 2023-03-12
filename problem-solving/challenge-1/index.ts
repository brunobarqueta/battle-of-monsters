export function numbersFractionCalculator(arr: number[]) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach((number) => {
    number > 0 ? positives++ :
      number < 0 ? negatives++ : zeros++
  })

  return {
    positives: (positives / arr.length).toFixed(6),
    negative: (negatives / arr.length).toFixed(6),
    zeros: (zeros / arr.length).toFixed(6),
  };
}