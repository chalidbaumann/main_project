const language = {
    de: "de",
    fr: "fr",
    it: "it",
    en: "en",
};

let query = "Habe es gekriegt. Was für ein Papier möchtest du? Bis wann bräuchtest du die Ausdrucke? Ok dann bereite ich die Daten einfach vor. Heute Mittag drucke ich das Foto von Oma. Ich besorge auch einen Bilderrahmen ok?";


const key = "627cb640944da56a6800e80a"; // keep it secret

async function get_data() {
    const response = await fetch(
        "https://api.textgain.com/sentiment?q=" +
        query +
        "&lang=" +
        language.de +
        "&key=" +
        key, {
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

console.log('hallo')

get_data();