function calculateChakras(name: string, lastName: string, maidenName: string): number[] {
  const fullName = (name + lastName + maidenName).toUpperCase();

  const chakras: number[] = Array.from({ length: 9 }, () => 0);

  for (let i = 0; i < fullName.length; i++) {
    const letter = fullName[i];
    switch (letter) {
      case 'A':
      case 'J':
      case 'S':
      case 'Ş':
        chakras[0]++;
        break;
      case 'B':
      case 'K':
      case 'T':
        chakras[1]++;
        break;
      case 'C':
      case 'Ç':
      case 'L':
      case 'U':
      case 'Ü':
        chakras[2]++;
        break;
      case 'D':
      case 'M':
      case 'V':
        chakras[3]++;
        break;
      case 'E':
      case 'N':
      case 'W':
        chakras[4]++;
        break;
      case 'F':
      case 'O':
      case 'Ö':
      case 'X':
        chakras[5]++;
        break;
      case 'G':
      case 'Ğ':
      case 'P':
      case 'Y':
        chakras[6]++;
        break;
      case 'H':
      case 'Q':
      case 'Z':
        chakras[7]++;
        break;
      case 'I':
      case 'İ':
      case 'R':
        chakras[8]++;
        break;
      default:
        break;
    }
  }

  return chakras;
}

export default calculateChakras;
