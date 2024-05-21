interface calculateProps {
  startingLevel: number
  targetLevel: number
  isLucky: boolean
  isShadow: boolean
  isPurified: boolean
}

const calculate = ({
  startingLevel,
  targetLevel,
  isLucky,
  isShadow,
  isPurified
} : calculateProps) => {
  let candy: number = 0;
  let xl: number = 0;
  let stardust: number = 0;

  if (isShadow) {
    // All costs of a shadow pokemon are 1.2 times more expensive (rounded up)
    // On each power up
    for (let i = startingLevel; i <= targetLevel; i++) {
      candy += Math.ceil(candyToNextLevel(i) * 1.2);
      xl += Math.ceil(xlToNextLevel(i) * 1.2);
      stardust += Math.ceil(stardustToNextLevel(i) * 1.2);
    }
  } else if (isPurified) {
    // All costs of a purified pokemon are 10% cheaper (rounded up)
    // On each power up
    for (let i = startingLevel; i < targetLevel; i++) {
      candy += Math.ceil(candyToNextLevel(i) * 0.9);
      xl += Math.ceil(xlToNextLevel(i) * 0.9);
      stardust += Math.ceil(stardustToNextLevel(i) * 0.9);
    }
  } else {
    for (let i = startingLevel; i < targetLevel; i++) {
      candy += candyToNextLevel(i);
      xl += xlToNextLevel(i);
      stardust += stardustToNextLevel(i);
    }
  }

  // Stardust cost is halved for lucky pokemons
  if (isLucky) stardust /= 2;

  return {
    candy: candy,
    xl: xl,
    stardust: stardust
  }
}

const candyToNextLevel = (level: number) => {
  if (level < 21) {
    return 1;
  } else if (level < 41) {
    return 2;
  } else if (level < 51) {
    return 3;
  } else if (level < 61) {
    return 4;
  } else if (level < 65) {
    return 6;
  } else if (level < 69) {
    return 8;
  } else if (level < 73) {
    return 10;
  } else if (level < 77) {
    return 12;
  } else if (level < 79) {
    return 15;
  } else {
    return 0;
  }
}

// XL candy required to power up from given level to the next
const xlToNextLevel = (level: number) => {
  if (level < 79 || level > 98) return 0;
  if (level < 83) {
    return 10;
  } else if (level < 87) {
    return 12;
  } else if (level < 91) {
    return 15;
  } else if (level < 95) {
    return 17;
  } else {
    return 20;
  } 
}

const stardustToNextLevel = (level: number) => {
  const baseStardust: number = 100;
  const increment: number[] = [2, 3, 5, 10];
  let multiplier: number = 2;
  let index: number = 0;
  let count: number = 1;

  if (level > 98) return 0;
  for (let i = 4; i < 100; i += 4) {
    if (level <= i) break;

    multiplier += increment[index];
    count++;

    if (count == 5) {
      count = 0;
      index = Math.min(index + 1, 3);
    }
  }

  return baseStardust * multiplier;
}

export default calculate;