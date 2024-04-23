"use strict";

const calculatePeakAndStruggleNumbers = (birthdate: Date) => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' }; // Tarih formatı seçenekleri
  const parcalar: number[] = birthdate.toLocaleDateString('en-US', options).split("/").map(Number); // İngilizce tarih formatı 
  const day: number = parcalar[1];
  const month: number = parcalar[0];
  const year: number = parcalar[2];

  const reduceToOneDigitExceptException = (num: number): number => {
    if (num === 11 || num === 22) {
      return num;
    } else {
      while (num > 9) {
        num = Math.floor(num / 10) + (num % 10);
      }
      return num;
    }
  };

  const peak1: number = reduceToOneDigitExceptException(day + month);
  const peak2: number = reduceToOneDigitExceptException(day + year);
  const peak3: number = reduceToOneDigitExceptException(peak1 + peak2);
  const peak4: number = reduceToOneDigitExceptException(month + year);

  const reduceToOneDigitExceptExceptionForStruggles = (num: number): number => {
    while (num > 9) {
      num = Math.floor(num / 10) + (num % 10);
    }
    return num;
  };

  const struggles1: number = Math.abs(month - day);
  const struggles2: number = Math.abs(day - year);
  const struggles3: number = reduceToOneDigitExceptException(Math.abs(peak1 - peak2));
  const struggles4: number = Math.abs(month - year);

  const detailedStruggles = {
    struggles1: reduceToOneDigitExceptExceptionForStruggles(struggles1),
    struggles2: reduceToOneDigitExceptExceptionForStruggles(struggles2),
    struggles3: reduceToOneDigitExceptExceptionForStruggles(struggles3),
    struggles4: reduceToOneDigitExceptExceptionForStruggles(struggles4),
  };

  return {
    peaks: [peak1, peak2, peak3, peak4],
    struggles: [
      detailedStruggles.struggles1,
      detailedStruggles.struggles2,
      detailedStruggles.struggles3,
      detailedStruggles.struggles4,
    ],
  };
};

export default calculatePeakAndStruggleNumbers;
