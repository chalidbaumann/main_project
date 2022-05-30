let json;
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
         if(json[n]['author'] =='Sonja'){
            sonja.appendChild(div);
         }
         else {
            chalid.appendChild(div); 
         }
    }
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
input.addEventListener('change', function () {
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
input.addEventListener('change', function () {
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
        }
    else {
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
        }
    else {
        console.log("inaktiv")
            // show all again
        let chalid = document.getElementById("text-path");
        let sonja = document.getElementById("text-path-two");
        //Sonja
        chalid.style.display = "block";
        }
});





//Button subjectivity
/*var input = document.getElementById('toggleswitch5');
console.log(input);
input.addEventListener('change', function () {
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
});*/



