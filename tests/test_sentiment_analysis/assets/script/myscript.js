const language = {
    de: "de",
    fr: "fr",
    it: "it",
    en: "en",
  };
  
  let query = "Ohh dankeee Weisst du gerade ob wir genug Rei haben (egal welcher, ausser Risotto) für 4 Personen? Oke macht nichts Wegen dem was ich kochen wollte Mhm, die vier Sonjs Ah. Ich hab schon nicht einfach so Besuch eingeladen heute Abend Hast du etwas speziell gedacht zum Abendessen? Und hast du schon gegessen oder nicht? Ah oke Aber nicht schlimm, ich sollte heute sowieso noch viel arbeiten. Dann esse ich doch gerade etwas währenddessen Ein zur Kenntnis nehmendes Lächeln Vielleicht hätte ich nicht das nehmen sollen, wenn auch auch ironisch gedeutet werden kann)";

  
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