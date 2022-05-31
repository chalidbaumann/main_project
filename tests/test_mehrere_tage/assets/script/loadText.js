let json;
let color1 = "rgb(200,10,0)";
let color2 = "rgb(10,10,255)";
async function printJSON() {
    const response = await fetch("assets/script/test.json");
    json = await response.json();
    //console.log(json);
    writeTextOnPath();
}


//Text JSON auf SVG-Pfad tun
function writeTextOnPath() {
    let chalid = document.getElementById("text-path");
    let sonja = document.getElementById("text-path-two");
    for (let n = 19; n < 28; n++) {
        console.log(json[n]['text'], json[n]['application'], json[n]['day'], json[n]['subjectivity'], json[n]['polarity'], json[n]['confidence'])
        let div = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        div.textContent += json[n]['text'];
        div.classList.add(json[n]['application']);
        let c = mixColor(json[n]['subjectivity']);
        div.setAttribute("subjectivityColor", "rgb(" + c[0] + "," + c[1] + "," + c[2] + ")");
        if (json[n]['author'] == 'Sonja') {
            sonja.appendChild(div);
        } else {
            chalid.appendChild(div);
        }
    }
}

function getRGB(str) {
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
        red: match[1],
        green: match[2],
        blue: match[3]
    } : {};
}

function mixColor(percentage) {
    let c1 = getRGB(color1);
    let c2 = getRGB(color2);

    let colormix = [
        Math.round((1 - percentage) * c1.red + percentage * c2.red),
        Math.round((1 - percentage) * c1.green + percentage * c2.green),
        Math.round((1 - percentage) * c1.blue + percentage * c2.blue)
    ];

    return (colormix);
}

printJSON();




/*let chalid = document.getElementById("text-path");
let sonja = document.getElementById("text-path-two");

//subjectivity
let objective; // objektiv = 0 (blau)
let subjective; // subjektiv = 1 (gelb)

let count = 0;


function setup() {
    //subjectivity
    objective = color(0, 255, 255);
    subjective = color(255, 255, 0);

    frameRate(1);
}

function draw() {
    if (count > (Object.keys(json).length - 1)) { //macht, dass es wieder vorne anfängt wenn Liste zu Ende ist
        count = 0;
    }
    //subjectivity
    let mycolor = lerpColor(objective, subjective, json[count].subjectivity); //färbt Text nach objektiv/subjektiv
    fill(mycolor);


    text(json[count].text, 50, 50, 500, window.innerHeight);

    count++;

}*/





//Toggle switch button
//Button für Nur E-Mail und Word
var input = document.getElementById('toggleswitch1');
console.log(input);
input.addEventListener('change', function() {
    if (this.checked) {
        console.log("aktiv")
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            console.log(chalid.children[i].classList.contains("Whatsapp"));
            if (chalid.children[i].classList.contains("Whatsapp")) { //alle WhatsApps nicht anzeigen
                chalid.children[i].style.display = "none";
            }

        }
        //Sonja
        for (let i = 0; i < sonja.children.length; i++) {
            console.log(sonja.children[i].classList.contains("Whatsapp"));
            if (sonja.children[i].classList.contains("Whatsapp")) {
                sonja.children[i].style.display = "none";
            }

        }

    } else {
        console.log("inaktiv")
            // show all again
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            if (chalid.children[i].classList.contains("Whatsapp")) { //alle WhatsApps wieder anzeigen
                chalid.children[i].style.display = "block";
            }
        }
        //Sonja
        for (let i = 0; i < sonja.children.length; i++) {
            if (sonja.children[i].classList.contains("Whatsapp")) {
                sonja.children[i].style.display = "block";
            }
        }
    }
});




//Button für Nur Whatsapp
var input = document.getElementById('toggleswitch2');
console.log(input);
input.addEventListener('change', function() {
    if (this.checked) {
        console.log("aktiv")
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            console.log(chalid.children[i].classList.contains("Ewolack"));
            if (chalid.children[i].classList.contains("Ewolack")) {
                chalid.children[i].style.display = "none";
            }
        }
        //Sonja
        for (let i = 0; i < sonja.children.length; i++) {
            console.log(sonja.children[i].classList.contains("Ewolack"));
            if (sonja.children[i].classList.contains("Ewolack")) {
                sonja.children[i].style.display = "none";
            }
        }

    } else {
        console.log("inaktiv")
            // show all again
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            if (chalid.children[i].classList.contains("Ewolack")) {
                chalid.children[i].style.display = "block";
            }
        }
        //Sonja
        for (let i = 0; i < sonja.children.length; i++) {
            if (sonja.children[i].classList.contains("Ewolack")) {
                sonja.children[i].style.display = "block";
            }
        }
    }
});



//Button für Nur Chalid
var input = document.getElementById('toggleswitch3');
console.log(input);
input.addEventListener('change', function() {
    if (this.checked) {
        console.log("aktiv")
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        sonja.style.display = "none";
    } else {
        console.log("inaktiv")
            // show all again
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        sonja.style.display = "block";
    }
});



//Button für Nur Sonja
var input = document.getElementById('toggleswitch4');
console.log(input);
input.addEventListener('change', function() {
    if (this.checked) {
        console.log("aktiv")
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Sonja
        chalid.style.display = "none";
    } else {
        console.log("inaktiv")
            // show all again
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Sonja
        chalid.style.display = "block";
    }
});





//Button subjectivity
var input = document.getElementById('toggleswitch5');
console.log(input);
input.addEventListener('change', function() {
    if (this.checked) {
        console.log("aktiv")
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            chalid.children[i].style.fill = chalid.children[i].getAttribute("subjectivityColor");
        }
        //Sonja
        for (let i = 0; i < sonja.children.length; i++) {
            sonja.children[i].style.fill = sonja.children[i].getAttribute("subjectivityColor")
        }

    } else {
        console.log("inaktiv")
            // show all again
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            chalid.children[i].style.fill = "";
        }
        //Sonja
        for (let i = 0; i < sonja.children.length; i++) {
            sonja.children[i].style.fill = "";
        }
    }
});