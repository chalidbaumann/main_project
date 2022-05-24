let json;
async function printJSON() {
    const response = await fetch("assets/script/test.json");
    json = await response.json();
    //console.log(json);
    writeTextOnPath();
}



function writeTextOnPath() {
    let el = document.getElementById("text-path");
    //console.log(el)
    for (let n = 0; n < json.length; n++) {
        /* let div = document.createElement("div")
         div.innerHTML = json[n].text;
         div.classList.add(json[n].author);
         console.log(div)
         el.appendChild(div);*/
        el.innerHTML = json[n].text;
    }
}

printJSON();