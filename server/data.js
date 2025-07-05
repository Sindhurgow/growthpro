const headlines = [
  "is the go-to spot in",
  "sets the gold standard for service in",
  "has won hearts across",
  "is revolutionizing business in",
  "is your next must-visit destination in",
  "stands tall among competitors in"
];

function generateHeadline(name, location) {
  const phrase = headlines[Math.floor(Math.random() * headlines.length)];
  return `Why ${name} ${phrase} ${location} in 2025`;
}

module.exports = { generateHeadline };