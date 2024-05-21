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
    for (let i = startingLevel; i < targetLevel; i++) {
      candy += Math.ceil(candyToNextLevel(i) * 1.2);
      xl += Math.ceil(xlToNextLevel(i) * 1.2);
      stardust += Math.ceil(stardustToNextLevel(i) * 1.2);
    }
  } else if (isPurified) {
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
  let count: number = 0;

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

  // if (level <= 5) {
  //   return baseStardust * 2
  // } else if (level <= 9) {
  //   return baseStardust * 4;
  // } else if (level <= 13) {
  //   return baseStardust * 6;
  // } else if (level <= 17) {
  //   return baseStardust * 8;
  // } else if (level <= 21) {
  //   return baseStardust * 10;
  // } else if (level <= 25) {
  //   return baseStardust * 13;
  // } else if (level <= 29) {
  //   return baseStardust * 16;
  // } else if (level <= 33) {
  //   return baseStardust * 19;
  // } else if (level <= 37) {
  //   return baseStardust * 22;
  // } else if (level <= 41) {
  //   return baseStardust * 25;
  // } else if (level <= 45) {
  //   return baseStardust * 30;
  // } else if (level <= 49) {
  //   return baseStardust * 35;
  // } else if (level <= 53) {
  //   return baseStardust * 40;
  // } else if (level <= 57) {
  //   return baseStardust * 45;
  // } else if (level <= 61) {
  //   return baseStardust * 50;
  // } else if (level <= 65) {
  //   return baseStardust * 60;
  // } else if (level <= 69) {
  //   return baseStardust * 70;
  // } else if (level <= 73) {
  //   return baseStardust * 80;
  // } else if (level <= 77) {
  //   return baseStardust * 90;
  // } else if (level <= 81) {
  //   return baseStardust * 100;
  // } else if (level <= 85) {
  //   return baseStardust * 110;
  // } else if (level <= 89) {
  //   return baseStardust * 120;
  // } else if (level <= 93) {
  //   return baseStardust * 130;
  // } else if (level <= 97) {
  //   return baseStardust * 140;
  // } else if (level <= 100) {
  //   return baseStardust * 150;
  // }
}

export default calculate;