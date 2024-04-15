import { calculate as calculateMainLane } from './anaKulvar';
import { calculateSideLane } from './yanKulvar';

function calculateFonKulvar(name: string, lastName: string, maidenName: string): number {
  // Ana Kulvar ve Yan Kulvar sonuçlarını hesapla
  const mainLaneResult = calculateMainLane(name, lastName, maidenName,);
  const sideLaneResult = calculateSideLane(name, lastName, maidenName);


  let fonKulvarResult = mainLaneResult + sideLaneResult;

  // İstisna tipolojiler
  if ([11, 19, 22, 33].includes(fonKulvarResult)) {
    return fonKulvarResult;
  }

  // Tek haneli tipolojiler için kontrol
  while (fonKulvarResult >= 10) {
    fonKulvarResult = sumOfDigits(fonKulvarResult);
  }

  return fonKulvarResult;
}

function sumOfDigits(num: number): number {
  let sum: number = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

export { calculateFonKulvar };
