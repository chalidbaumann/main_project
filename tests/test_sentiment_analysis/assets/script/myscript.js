const language = {
    de: "de",
    fr: "fr",
    it: "it",
    en: "en",
  };
  
  let query = "😄 typisch Katze. Ich gehe heute nicht zur Party🙈. Viel Spass!😁 Oooh dir auch.";

  
  const key = "627cb640944da56a6800e80a"; // keep it secret
  
  async function get_data() {
    const response = await fetch(
      "https://api.textgain.com/sentiment?q=" +
        query +
        "&lang=" +
        language.de +
        "&key=" +
        key,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        mode: "cors",
      }
    );
  
    const data = await response.json();
    console.log(data);
  }
  
console.log ('hallo')

  get_data();