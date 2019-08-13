  const GIGASECOND_IN_MS = 10 ** 12  
  export const gigasecond = (input) => new Date(input.getTime() + GIGASECOND_IN_MS)