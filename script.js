const translateBtn = document.getElementById("translate-btn");
const fromText = document.getElementById("from-text");
const toText = document.getElementById("to-text");
const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");

translateBtn.addEventListener("click", () => {
  const text = fromText.value.trim();
  const from = fromLang.value;
  const to = toLang.value;

  if (!text) return;

  const apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      toText.value = data.responseData.translatedText;
    })
    .catch(error => {
      toText.value = "Error translating text. ❌";
    });
});
