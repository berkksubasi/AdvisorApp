function calculateAuraColor(birthDate: string): string {
  // Tarihi parçalara ayır
  const [_day, _month, _year] = birthDate.split("/");
  const day: number = parseInt(_day);
  const month: number = parseInt(_month);
  const year: number = parseInt(_year);

  // Rakamları topla
  let sum: number = day + month + year;

  console.log("Toplam:", sum);

  // Toplamın basamaklarını topla ve tek haneliye düşür (11 ve 22 dışında)
  while (sum >= 10) {
    if (sum === 11) return "Gümüş";
    if (sum === 19) return "Beyaz";
    if (sum === 22) return "Altın";
    let temp: number = sum;
    sum = 0;
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
  }
  console.log("Tek haneli sonuç:", sum);

  // Aura rengini döndür
  switch (sum) {
    case 1:
      return "Kırmızı";
    case 2:
      return "Turuncu";
    case 3:
      return "Sarı";
    case 4:
      return "Yeşil";
    case 5:
      return "Mavi";
    case 6:
      return "Indigo";
    case 7:
      return "Mor";
    case 8:
      return "Pembe";
    case 9:
      return "Bronz";
    default:
      return "Bilinmeyen";
  }
}

export default calculateAuraColor;
