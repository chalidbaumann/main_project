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
    for (let n = 0; n < json.length; n++) {
        console.log(json[n]['text'], json[n]['application'])
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
            if (chalid.children[i].classList.contains("Whatsapp")) {
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
            if (chalid.children[i].classList.contains("Whatsapp")) {
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
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            if (chalid.children[i].classList()) {
                chalid.children[i].style.display = "none";
            }
        }

    } else {
        console.log("inaktiv")
            // show all again
        let chalid = document.getElementById("text-path");
        //Chalid
        for (let i = 0; i < chalid.children.length; i++) {
            if (chalid.children[i].classList()) {
                chalid.children[i].style.display = "block";
            }
        }
    }
});


//Button für Nur Sonja
