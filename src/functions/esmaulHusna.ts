function esmaulHusna(dogumTarihi: string): number {
  // Tarih değerini parçalara ayırma ve doğrudan integer'a dönüştür
  const parcalar: number[] = dogumTarihi.split(".").map(Number);
  const gun: number = parcalar[0];
  const ay: number = parcalar[1];
  const yil: number = parcalar[2];

  // Toplamı hesapla
  let toplam: number = gun + ay + (yil % 100);

  // Eğer toplamın 3 hanesi varsa
  if (String(toplam).length === 3) {
    // Eğer toplamın 2. hanesi 0 DEĞİLSE, her hane değerini topla
    if (String(toplam)[1] !== "0") {
      const birinciHane: number = parseInt(String(toplam)[0]);
      const ikinciHane: number = parseInt(String(toplam)[1]);
      const ucuncuHane: number = parseInt(String(toplam)[2]);
      const sonuc: number = birinciHane + ikinciHane + ucuncuHane;
      return sonuc;
    } else {
      // Eğer toplamın 2. hanesi 0 ise, ilk ve üçüncü haneyi topla
      const birinciHane: number = parseInt(String(toplam)[0]);
      const ucuncuHane: number = parseInt(String(toplam)[2]);
      const sonuc: number = birinciHane * 10 + ucuncuHane;
      return sonuc;
    }
  } else {
    // Eğer toplam 3 haneli değilse, sadece 1. ve 2. haneyi topla
    const birinciHane: number = parseInt(String(toplam)[0]);
    const ikinciHane: number = parseInt(String(toplam)[1]);
    const sonuc: number = birinciHane + ikinciHane;
    return sonuc;
  }
}

export default esmaulHusna;
