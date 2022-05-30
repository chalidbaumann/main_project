/*let json;
async function printJSON() {
    const response = await fetch("test.json");
    json = await response.json();
    //writeTextOnPath();
}


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
     count++;

}*/