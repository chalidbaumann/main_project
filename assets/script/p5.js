let json2;
async function printJSON() {
    const response = await fetch("test_2.json");
    json2 = await response.json();
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
    if (count > (Object.keys(json2).length - 1)) { //macht, dass es wieder vorne anfängt wenn Liste zu Ende ist
        count = 0;
    }
     //subjectivity
     let mycolor = lerpColor(objective, subjective, json2[count].subjectivity); //färbt Text nach objektiv/subjektiv
     fill(mycolor);
     count++;

}