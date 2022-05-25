let json;
async function printJSON() {
    const response = await fetch("assets/script/test.json");
    json = await response.json();
    //console.log(json);
    writeTextOnPath();
}



function writeTextOnPath() {
    let chalid = document.getElementById("text-path");
    let sonja = document.getElementById("text-path-two");
    //console.log(el)
    for (let n = 0; n < json.length; n++) {
        let div = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
         div.innerHTML = json[n].text;
         div.classList.add(json[n].application);
         if(json[n].author=='Sonja'){
            sonja.appendChild(div);
         }
         else {
            chalid.appendChild(div); 
         }
    }
}

printJSON();


function showWhatsapp(){
    let sonja = document.getElementById("text-path");
    for (let i = 0; i < sonja.children.length; i++){
        if (! (sonja.children[i].classList.contains("Whatsapp")))
        sonja.children[i].style.opacity = 0;
    }
}




//Toggle switch button
var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

input.addEventListener('change',function(){
    if(this.checked) {
        outputtext.innerHTML = "aktiv";
    } else {
        outputtext.innerHTML = "inaktiv";
    }
});
