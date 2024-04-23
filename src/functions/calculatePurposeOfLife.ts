import purposeOfLifeDATA from "../data/purposeOfLifeDATA";

const calculatePurposeOfLife = (birthdate: Date) => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const birthDateStr: string = birthdate.toLocaleDateString('en-US', options);

  let digitsSum = birthDateStr
    .split("")
    .filter((char) => !isNaN(parseInt(char)))
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);

  while (digitsSum > 9) {
    digitsSum = Math.floor(digitsSum / 10) + (digitsSum % 10);
  }

  return digitsSum;
};

const findPurposeOfLife = (birthdate: Date) => {
  const purposeSum = calculatePurposeOfLife(birthdate);
  const purpose = purposeOfLifeDATA.find(item => item.purposeSum === purposeSum);
  return purpose ? purpose : null;
};



export default calculatePurposeOfLife;
