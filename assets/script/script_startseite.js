let json;

async function printJSON() {
    const response = await fetch("assets/script/test_2.json");
    json = await response.json();
    //console.log(json);
    writeTextOnPath();
}

//Button Startseite
var input = document.getElementById('toggleswitch_startseite');
input.addEventListener('change', function() {
    if (this.checked) window.location.href = 'index_2.html';
});