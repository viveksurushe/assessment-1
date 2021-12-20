const BmiChart = [
  { from: 0, to: 18.5, category: "Underweight", healthRisk: 'Malnutrition risk' },
  { from: 18.5, to: 24.9, category: "Normal weight", healthRisk: 'Low risk' },
  { from: 25, to: 29.9, category: "Overweight", healthRisk: 'Enhanced risk' },
  { from: 30, to: 34.9, category: "Moderately obese", healthRisk: 'Medium risk' },
  { from: 35, to: 39.9, category: "Severel obese", healthRisk: 'High' },
  { from: 40, to: Infinity, category: "Very severely obese", healthRisk: 'Very high risk ' },
];

module.exports = {
    BmiChart: BmiChart
}