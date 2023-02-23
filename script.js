//your code here
const evaluatedText = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

evaluatedText.addEventListener('input', () => {
  const words = evaluatedText.value.match(/\b[-?(\w+)?]+\b/gi);
  wordCount.textContent = words ? words.length : 0;
});
