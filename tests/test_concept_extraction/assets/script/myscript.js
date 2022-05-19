const language = {
    de: "de",
    fr: "fr",
    it: "it",
    en: "en",
};

let query = "Oh freut mich. Und gerngeschehen. Das habe ich auch gewusst. Danke. Wieso ? Oje. Aber ja, ich habe auch tolle Albträume gehabt diese Nacht. Ist ja erst ein erster Entwurf :) Ah ich glaube dann hab ichs noch nicht gehabt nein, aber ich habe dann später noch etwas dran gearbeitet :) Also einfach an den Teilen, die ich geschrieben habe und sonst noch Sachen reinkopiert. Stimmt, hab ich gesehen, danke :) Ja :) Bei den andern konnte ich halt nicht viel machen. Sie sollten schon noch ihre Quellen und so reintun. Ja :) Und dir? Ah okay :) Ich komme auch gerade :) So, endlich kann ich (jedenfalls teilweise, bis wir losgehen) auf die Nachrichten reagieren! Ooh ok interessant! Ja Broken Needle hat wirklich eine schöne Melodie. Aber interessant, dass du Erased zu deinen Lieblings zählst, das hätte ich jetzt irgendwie nicht gedacht. Ah und Spirits will collide.. ja das ist vielleicht nicht mega metal-mässig, aber es hat so etwas mega cooles motivierend-tröstend-ermuetigendes finge ich. Uhh cool. Uii. Uuh yay, Verbündete, die Marylin Manson toll finden (Nicht wie geschmackslose Personen wie Sebi). Wir sind zusammen auf dem Zug. Yayy ja das ist wirklich noch eingängig und natürlich cool. Nein. Ja es ist interessant. Uhh yay. Das ist ja wirklich eine mega fiese Formulierung. Kannst du mir schreiben wenn du davon zurück bist? Mir gehts gerade nicht gut. Und sehen wir uns morgen einmal, nicht zu spät? Am liebsten hätte ich heute Abend ganz viele Umarmungen von dir. Können wir doch noch Fluch der Karibik 4 zusammen schauen? Morgen Abend zum Beispiel? Ah ja.. gehst du heute Abend von Olten an die Party oder direkt von Zürich? Ah ok. Ich hoffe es reicht mir auch. Also vorher nochmals nach Olten für das Schulzeug hintun. Wollen wir dann zusammen losgehen? Uah ich habe gerade keine Zeit für Sprachnachrichten. Wann gehst du los? ? Wegen dem was Kriszti geschrieben hat. Treffen wir uns jetzt irgendwie 17:30? Ich schaffe es wahrscheinlich frühstens auf den. Nein. Ausser ich ginge später hin als 17:30. Das scheisst mich schon sehr an. Uii Planänderung, ich habs jetzt doch schon auf den 3 Zug geschafft. Ohh ups wir sollten ja Hochdeutsch schreiben. Oke:) Hast glaub ich nicht mehr viel verpasst. Ja, ich denke schon. Man kann nur morgen Autofahren üben, oder? Oje, das gibt wieder einmal einen Terminclinch. Dann habe ich mogen 4 Termine gleichzeitig. Ist 135.- zu viel für Sandalen?lsdföDHFJDBBCCCCCCCCCCCCCCCCCSandalen?lsdfSandalen?lsdfSandalen?lsdfSandalen?lsdfSanda";


const key = "627cb640944da56a6800e80a"; // keep it secret

async function get_data() {
    const response = await fetch(
        "https://api.textgain.com/concepts?q=" +
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