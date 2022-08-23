function calculateBMI(heightInCentimeters, weightInKilograms) {
  let BMI = weightInKilograms / (heightInCentimeters / 100) ** 2
  return BMI.toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"
