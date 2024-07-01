"use strict";

const calculatePeakAndStruggleNumbers = (birthdate: Date) => {
  // Doğum tarihini gün, ay, yıl olarak parçalama
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const parcalar: number[] = birthdate.toLocaleDateString('tr-TR', options).split(".").map(Number);
  const day: number = parcalar[0];
  const month: number = parcalar[1];
  const year: number = parcalar[2];

  // Tek haneli sayıya indirgeme işlemi (11 ve 22 hariç)
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

  // Zirve hesaplamaları
  const peak1: number = reduceToOneDigitExceptException(day + month);
  const peak2: number = reduceToOneDigitExceptException(day + year);
  const peak3: number = reduceToOneDigitExceptException(peak1 + peak2);
  const peak4: number = reduceToOneDigitExceptException(month + year);

  // Mücadele hesaplamaları
  const struggles1: number = Math.abs(month - day);
  const struggles2: number = Math.abs(day - year);
  const struggles3: number = reduceToOneDigitExceptException(Math.abs(peak1 - peak2));
  const struggles4: number = Math.abs(month - year);

  // Tek haneli sayıya indirgeme işlemi (Mücadele için)
  const reduceToOneDigitExceptExceptionForStruggles = (num: number): number => {
    while (num > 9) {
      num = Math.floor(num / 10) + (num % 10);
    }
    return num;
  };

  // Detaylı Mücadele hesaplamaları
  const detailedStruggles = {
    struggles1: reduceToOneDigitExceptExceptionForStruggles(struggles1),
    struggles2: reduceToOneDigitExceptExceptionForStruggles(struggles2),
    struggles3: reduceToOneDigitExceptExceptionForStruggles(struggles3),
    struggles4: reduceToOneDigitExceptExceptionForStruggles(struggles4),
  };

  // Sonuçları döndürme
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
