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
    for (let i = startingLevel; i < targetLevel; i++) {
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
  if (level <= 20) {
    return 1;
  } else if (level <= 40) {
    return 2;
  } else if (level <= 50) {
    return 3;
  } else if (level <= 60) {
    return 4;
  } else if (level <= 64) {
    return 6;
  } else if (level <= 68) {
    return 8;
  } else if (level <= 75) {
    return 10;
  } else if (level <= 76) {
    return 12;
  } else if (level <= 80) {
    return 15;
  } else {
    return 0;
  }
}

const xlToNextLevel = (level: number) => {
  if (level < 80) return 0;
  if (level <= 82) {
    return 10;
  } else if (level <= 86) {
    return 12;
  } else if (level <= 90) {
    return 15;
  } else if (level <= 94) {
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

  for (let i = 4; i <= level; i += 4) {
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