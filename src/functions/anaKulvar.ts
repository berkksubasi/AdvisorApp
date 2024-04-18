import sideLaneDATA from "../data/mainLaneDATA";


function calculate(name: string, lastName: string, maidenName: string): number {
  const vowels: string[] = ["A", "E", "I", "İ", "O", "U"];
  let total: number = 0;
  const fullName: string = (name + lastName + maidenName).toUpperCase();

  for (let i = 0; i < fullName.length; i++) {
    const letter: string = fullName[i];
    if (vowels.includes(letter)) {
      let harfNumarasi: number = letter.charCodeAt(0) - 64;
      if (letter === "U" || letter === "Ü") {
        total += 3;
      } else if (letter === "O" || letter === "Ö") {
        total += 6;
      } else {
        total += harfNumarasi;
      }
    }
  }

  // İstisna tipolojiler için kontrol
  if (total === 11 || total === 19 || total === 22) {
    return total;
  }

  // Tek haneli tipolojiler için kontrol
  while (total >= 10) {
    total = sumOfDigits(total);
  }

  return total;
}

function mainLaneDATA(conclusion: number): any {
  const typology: any = sideLaneDATA[conclusion];
  if (!typology) {
    return {
      content: "Bilinmeyen bir hata oluştu. Lütfen tekrar deneyin.",
    };
  }
  return typology;
}

function sumOfDigits(num: number): number {
  let sum: number = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}


export { calculate, mainLaneDATA };
