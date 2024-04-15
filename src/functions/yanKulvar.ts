
function calculateSideLane(name: string, lastName: string, maidenName: string): number {
  const silentLetters: { [key: string]: number } = {
    "J": 1, "S": 1, "Ş": 1,
    "B": 2, "K": 2, "T": 2,
    "C": 3, "Ç": 3, "L": 3,
    "D": 4, "M": 4, "V": 4,
    "N": 5, "W": 5,
    "F": 6, "X": 6,
    "G": 7, "Ğ": 7, "P": 7, "Y": 7,
    "H": 8, "Q": 8, "Z": 8,
    "R": 9,
  };


  let totalSilentLetters: number = 0;
  const fullName: string = (name + lastName + maidenName).toUpperCase();

  for (let i = 0; i < fullName.length; i++) {
    const letter: string = fullName[i];
    if (silentLetters.hasOwnProperty(letter)) {
      totalSilentLetters += silentLetters[letter];
    }
  }

  // İstisna tipolojiler
  if (totalSilentLetters === 11 || totalSilentLetters === 19 || totalSilentLetters === 22 || totalSilentLetters === 33) {
    return totalSilentLetters;
  }

  // Tek Haneli Tipolojiler
  while (totalSilentLetters >= 10) {
    totalSilentLetters = sumOfDigits(totalSilentLetters);
  }

  return totalSilentLetters;
}

function sumOfDigits(num: number): number {
  let sum: number = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

export { calculateSideLane };
