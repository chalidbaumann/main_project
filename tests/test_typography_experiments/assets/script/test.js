let json = {
    0: {
        "text": "Oh freut mich. Und gerngeschehen",
        "subjectivity": 0.3,
        "polarity": 0.6,
        "confidence": 0.84
    },
    1: {
        "text": "Das habe ich auch gewusst. Danke. Wieso? Oje Aber ja, ich habe auch tolle Albträme gehabt diese Nacht.",
        "subjectivity": 0.5,
        "polarity": 0.2,
        "confidence": 0.84
    },
    2: {
        "text": "Ist ja erst ein erster Entwurf :) Ah ich glaube dann hab ichs noch nicht gehabt nein, aber ich habe dann später noch etwas dran gearbeitet :) Also einfach an den Teilen, die ich geschrieben habe und sonst noch Sachen reinkopiert Stimmt, hab ich gesehen, danke :) Ja :) Bei den andern konnte ich halt nicht viel machen. Sie sollten schon noch ihre Quellen und so reintun Ja :) Und dir? Ah okay :)",
        "subjectivity": 0.8,
        "polarity": 0.4,
        "confidence": 0.9
    },
    3: {
        "text": "Hey. Bin fertig aber komme vor dem Mittag nicht mehr retour. Isst du während der Besprechung? Ok dann guten Appetit. Heeey. Ich habe bei canva eine Präsentation gestartet. Wir können gleichzeitig daran arbeiten... ich habe dir eine Einladung gesendet aber auch den Link auf Miro geladen. Die Folien die drin sind können löschen, anpassen usw. Die Daten auf GitHub sind wieder aktuell. Ich arbeite dann mal weiter an der Präsi. Heeey. Kannst du deine Skizzen betreffend der Umsetzung in die Präsentation einfügen? Danke",
        "subjectivity": 0.2,
        "polarity": -1,
        "confidence": 0.3
    },
    4: {
        "text": "Morpheus ist gerade nach Hause gekommen. Hat mit eine lebendige Maus vor die Füsse gelegt. Ich glaube sie ist unter das Sofa. Ok.",
        "subjectivity": 0.5,
        "polarity": 1,
        "confidence": 0.9
    },
    5: {
        "text": "Ih omg, schaut mal. Das sieht aus, als hätte ich heftig Photoshop gebraucht. Aber omg, das hört sich schon mega nervig an. Wirklich nicht. Uh yay. Oh das hört sich doch gut an. Und nach Erfolg. Es sieht lustig aus. Uah makaber. 10 Stunden. Ist doch gut.",
        "subjectivity": 1,
        "polarity": 0.2,
        "confidence": 0.9
    },
    6: {
        "text": "Woah heftig. Danke. Ich dachte, wir würden einfach mit Miro präsentieren. Sorry, ich war ja heute Abend noch weg. Ganz cool. Danke vielmal!! Eh welche meinst du genau? Sonst mache ich es dann noch morgen Vormittag in einer Pause oder so. Bis morgen, gute Nacht. Bist du schon rüber ins andere Gebäude?",
        "subjectivity": 1,
        "polarity": 1,
        "confidence": 0.7
    },
    7: {
        "text": "Ah stimmt ja wie war es? Hehe ich dachte es hilf und ist vielleicht übersichtlicher. Sonst ist es schon einmal eine gute Vorbereitung für die Zwischenpräsentation. Bis morgen. Ah super! Cool! Ich dachte wir müssen es morgen früh schon haben. Ok dann schauen wir es morgen an. Gute Nacht.",
        "subjectivity": 1,
        "polarity": 1,
        "confidence": 0.1
    },
    8: {
        "text": "Hallo Papi, ich schicke dir gerade noch einen Text aufs Mail... Könntest du den heute vielleicht einmal durchlesen und mir Feedback geben? Also ein bisschen zu allem: Verständlichkeit vom Inhalt, Struktur, Rechtschreibung, Quellen, einheitliche Schreibweise.. Ausser zum Layout, das müssen wir erst noch machen. Danke vielvielmal!",
        "subjectivity": 1,
        "polarity": 1,
        "confidence": 0.6
    },
    9: {
        "text": "Was gibt es zum Mittagessen? Denkt ihr Autofahren vor oder nach dem Abendessen? Um 18 Uhr wäre dann Chorfest. 16 Uhr wäre gut. Abladen lieber in Belp, dass ich dann mit Anna hingehen kann. Ich wäre dann um 15 Uhr in Toffen am Bahnhof, falls es ein nettes Taxi gibt. Weiss man da schon mehr? Dankeeeeee.",
        "subjectivity": 1,
        "polarity": 1,
        "confidence": 1
    },
    10: {
        "text": "typisch Katze. Ich gehe heute nicht zur Party. Viel Spass! Oooh dir auch.",
        "subjectivity": 1,
        "polarity": 1,
        "confidence": 0.1
    }
}

//subjectivity
// 0 = objektiv
// 1 = subjektiv
let objective;
let subjective;
let count = 0;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    objective = color(255, 0, 0);
    subjective = color(0, 0, 255);
    frameRate(1);
}


function draw() {
    background(255);
    if (count > (Object.keys(json).length - 1)) {
        count = 0;
    }
    textSize(40);
    let mycolor = lerpColor(objective, subjective, json[count].subjectivity);
    fill(mycolor);
    text(json[count].text, 50, 50);
    count++;

}


